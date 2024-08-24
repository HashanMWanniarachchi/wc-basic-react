import React from 'react';
import ReactDOM from 'react-dom';
import HeroList from './HeroList';

class WebComponentWrapper extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.renderReactComponent();
  }

  renderReactComponent() {
    ReactDOM.render(<HeroList />, this.shadow);
  }
}
export default WebComponentWrapper;