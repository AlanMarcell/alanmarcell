import React from 'react';
import PropTypes from 'proptypes';
import Link from './Link';
import graphql from 'graphql';

const getToLink = (post) =>
  post.node.frontmatter.path || post.node.fields.slug;

const PostListItem = ({ post }) => {
  return (
    <li key={post.node.fields.slug}>
      <Link to={getToLink(post)}>
        <header>
          <time pubdate>{post.node.frontmatter.date}</time>
          {post.node.frontmatter.title}
        </header>
        <p>{post.node.excerpt}</p>
      </Link>
    </li>
  );
};

PostListItem.propTypes = {
  post: PropTypes.object
};

export default PostListItem;

export const pageQueryTest = graphql`
  fragment postListItem on MarkdownRemark {
    frontmatter{
      title,
      tags,
      date,
      path
    },
    fields{
      slug,
      tagSlugs
    },
    excerpt 
  }
`;
