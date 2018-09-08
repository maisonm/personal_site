import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

const BlogTitle = styled.h3`
`;

const BlogContentContainer = styled.div`
    border: solid red;
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

const BlogInfo = styled.div`
    border: solid orange;
`;

const BlogContent = styled.div`
    border: solid purple;
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
      <BlogInfo>
            Blah
      </BlogInfo>
      <BlogContent>
        <BlogTitle>
          { post.frontmatter.title }
        </BlogTitle>
        <Content dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogContent>
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
