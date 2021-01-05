import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Text } from "../../../shared/Text";
import { Link } from "react-router-dom";
import { Grid } from "../../../shared/Grid";
import image from "../../../assets/img/image 2.png";
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
  margin-left: 20px;
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

export const StateWise =({ title })=>{
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
                  <Collapsible trigger="Food and Beverages">
                      <Export>Export</Export>
                      <Table>
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
                          <Tr>
                              <Td>Alfreds Futterkiste</Td>
                              <Td>Maria Anders</Td>
                              <Td>Germany</Td>
                              <Td>abc</Td>
                              <Td>segsedgf</Td>
                              <Td></Td>
                              <Td><a href="">View</a></Td>
                              <Td><a href="">View</a></Td>
                          </Tr>
                          <Tr>
                              <Td>Berglunds snabbköp</Td>
                              <Td>Christina Berglund</Td>
                              <Td>Sweden</Td>
                          </Tr>
                          <Tr>
                              <Td>CenTro comercial Moctezuma</Td>
                              <Td>Francisco Chang</Td>
                              <Td>Mexico</Td>
                          </Tr>
                          <Tr>
                              <Td>Ernst Handel</Td>
                              <Td>Roland Mendel</Td>
                              <Td>AusTria</Td>
                          </Tr>
                          <Tr>
                              <Td>Island Trading</Td>
                              <Td>Helen Bennett</Td>
                              <Td>UK</Td>
                          </Tr>
                          <Tr>
                              <Td>Königlich Essen</Td>
                              <Td>Philip Cramer</Td>
                              <Td>Germany</Td>
                              </Tr>
                          <Tr>
                              <Td>Laughing Bacchus Winecellars</Td>
                              <Td>Yoshi Tannamuri</Td>
                              <Td>Canada</Td>
                          </Tr>
                      </Table>
                  </Collapsible>                        
                  <Collapsible trigger="Tannery">
                    <Export>Export</Export>
                      <Table id="state">
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
                          <Tr>
                              <Td>Alfreds Futterkiste</Td>
                              <Td>Maria Anders</Td>
                              <Td>Germany</Td>
                              <Td>abc</Td>
                              <Td>segsedgf</Td>
                              <Td></Td>
                              <Td><a href="">View</a></Td>
                              <Td><a href="">View</a></Td>
                          </Tr>
                          <Tr>
                              <Td>Berglunds snabbköp</Td>
                              <Td>Christina Berglund</Td>
                              <Td>Sweden</Td>
                          </Tr>
                          <Tr>
                              <Td>CenTro comercial Moctezuma</Td>
                              <Td>Francisco Chang</Td>
                              <Td>Mexico</Td>
                          </Tr>
                          <Tr>
                              <Td>Ernst Handel</Td>
                              <Td>Roland Mendel</Td>
                              <Td>AusTria</Td>
                          </Tr>
                          <Tr>
                              <Td>Island Trading</Td>
                              <Td>Helen Bennett</Td>
                              <Td>UK</Td>
                          </Tr>
                          <Tr>
                              <Td>Königlich Essen</Td>
                              <Td>Philip Cramer</Td>
                              <Td>Germany</Td>
                              </Tr>
                          <Tr>
                              <Td>Laughing Bacchus Winecellars</Td>
                              <Td>Yoshi Tannamuri</Td>
                              <Td>Canada</Td>
                          </Tr>
                      </Table>
                  </Collapsible>
                  <Collapsible trigger="Sugar">
                    <Export>Export</Export>
                      <Table id="state">
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
                          <Tr>
                              <Td>Alfreds Futterkiste</Td>
                              <Td>Maria Anders</Td>
                              <Td>Germany</Td>
                              <Td>abc</Td>
                              <Td>segsedgf</Td>
                              <Td></Td>
                              <Td><a href="">View</a></Td>
                              <Td><a href="">View</a></Td>
                          </Tr>
                          <Tr>
                              <Td>Berglunds snabbköp</Td>
                              <Td>Christina Berglund</Td>
                              <Td>Sweden</Td>
                          </Tr>
                          <Tr>
                              <Td>CenTro comercial Moctezuma</Td>
                              <Td>Francisco Chang</Td>
                              <Td>Mexico</Td>
                          </Tr>
                          <Tr>
                              <Td>Ernst Handel</Td>
                              <Td>Roland Mendel</Td>
                              <Td>AusTria</Td>
                          </Tr>
                          <Tr>
                              <Td>Island Trading</Td>
                              <Td>Helen Bennett</Td>
                              <Td>UK</Td>
                          </Tr>
                          <Tr>
                              <Td>Königlich Essen</Td>
                              <Td>Philip Cramer</Td>
                              <Td>Germany</Td>
                              </Tr>
                          <Tr>
                              <Td>Laughing Bacchus Winecellars</Td>
                              <Td>Yoshi Tannamuri</Td>
                              <Td>Canada</Td>
                          </Tr>
                      </Table>
                  </Collapsible>
                  <Collapsible trigger="Pharmaceutical">
                    <Export>Export</Export>
                      <Table id="state">
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
                          <Tr>
                              <Td>Alfreds Futterkiste</Td>
                              <Td>Maria Anders</Td>
                              <Td>Germany</Td>
                              <Td>abc</Td>
                              <Td>segsedgf</Td>
                              <Td></Td>
                              <Td><a href="">View</a></Td>
                              <Td><a href="">View</a></Td>
                          </Tr>
                          <Tr>
                              <Td>Berglunds snabbköp</Td>
                              <Td>Christina Berglund</Td>
                              <Td>Sweden</Td>
                          </Tr>
                          <Tr>
                              <Td>CenTro comercial Moctezuma</Td>
                              <Td>Francisco Chang</Td>
                              <Td>Mexico</Td>
                          </Tr>
                          <Tr>
                              <Td>Ernst Handel</Td>
                              <Td>Roland Mendel</Td>
                              <Td>AusTria</Td>
                          </Tr>
                          <Tr>
                              <Td>Island Trading</Td>
                              <Td>Helen Bennett</Td>
                              <Td>UK</Td>
                          </Tr>
                          <Tr>
                              <Td>Königlich Essen</Td>
                              <Td>Philip Cramer</Td>
                              <Td>Germany</Td>
                              </Tr>
                          <Tr>
                              <Td>Laughing Bacchus Winecellars</Td>
                              <Td>Yoshi Tannamuri</Td>
                              <Td>Canada</Td>
                          </Tr>
                      </Table>
                  </Collapsible>
                  <Collapsible trigger="Food, Dairy and Beverages">
                    <Export>Export</Export>
                      <Table id="state">
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
                          <Tr>
                              <Td>Alfreds Futterkiste</Td>
                              <Td>Maria Anders</Td>
                              <Td>Germany</Td>
                              <Td>abc</Td>
                              <Td>segsedgf</Td>
                              <Td></Td>
                              <Td><a href="">View</a></Td>
                              <Td><a href="">View</a></Td>
                          </Tr>
                          <Tr>
                              <Td>Berglunds snabbköp</Td>
                              <Td>Christina Berglund</Td>
                              <Td>Sweden</Td>
                          </Tr>
                          <Tr>
                              <Td>CenTro comercial Moctezuma</Td>
                              <Td>Francisco Chang</Td>
                              <Td>Mexico</Td>
                          </Tr>
                          <Tr>
                              <Td>Ernst Handel</Td>
                              <Td>Roland Mendel</Td>
                              <Td>AusTria</Td>
                          </Tr>
                          <Tr>
                              <Td>Island Trading</Td>
                              <Td>Helen Bennett</Td>
                              <Td>UK</Td>
                          </Tr>
                          <Tr>
                              <Td>Königlich Essen</Td>
                              <Td>Philip Cramer</Td>
                              <Td>Germany</Td>
                              </Tr>
                          <Tr>
                              <Td>Laughing Bacchus Winecellars</Td>
                              <Td>Yoshi Tannamuri</Td>
                              <Td>Canada</Td>
                          </Tr>
                      </Table>
                  </Collapsible>
              </Col>     
            </body>
        </div>
    );
};





export default StateWise;