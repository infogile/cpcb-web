import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import store from "../../../redux/store";
import { getSectorWise } from "../../../redux/services/";
import { Loading } from "../../../shared/Loading";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../../helpers";
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';
import "../../../assets/css/collapse.css";

class Collapsible extends React.Component {
  constructor(props) {
    super(props)

    // Bind class methods
    this.handletriggerClick = this.handletriggerClick.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.continueOpenCollapsible = this.continueOpenCollapsible.bind(this);

    // Defaults the dropdown to be closed
    if (props.open) {
      this.state = {
        isClosed: false,
        shouldSwitchAutoOnNextCycle: false,
        height: 'auto',
        transition: 'none',
        hasBeenOpened: true,
        overflow: props.overflowWhenOpen,
        inTransition: false,
      }
    } else {
      this.state = {
        isClosed: true,
        shouldSwitchAutoOnNextCycle: false,
        height: 0,
        transition: `height ${props.transitionTime}ms ${props.easing}`,
        hasBeenOpened: false,
        overflow: 'hidden',
        inTransition: false,
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.shouldOpenOnNextCycle){
      this.continueOpenCollapsible();
    }

    if (prevState.height === 'auto' && this.state.shouldSwitchAutoOnNextCycle === true) {
      window.setTimeout(() => { // Set small timeout to ensure a true re-render
        this.setState({
          height: 0,
          overflow: 'hidden',
          isClosed: true,
          shouldSwitchAutoOnNextCycle: false,
        });
      }, 50);
    }

    // If there has been a change in the open prop (controlled by accordion)
    if (prevProps.open !== this.props.open) {
      if(this.props.open === true) {
        this.openCollapsible();
        this.props.onOpening();
      } else {
        this.closeCollapsible();
        this.props.onClosing();
      }
    }
  }

  closeCollapsible() {
    this.setState({
      shouldSwitchAutoOnNextCycle: true,
      height: this.refs.inner.offsetHeight,
      transition: `height ${this.props.transitionCloseTime ?
        this.props.transitionCloseTime : this.props.transitionTime}ms ${this.props.easing}`,
      inTransition: true,
    });
  }

  openCollapsible() {
    this.setState({
      inTransition: true,
      shouldOpenOnNextCycle: true,
    });
  }

  continueOpenCollapsible() {
    this.setState({
      height: this.refs.inner.offsetHeight,
      transition: `height ${this.props.transitionTime}ms ${this.props.easing}`,
      isClosed: false,
      hasBeenOpened: true,
      inTransition: true,
      shouldOpenOnNextCycle: false,
    });
  }

  handletriggerClick(event) {
    event.preventDefault();

    if (this.props.triggerDisabled) {
      return
    }

    if (this.props.handletriggerClick) {
      this.props.handletriggerClick(this.props.accordionPosition);
    } else {
      if (this.state.isClosed === true) {
        this.openCollapsible();
        this.props.onOpening();
      } else {
        this.closeCollapsible();
        this.props.onClosing();
      }
    }
  }

  renderNonClickabletriggerElement() {
    if (this.props.triggerSibling && typeof this.props.triggerSibling === 'string') {
      return (
        <span className={`${this.props.classParentString}__trigger-sibling`}>{this.props.triggerSibling}</span>
      )
    } else if(this.props.triggerSibling) {
      return <this.props.triggerSibling />
    }

    return null;
  }

  handleTransitionEnd() {
    // Switch to height auto to make the container responsive
    if (!this.state.isClosed) {
      this.setState({ height: 'auto', overflow: this.props.overflowWhenOpen, inTransition: false });
      this.props.onOpen();
    } else {
      this.setState({ inTransition: false });
      this.props.onClose();
    }
  }

  render() {
    var dropdownStyle = {
      height: this.state.height,
      WebkitTransition: this.state.transition,
      msTransition: this.state.transition,
      transition: this.state.transition,
      overflow: this.state.overflow,
    }

    var openClass = this.state.isClosed ? 'is-closed' : 'is-open';
    var disabledClass = this.props.triggerDisabled ? 'is-disabled' : '';

    //If user wants different text when tray is open
    var trigger = (this.state.isClosed === false) && (this.props.triggerWhenOpen !== undefined)
                  ? this.props.triggerWhenOpen
                  : this.props.trigger;

    // If user wants a trigger wrapping element different than 'span'
    const triggerElement = this.props.triggerTagName;

    // Don't render children until the first opening of the Collapsible if lazy rendering is enabled
    var children = this.props.lazyRender
      && !this.state.hasBeenOpened
      && this.state.isClosed
      && !this.state.inTransition ? null : this.props.children;

    // Construct CSS classes strings
    const triggerClassString = `${this.props.classParentString}__trigger ${openClass} ${disabledClass} ${
      this.state.isClosed ? this.props.triggerClassName : this.props.triggerOpenedClassName
    }`;
    const parentClassString = `${this.props.classParentString} ${
      this.state.isClosed ? this.props.className : this.props.openedClassName
    }`;
    const outerClassString = `${this.props.classParentString}__contentOuter ${this.props.contentOuterClassName}`;
    const innerClassString = `${this.props.classParentString}__contentInner ${this.props.contentInnerClassName}`;

    return(
      <div className={parentClassString.trim()}>
        <triggerElement
          className={triggerClassString.trim()}
          onClick={this.handletriggerClick}
          style={this.props.triggerStyle && this.props.triggerStyle}
          onKeyPress={(event) => {
            const { key } = event;
              if (key === ' ' || key === 'Enter') {
                this.handletriggerClick(event);
              }
            }}
            tabIndex={this.props.tabIndex && this.props.tabIndex}
        >
          {trigger}
        </triggerElement>

        {this.renderNonClickabletriggerElement()}

        <div
          className={outerClassString.trim()}
          ref="outer"
          style={dropdownStyle}
          onTransitionEnd={this.handleTransitionEnd}
        >
          <div
            className={innerClassString.trim()}
            ref="inner"
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Collapsible.defaultProps = {
  transitionTime: 400,
  transitionCloseTime: null,
  triggerTagName: 'span',
  easing: 'linear',
  open: false,
  classParentString: 'Collapsible',
  triggerDisabled: false,
  lazyRender: false,
  overflowWhenOpen: 'hidden',
  openedClassName: '',
  triggerStyle: null,
  triggerClassName: '',
  triggerOpenedClassName: '',
  contentOuterClassName: '',
  contentInnerClassName: '',
  className: '',
  triggerSibling: null,
  onOpen: () => {},
  onClose: () => {},
  onOpening: () => {},
  onClosing: () => {},
  tabIndex: null,
};

  const Table= styled.table`
  margin-left: 1px;
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  widTh: 100%;
  background: white;
  border-spacing: 0px;
  text-align: center;
  `;
  
  
  const Th = styled.th`
    border-bottom: solid 1px #cccccc;
    border-left: solid 1px #cccccc;
    :first-child {
      border-left: none;
    }
    border: 1px solid #ddd;
    padding: 8px;
    padding-top: 12px;
      padding-bottom: 12px;
      text-align: center;
      background-color: rgb(124, 119, 119);
      color: white;
  `;
  
  const Tr = styled.tr`
    :hover {
      background: #dadada;
    }
  `;
  
  const Td = styled.td`
    padding: 20px 10px;
    border: 1px solid #ddd;
    padding: 8px;
    font-size: ${(props) => props.fontSize};
    white-space: ${(props) => props.whiteSpace};
    text-align: center;
    border-left: solid 1px #cccccc;
    :first-child {
      border-left: none;
    }
  `;

  const Col = styled.div`
  position: inline-block;
      width: 100%;
      margin-bottom: 200px;
      margin-top: 50px;
  `;

  const Export = styled.button`
  background-color: #f44336; 
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 12px;
  margin-left: 94.5%;
  cursor: pointer;
  border-radius: 12px;
  `;


  const ReportLink = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #00a8f3;
  font-weight: 600;
  padding: 10px 0px;
`;



export const SectorWise =({ title })=>{
  const params = useParams();
  const { isLoading, data } = useSelector((state) => state.sectorWiseReducers);
    useEffect(() => {
        store.dispatch(getSectorWise(params.river_name || ""));
    }, [params.river_name]);

    const printDocument= (sectorn) => {  
      const input = document.getElementById('pdfdiv');  
      html2canvas(input)  
        .then((canvas) => {  
          var imgWidth = 200;    
          var imgHeight = canvas.height * imgWidth / canvas.width;  
          const imgData = canvas.toDataURL('image/png');  
          const pdf = new jsPDF('p', 'mm', 'a4')  
          var position = 0;  
          pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
          pdf.save(`${sectorn}.pdf`);  
        });  
    };

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
          <header>
            <div class="container">
              <h3 style={{ marginLeft : "30px", fontSize: "30px",marginTop:"10px", fontFamily:"Avantgarde, TeX Gyre Adventor, URW GoThic L, sans-serif"}}>
                <sTrong>{title}</sTrong>
              </h3>
            </div>
          </header>
          <body style={{marginRight:"40px", marginLeft :"25px"}}>
            <Col>
              {data && data.map((sect) => {
                var num=1;
                return (
                  <Collapsible trigger={capitalizeFirstLetter(sect[0].sectorname)}>
                    <Export onClick={() => printDocument(capitalizeFirstLetter(sect[0].sectorname))} >Export</Export>
                    <Table id="pdfdiv">
                      <Tr>
                        <Th>S. NO.</Th>
                        <Th>UNIT CODE</Th>
                        <Th>UNIT NAME</Th>
                        <Th>REGION</Th>
                        <Th>SECTOR</Th>
                        <Th>INSPECTION DATE</Th>
                        <Th>FIELD REPORT</Th>
                        <Th>FINAL REPORT</Th>              
                      </Tr>
                      {sect && sect.map((sector) => {
                        return (
                          <Tr>
                            <Td>{num++}</Td>
                            <Td>{sector.unitcode}</Td>
                            <Td>{capitalizeFirstLetter(sector.unitname)}</Td>
                            <Td>{capitalizeFirstLetter(sector.region)}</Td>
                            <Td>{capitalizeFirstLetter(sector.sectorname)}</Td>
                            <Td>{sector.inspectionDate===null?"Pending": sector.inspectionDate }</Td>
                            <Td fontSize="15px">
                              {sector.status === 0 && "Pending"}
                              {sector.status > 0 && (
                                <ReportLink to={`/headoffice/tir/${params.river_name}/sectorwise/field_report/${sector.id}`}>
                                  View Report
                                </ReportLink>
                              )}
                            </Td>
                            <Td fontSize="15px">
                              {(sector.status === 1 || sector.status === 0) && "Pending"}
                              {sector.status >= 2 && (
                                <ReportLink to={`/headoffice/tir/${params.river_name}/sectorwise/inspection_report/${sector.id}`}>
                                  View Report
                                </ReportLink>
                              )}
                            </Td>                 
                          </Tr>      
                        );
                      })};
                    </Table>
                  </Collapsible>
                );
              })}                        
            </Col>     
          </body>
      </div>
    );
};





export default SectorWise;