module.exports = {
  siteMetadata: {
    pt: {
      title: 'Ângelo Ocanã Desenvolvimento de Web Apps e Treinamentos',
      author: {
        name: 'Ângelo Ocanã',
        homeCity: 'Ottawa',
        email: 'angeloocana@gmail.com',
        defaultLink: 'https://github.com/angeloocana'
      },
      sourceCodeLink: 'https://github.com/angeloocana/angeloocana',
      header: {
        title: 'Ângelo Ocanã',
        subTitle: 'Desenvolvimento de Web Apps e Treinamentos'
      }
    },
    en: {
      title: 'Ângelo Ocanã Web Apps Development and Training',
      author: {
        name: 'Ângelo Ocanã',
        homeCity: 'Ottawa',
        email: 'angeloocana@gmail.com',
        defaultLink: 'https://github.com/angeloocana'
      },
      sourceCodeLink: 'https://github.com/angeloocana/angeloocana',
      header: {
        title: 'Ângelo Ocanã',
        subTitle: 'Web Apps Development and Training'
      }
    },
    fr: {
      title: `Ângelo Ocanã Développement et formation d'applications Web`,
      author: {
        name: 'Ângelo Ocanã',
        homeCity: 'Ottawa',
        email: 'angeloocana@gmail.com',
        defaultLink: 'https://github.com/angeloocana'
      },
      sourceCodeLink: 'https://github.com/angeloocana/angeloocana',
      header: {
        title: 'Ângelo Ocanã',
        subTitle: `Développement et formation d'applications Web`
      }
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
        name: 'Ângelo Ocanã Software Development and Training',
        short_name: 'Ângelo Ocanã',
        icons: [
          {
            src: '/logo.svg',
            sizes: 'any',
            type: 'image/svg+xml',
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
    'gatsby-plugin-react-helmet'
  ],
};
