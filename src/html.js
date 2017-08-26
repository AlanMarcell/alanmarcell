import React from 'react';
import PropTypes from 'proptypes';
import theme from './themes/theme.js';

class Html extends React.Component {
  static propTypes = {
    headComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array
  }

  render() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {this.props.headComponents}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
          <link href="/css/reset.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Cambo" rel="stylesheet" />
          <link href="/css/prism-coy.css" rel="stylesheet" />
        </head>
        <body style={{ margin: 0, padding: 0, backgroundColor: theme.bg, color: theme.color }}>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

module.exports = Html;
