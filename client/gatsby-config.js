module.exports = {
  siteMetadata: {
    title: 'Maison Moa | Web Developer',
  },
  plugins: ['gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blog_posts`,
        name: 'blog posts',
      },
    },
  ],
};
