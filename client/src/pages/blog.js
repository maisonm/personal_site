import React from 'react';
import Link from 'gatsby-link';

import styled from 'styled-components';
import test from './blog_posts/js_192.png';


const BlogPostsPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -99;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlogCardContainer = styled.div`
  height: 70%;
  flex-basis: 100%;
  display: flex;
  flex-flow: row wrap;
  overflow: auto;
  justify-content: center;
  padding: 10px;
`;

const BlogPostCard = styled.div`
  height: 270px;
  flex-basis: 25%;
  box-shadow: 2px 2px 3px #797979;
  margin: 6px;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
`;

const BlogThumbnail = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 2px;
  position: absolute;
  z-index: -99;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 192px;
  }
`;

const BlogPostDetails = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, .7);
  padding: 4px;

  & > p {
    font-size: .8em;
    color: #595959;
    font-weight: 500;
  }
`;

const Blog = () => (
  <BlogPostsPageContainer>
    <BlogCardContainer>
      <BlogPostCard>
        <BlogThumbnail>
          <img src={test} />
        </BlogThumbnail>
        <BlogPostDetails>
          <p>September 9th, 2018</p>
          <h1> Building a weather app with React &amp; Node </h1>
        </BlogPostDetails>
      </BlogPostCard>
    </BlogCardContainer>
  </BlogPostsPageContainer>
);

export const BlogListQuery = graphql`
  query BlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            path
            image {
              childImageSharp {
                resolutions {
                  src
                  srcSet
                }
              }
            }
          }
        }
      }
    }
}
`;

export default Blog;
