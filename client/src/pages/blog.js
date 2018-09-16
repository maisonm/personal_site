import React from 'react';
import Link from 'gatsby-link';
import { bounceInUp } from 'react-animations';

import styled from 'styled-components';
import test1 from './blog_posts/assets/tech_tag_icons/redux.svg';
import test2 from './blog_posts/assets/tech_tag_icons/react.svg';
import test3 from './blog_posts/assets/tech_tag_icons/js.svg';


const BlogPostsPageContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -99;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FBFAFC;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233a6ea5' fill-opacity='0.08'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const BlogCardContainer = styled.div`
  height: 75%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
`;

const BlogPostCard = styled.div`
  min-height: 220px;
  min-width: 50%;
  box-shadow: 0px 0px 8px #b3b3b3;
  margin-bottom: 10px;
  border-radius: 2px;
  transition: .1s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding-top: 4px;
  padding-bottom: 4px;
  cursor: pointer;
  transition: all cubic-bezier(.42,.16,.26,1.4) 400ms;

    & > p {
    width: 80%;
  }

  &:hover {
    transition: all cubic-bezier(.42,.16,.26,1.4) 200ms;
    box-shadow: 0px 0px 14px #999999;
    transform: translateX(8px);
  }
`;

const BlogTitle = styled.p`
  font-size: 1.4em;
  color: #020202;
  font-weight: 700;
  margin-top: -5px;

`;

const BlogDescription = styled.p`
  font-size: .75em;
  margin-top: -5px;
  letter-spacing: .2px;
`;

const BlogAuthorDetails = styled.p`
  font-size: .6em;
  color: #999999;
  text-align: right;
  letter-spacing: .1px;
`;

const BlogTagIcons = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;

  & > p {
    margin-right: 6px;
    color: #999999;
    font-weight: 400;
    letter-spacing: .1px;
    font-size: .5em;
  }

  & img {
    margin-left: 10px;
    width: 16px;
  }
`;

const Blog = () => (
  <BlogPostsPageContainer>
    <BlogCardContainer>
      <BlogPostCard>
        <BlogTitle> Building a weather app with React &amp; Node </BlogTitle>
        <BlogDescription> This blog is about how coding is hard, but fun and also it's hard. Javascript this, Javascript that.</BlogDescription>
        <BlogAuthorDetails>- Maison Moa | Septemeber 18th, 2018 </BlogAuthorDetails>
        <BlogTagIcons>
          <p>Tags | </p>
          <img src={test1} />
          <img src={test2} />
          <img src={test3} />
        </BlogTagIcons>
      </BlogPostCard>
      <BlogPostCard>
        <BlogTitle> Building a weather app with React &amp; Node </BlogTitle>
        <BlogDescription> This blog is about how coding is hard, but fun and also it's hard. Javascript this, Javascript that.</BlogDescription>
        <BlogAuthorDetails>- Maison Moa | Septemeber 18th, 2018 </BlogAuthorDetails>
        <BlogTagIcons>
          <p>Tags | </p>
          <img src={test1} />
          <img src={test2} />
          <img src={test3} />
        </BlogTagIcons>
      </BlogPostCard>
      <BlogPostCard>
        <BlogTitle> Building a weather app with React &amp; Node </BlogTitle>
        <BlogDescription> This blog is about how coding is hard, but fun and also it's hard. Javascript this, Javascript that.</BlogDescription>
        <BlogAuthorDetails>- Maison Moa | Septemeber 18th, 2018 </BlogAuthorDetails>
        <BlogTagIcons>
          <p>Tags | </p>
          <img src={test1} />
          <img src={test2} />
          <img src={test3} />
        </BlogTagIcons>
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
