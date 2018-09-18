import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

import {
  BlogPostCard,
  BlogTitle, BlogDescription, BlogAuthorDetails, BlogTagIcons, BlogReadLink,
} from './styles';

const BlogCard = ({ post }) => (
  <BlogPostCard>
    <BlogTitle>
      { post.node.frontmatter.title }
    </BlogTitle>
    <BlogDescription>
      { post.node.frontmatter.description }
    </BlogDescription>
    <BlogAuthorDetails>
      { post.node.frontmatter.author }
      <span> | </span>
      { post.node.frontmatter.date }
    </BlogAuthorDetails>
    <BlogTagIcons>
      <p>Tags | </p>
      {
          post.node.frontmatter.tags.map((icon, i) => <p key={i}> { icon } </p>)
        }
    </BlogTagIcons>
    <BlogReadLink>
      <Link to={post.node.frontmatter.path}> Read </Link>
    </BlogReadLink>
  </BlogPostCard>
);

BlogCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default BlogCard;
