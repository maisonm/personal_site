import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import {
  BlogPostsPageContainer,
  BlogCardContainer,
} from './styles/blog/styles';

// Components
import BlogCard from '../components/blog/BlogCard';


export default function Blog({ data }) {
  const { allMarkdownRemark: post } = data;
  const BlogPost = post.edges.map((blog, i) => <BlogCard key={i} post={blog} />);

  return (
    <BlogPostsPageContainer>
      <BlogCardContainer>
        { BlogPost }
      </BlogCardContainer>
    </BlogPostsPageContainer>
  );
}

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export const BlogListQuery = graphql`
  query BlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            author
            date
            title
            tags
            description
          }
        }
      }
    }
}
`;
