module.exports = {
  siteMetadata: {
    title: 'Angelo Ocana Software Development and Training',
    author: {
      name: 'Angelo Ocana',
      homeCity: 'Ottawa',
      email: 'angeloocana@gmail.com'
    },    
    header: {
      title: 'Angelo Ocana',
      subTitle: 'Software Development and Training'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-image',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-774017-3',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Angelo Ocana Software Development and Training',
        short_name: 'Angelo Ocana',
        icons: [
          {
            src: '/logo.png',
            sizes: '1024x1024',
            type: 'image/png',
          },
        ],
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'minimal-ui',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
  ],
};
