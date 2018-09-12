import React from 'react';
import Helmet from 'react-helmet';
import { Follow } from 'react-twitter-widgets';

import Link from 'gatsby-link';

import styled from 'styled-components';
import test from './test.png';

import 'prismjs/themes/prism-solarizedlight.css';

// Styles
import './styles/blog_posts/code_highlighting.css';

import {
  BlogTitle, BlogContentContainer, BlogPost,
  BlogDetails, BlogInfo, Thumbnail, BlogContent,
  Content,
} from './styles/blog_posts/styles';

const BackLink = styled.div`
    margin-top: 14px;
    & > a {
        text-decoration: none;
        font-size: .7em;
        color: #595959;
        transition: .3s;

        &:hover {
            transition: .3s;
            font-size: .72em;
            color: #3A6EA5;
        }
    }
`;

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  console.log(post.frontmatter.image.childImageSharp.resolutions.src);
  return (
    <BlogContentContainer>
      <BlogPost>
        <BlogInfo>
          <Thumbnail src={post.frontmatter.image.childImageSharp.resolutions.src} alt={post.frontmatter.title} />
          <BlogDetails>
            <p>August 31st, 2018</p>
            <p>
              { post.frontmatter.date }
            </p>
            <Follow username="maison_moa" />
            <BackLink>
              <Link
                to="/"
                innerRef={(el) => { this.myLink = el; }}
              >
               &#60; back
              </Link>
            </BackLink>
          </BlogDetails>
        </BlogInfo>
        <BlogContent>
          <BlogTitle>
            { post.frontmatter.title }
          </BlogTitle>
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        </BlogContent>
      </BlogPost>
    </BlogContentContainer>
  );
}
export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
      markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
          path
          title
          date
          image {
            childImageSharp {
              resolutions {
                src
              }
            }
          }
        }
      }
    }
`;
