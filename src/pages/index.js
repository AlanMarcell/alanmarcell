import React from "react";
import Link from "gatsby-link";

export default class Index extends React.Component {
  render() {
    console.log('index props', this.props);
    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    );
  }
}

export const pageQuery = `
  query SiteMetadataLookup($slug: String!) {
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title,
            date,
            layout,
            path
          },
          excerpt
        }
      }
    }
  }
`;
