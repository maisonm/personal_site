import React from 'react'
import Link, { graphql } from 'gatsby-link'
import { Follow, Share } from 'react-twitter-widgets'

// Styles
import './styles/post/code_highlighting.css' // This is custom CSS for PrismJs syntax highlighting

import {
  BlogTitle,
  BlogContentContainer,
  BlogPost,
  BlogDetails,
  BlogInfo,
  Thumbnail,
  BlogContent,
  Content,
  TwitterShare,
  BackLink,
} from './styles/post/styles'

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <BlogContentContainer>
      <BlogPost>
        <BlogInfo>
          <Thumbnail
            src={post.frontmatter.image.childImageSharp.resolutions.src}
            alt={post.frontmatter.title}
          />
          <BlogDetails>
            <p>{post.frontmatter.date}</p>
            <Follow username="maison_moa" />
            <TwitterShare>
              <Share />
            </TwitterShare>
            <BackLink>
              <Link
                to="/blog"
                innerRef={el => {
                  this.myLink = el
                }}
              >
                &#60; back
              </Link>
            </BackLink>
          </BlogDetails>
        </BlogInfo>
        <BlogContent>
          <BlogTitle>{post.frontmatter.title}</BlogTitle>
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
        </BlogContent>
      </BlogPost>
    </BlogContentContainer>
  )
}
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        image {
          childImageSharp {
            resolutions {
              src
            }
          }
        }
        path
        title
        date
      }
    }
  }
`
