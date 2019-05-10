import React from 'react'
import PropTypes from 'prop-types'
import graphql from 'gatsby-link'

// Styled Components
import {
  BlogPostsPageContainer,
  BlogCardContainer,
} from '../styles/blog/styles'

// Components
import BlogCard from '../components/blog/BlogCard'
import Footer from '../components/navigation/FooterSocial'

export default function Blog({ data }) {
  const { allMarkdownRemark: post } = data
  const BlogPost = post.edges.map((blog, i) => <BlogCard key={i} post={blog} />)

  return (
    <BlogPostsPageContainer>
      <BlogCardContainer>{BlogPost}</BlogCardContainer>
      <Footer />
    </BlogPostsPageContainer>
  )
}

Blog.propTypes = {
  data: PropTypes.object.isRequired,
}

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
`
