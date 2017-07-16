import React from 'react';
import PropTypes from 'proptypes';
import graphql from 'graphql';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import typography from '../utils/typography';
import ReadNext from '../components/ReadNext';

const { rhythm, scale } = typography;
const profilePic = require('../images/kyle-round-small-pantheon.jpg');

class BlogPostRoute extends React.Component {
  static propTypes = {
    data: PropTypes.object
  }

  render() {
    const { siteMetadata } = this.props.data.site;
    const post = this.props.data.markdownRemark;

    let tags;
    let tagsSection;
    if (this.props.data.markdownRemark.fields.tagSlugs) {
      const tagsArray = this.props.data.markdownRemark.fields.tagSlugs;
      tags = tagsArray.map((tag, i) => {
        const divider =
          i < tagsArray.length - 1 &&
          <span>
            {' | '}
          </span>;
        return (
          <span key={tag}>
            <Link to={tag}>
              {this.props.data.markdownRemark.frontmatter.tags[i]}
            </Link>
            {divider}
          </span>
        );
      });
      tagsSection = (
        <em
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
          }}
        >
          Tagged with {tags}
        </em>
      );
    }

    return (
      <div>
        <Helmet
          title={`${post.frontmatter.title}`}
          meta={[{ name: 'description', content: post.excerpt }]}
        />
        <h1>
          {post.frontmatter.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        {tagsSection}
        <p
          style={{
            ...scale(-1 / 5),
            display: 'block',
            marginBottom: rhythm(1),
          }}
        >
          Posted {post.frontmatter.date}
        </p>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <ReadNext nextPost={post.frontmatter.readNext} />
        <p
          style={{
            marginBottom: 0,
          }}
        >
          <img
            src={profilePic}
            style={{
              borderRadius: '100%',
              float: 'left',
              marginRight: rhythm(1 / 4),
              marginBottom: 0,
              width: rhythm(2),
              height: rhythm(2),
            }}
          />
          <strong>{siteMetadata.author.name}</strong> lives and
          works in {siteMetadata.author.homeCity} building useful
          things.{' '}
          <a href="https://twitter.com/ocanaangelo">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    );
  }
}

export default BlogPostRoute;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        author{
          name,
          homeCity
        }        
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        tagSlugs
      }
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
