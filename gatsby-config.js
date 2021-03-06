require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: require('./src/config/index').title,
    author: 'n1ghtdev',
    description: require('./src/config/index').meta.description,
    siteUrl: require('./src/config/index').siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: require('./src/config/index').siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-175550178-1',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets\/.*\.svg/,
          exclude: /sprite/,
          omitKeys: [
            'xmlnsDc',
            'xmlnsCc',
            'xmlnsRdf',
            'xmlnsSvg',
            'xmlnsSodipodi',
            'xmlnsInkscape',
          ],
        },
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1035,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
        ],
      },
    },
  ],
};
