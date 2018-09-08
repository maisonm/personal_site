import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import test from './test.png';

const BlogTitle = styled.h3`
`;

const BlogContentContainer = styled.div`
    border: solid red;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: -99;
`;

const BlogPost = styled.div`
    /* border: solid black; */
    display: flex;
    justify-content: center;
    height: 500px;
    
`;

const BlogInfo = styled.div`
    /* border: solid orange; */
    min-width: 250px;
    max-width: 300px;
    margin-left: 4px;
    margin-right: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    & > img {
        width: 156px;
        margin-top: 16px;
        
    };

    & > div {
        border-top: 1.5px solid #c0c0c0;
        margin-top: 20px;
        line-height: 10px;
        width: 80%;

        & > p {
            text-align: right;
            font-size: .85em;
            font-weight: 500;
        };
    }
`;

const BlogContent = styled.div`
    /* border: solid purple; */
    overflow: auto;
    flex-basis: 60%;
    margin-right: 4px;
`;

const Content = styled.div`
    & > p {
        
        font-size: .8em;
    }
`;

export default function Template({ data }) {
  const { markdownRemark: post } = data;
  return (
    <BlogContentContainer>
      <BlogPost>
        <BlogInfo>
            <img src={test} />

            <div>
                <p>August 31st, 2018</p>
            </div>
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
        }
      }
    }
`;
