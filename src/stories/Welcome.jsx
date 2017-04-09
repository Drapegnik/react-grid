import React, { Component, PropTypes } from 'react';
import './Welcome.css';

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-danger */

const codeBlock = `
// Add this code to "src/stories/index.js"

import '../index.css';
import App from '../App';

storiesOf('App', module)
  .add('default view', () => (
    &lt;App /&gt;
  ))
`;

export default class Welcome extends Component {
  propTypes = {
    showApp: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.showApp = this.showApp.bind(this);
  }

  showApp(e) {
    e.preventDefault();
    if (this.props.showApp) {
      this.props.showApp();
    }
  }

  render() {
    return (
      <div className="main" >
        <h1>Welcome to STORYBOOK</h1>
        <p>This is a UI component dev environment for your app.</p>
        <p>
          We`ve added some basic stories inside the
          <code className="code" >src/stories</code> directory.<br />

          A story is a single state of one or more UI components.
          You can have as many stories as you want.<br />
          (Basically a story is like a visual test case.)
        </p>
        <p>
          See these sample <a className="link" onClick={this.showApp} >stories</a> for a
          component called <code className="code" >Table</code>.
        </p>
        <p>
          Just like that, you can add your own components as stories.<br />
          Here`s how to add your <code className="code" >App</code> component as a story.
          <div
            className="codeBlock"
            dangerouslySetInnerHTML={{ __html: `<pre>${codeBlock}</pre>` }}
          />
        </p>
        <p>
          Usually we create stories with smaller UI components in the app.<br />
          Have a look at the <a className="link" href="https://getstorybook.io/docs/basics/writing-stories" > Writing
          Stories
        </a> section in our documentation.
        </p>
      </div>
    );
  }
}
