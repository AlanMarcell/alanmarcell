import React from 'react';
import graphql from 'graphql';
import Link from 'gatsby-link';

const Component = React.createClass({
  render() {
    //console.log(this.props)
    let { nextPost } = this.props;
    if (nextPost && nextPost.children && nextPost.children[0]) {
      nextPost = nextPost.children[0];
    }

    if (!nextPost) {
      return null;
    } else {
      return (
        <div>
          <h6>
            READ THIS NEXT:
          </h6>
          <h3>
            <Link to={nextPost.fields.slug}>
              {nextPost.frontmatter.title}
            </Link>
          </h3>
          <p>
            {nextPost.excerpt}
          </p>
          <hr />
        </div>
      );
    }
  },
});

export default Component;

export const query = graphql`
  fragment ReadNext on MarkdownRemark {
    fields {
      slug
    }
    excerpt(pruneLength: 200)
    frontmatter {
      title
    }
  }
`;
