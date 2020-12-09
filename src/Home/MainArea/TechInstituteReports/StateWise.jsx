import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Text } from "../../../shared/Text";
import { Link } from "react-router-dom";
import { Grid } from "../../../shared/Grid";
import image from "../../../assets/img/image 2.png";
import "../../../assets/css/state.css"


class Collapsible extends React.Component {
    constructor(props) {
      super(props)
  
      // Bind class methods
      this.handleTriggerClick = this.handleTriggerClick.bind(this);
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
  
    handleTriggerClick(event) {
      event.preventDefault();
  
      if (this.props.triggerDisabled) {
        return
      }
  
      if (this.props.handleTriggerClick) {
        this.props.handleTriggerClick(this.props.accordionPosition);
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
  
    renderNonClickableTriggerElement() {
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
      const TriggerElement = this.props.triggerTagName;
  
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
          <TriggerElement
            className={triggerClassString.trim()}
            onClick={this.handleTriggerClick}
            style={this.props.triggerStyle && this.props.triggerStyle}
            onKeyPress={(event) => {
              const { key } = event;
                if (key === ' ' || key === 'Enter') {
                  this.handleTriggerClick(event);
                }
              }}
              tabIndex={this.props.tabIndex && this.props.tabIndex}
          >
            {trigger}
          </TriggerElement>
  
          {this.renderNonClickableTriggerElement()}
  
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




export const StateWise =({ title })=>{
    return (
        <div>
            <header>
                <div class="container">
                  <h3 style={{ fontSize: "30px",marginTop:"10px", fontFamily:"Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif"}}>
                    <strong>{title}</strong>
                  </h3>
                </div>
            </header>
            <body style={{marginRight:"40px"}}>
                <div class="a">
                  <Collapsible trigger="Food and Beverages">
                      <button class="export">Export</button>
                      <table id="state">
                          <tr>
                              <th>S. NO.</th>
                              <th>UNIT CODE</th>
                              <th>UNIT NAME</th>
                              <th>REGION</th>
                              <th>SECTOR</th>
                              <th>INSPECTION DATE</th>
                              <th>FIELD REPORT</th>
                              <th>FINAL REPORT</th>
                          </tr>
                          <tr>
                              <td>Alfreds Futterkiste</td>
                              <td>Maria Anders</td>
                              <td>Germany</td>
                              <td>abc</td>
                              <td>segsedgf</td>
                              <td></td>
                              <td><a href="">View</a></td>
                              <td><a href="">View</a></td>
                          </tr>
                          <tr>
                              <td>Berglunds snabbköp</td>
                              <td>Christina Berglund</td>
                              <td>Sweden</td>
                          </tr>
                          <tr>
                              <td>Centro comercial Moctezuma</td>
                              <td>Francisco Chang</td>
                              <td>Mexico</td>
                          </tr>
                          <tr>
                              <td>Ernst Handel</td>
                              <td>Roland Mendel</td>
                              <td>Austria</td>
                          </tr>
                          <tr>
                              <td>Island Trading</td>
                              <td>Helen Bennett</td>
                              <td>UK</td>
                          </tr>
                          <tr>
                              <td>Königlich Essen</td>
                              <td>Philip Cramer</td>
                              <td>Germany</td>
                              </tr>
                          <tr>
                              <td>Laughing Bacchus Winecellars</td>
                              <td>Yoshi Tannamuri</td>
                              <td>Canada</td>
                          </tr>
                      </table>
                  </Collapsible>                        
                  <Collapsible trigger="Tannery">
                  <button class="export">Export</button>
                      <table id="state">
                          <tr>
                              <th>S. NO.</th>
                              <th>UNIT CODE</th>
                              <th>UNIT NAME</th>
                              <th>REGION</th>
                              <th>SECTOR</th>
                              <th>INSPECTION DATE</th>
                              <th>FIELD REPORT</th>
                              <th>FINAL REPORT</th>
                          </tr>
                          <tr>
                              <td>Alfreds Futterkiste</td>
                              <td>Maria Anders</td>
                              <td>Germany</td>
                              <td>abc</td>
                              <td>segsedgf</td>
                              <td></td>
                              <td><a href="">View</a></td>
                              <td><a href="">View</a></td>
                          </tr>
                          <tr>
                              <td>Berglunds snabbköp</td>
                              <td>Christina Berglund</td>
                              <td>Sweden</td>
                          </tr>
                          <tr>
                              <td>Centro comercial Moctezuma</td>
                              <td>Francisco Chang</td>
                              <td>Mexico</td>
                          </tr>
                          <tr>
                              <td>Ernst Handel</td>
                              <td>Roland Mendel</td>
                              <td>Austria</td>
                          </tr>
                          <tr>
                              <td>Island Trading</td>
                              <td>Helen Bennett</td>
                              <td>UK</td>
                          </tr>
                          <tr>
                              <td>Königlich Essen</td>
                              <td>Philip Cramer</td>
                              <td>Germany</td>
                              </tr>
                          <tr>
                              <td>Laughing Bacchus Winecellars</td>
                              <td>Yoshi Tannamuri</td>
                              <td>Canada</td>
                          </tr>
                      </table>
                  </Collapsible>
                  <Collapsible trigger="Sugar">
                      <button class="export">Export</button>
                      <table id="state">
                          <tr>
                              <th>S. NO.</th>
                              <th>UNIT CODE</th>
                              <th>UNIT NAME</th>
                              <th>REGION</th>
                              <th>SECTOR</th>
                              <th>INSPECTION DATE</th>
                              <th>FIELD REPORT</th>
                              <th>FINAL REPORT</th>
                          </tr>
                          <tr>
                              <td>Alfreds Futterkiste</td>
                              <td>Maria Anders</td>
                              <td>Germany</td>
                              <td>abc</td>
                              <td>segsedgf</td>
                              <td></td>
                              <td><a href="">View</a></td>
                              <td><a href="">View</a></td>
                          </tr>
                          <tr>
                              <td>Berglunds snabbköp</td>
                              <td>Christina Berglund</td>
                              <td>Sweden</td>
                          </tr>
                          <tr>
                              <td>Centro comercial Moctezuma</td>
                              <td>Francisco Chang</td>
                              <td>Mexico</td>
                          </tr>
                          <tr>
                              <td>Ernst Handel</td>
                              <td>Roland Mendel</td>
                              <td>Austria</td>
                          </tr>
                          <tr>
                              <td>Island Trading</td>
                              <td>Helen Bennett</td>
                              <td>UK</td>
                          </tr>
                          <tr>
                              <td>Königlich Essen</td>
                              <td>Philip Cramer</td>
                              <td>Germany</td>
                              </tr>
                          <tr>
                              <td>Laughing Bacchus Winecellars</td>
                              <td>Yoshi Tannamuri</td>
                              <td>Canada</td>
                          </tr>
                      </table>
                  </Collapsible>
                  <Collapsible trigger="Pharmaceutical">
                      <button class="export">Export</button>
                      <table id="state">
                          <tr>
                              <th>S. NO.</th>
                              <th>UNIT CODE</th>
                              <th>UNIT NAME</th>
                              <th>REGION</th>
                              <th>SECTOR</th>
                              <th>INSPECTION DATE</th>
                              <th>FIELD REPORT</th>
                              <th>FINAL REPORT</th>
                          </tr>
                          <tr>
                              <td>Alfreds Futterkiste</td>
                              <td>Maria Anders</td>
                              <td>Germany</td>
                              <td>abc</td>
                              <td>segsedgf</td>
                              <td></td>
                              <td><a href="">View</a></td>
                              <td><a href="">View</a></td>
                          </tr>
                          <tr>
                              <td>Berglunds snabbköp</td>
                              <td>Christina Berglund</td>
                              <td>Sweden</td>
                          </tr>
                          <tr>
                              <td>Centro comercial Moctezuma</td>
                              <td>Francisco Chang</td>
                              <td>Mexico</td>
                          </tr>
                          <tr>
                              <td>Ernst Handel</td>
                              <td>Roland Mendel</td>
                              <td>Austria</td>
                          </tr>
                          <tr>
                              <td>Island Trading</td>
                              <td>Helen Bennett</td>
                              <td>UK</td>
                          </tr>
                          <tr>
                              <td>Königlich Essen</td>
                              <td>Philip Cramer</td>
                              <td>Germany</td>
                              </tr>
                          <tr>
                              <td>Laughing Bacchus Winecellars</td>
                              <td>Yoshi Tannamuri</td>
                              <td>Canada</td>
                          </tr>
                      </table>
                  </Collapsible>
                  <Collapsible trigger="Food, Dairy and Beverages">
                      <button class="export">Export</button>
                      <table id="state">
                          <tr>
                              <th>S. NO.</th>
                              <th>UNIT CODE</th>
                              <th>UNIT NAME</th>
                              <th>REGION</th>
                              <th>SECTOR</th>
                              <th>INSPECTION DATE</th>
                              <th>FIELD REPORT</th>
                              <th>FINAL REPORT</th>
                          </tr>
                          <tr>
                              <td>Alfreds Futterkiste</td>
                              <td>Maria Anders</td>
                              <td>Germany</td>
                              <td>abc</td>
                              <td>segsedgf</td>
                              <td></td>
                              <td><a href="">View</a></td>
                              <td><a href="">View</a></td>
                          </tr>
                          <tr>
                              <td>Berglunds snabbköp</td>
                              <td>Christina Berglund</td>
                              <td>Sweden</td>
                          </tr>
                          <tr>
                              <td>Centro comercial Moctezuma</td>
                              <td>Francisco Chang</td>
                              <td>Mexico</td>
                          </tr>
                          <tr>
                              <td>Ernst Handel</td>
                              <td>Roland Mendel</td>
                              <td>Austria</td>
                          </tr>
                          <tr>
                              <td>Island Trading</td>
                              <td>Helen Bennett</td>
                              <td>UK</td>
                          </tr>
                          <tr>
                              <td>Königlich Essen</td>
                              <td>Philip Cramer</td>
                              <td>Germany</td>
                              </tr>
                          <tr>
                              <td>Laughing Bacchus Winecellars</td>
                              <td>Yoshi Tannamuri</td>
                              <td>Canada</td>
                          </tr>
                      </table>
                  </Collapsible>
              </div>     
            </body>
        </div>
    );
};





export default StateWise;