/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  pathPrefix: '/applyingml',
  siteMetadata: {
    title: 'ApplyingML',
    titleTemplate: '%s',
    description: 'Sharing resources on applying ML and interviews with practioners',
    author: 'Eugene Yan',
    siteUrl: 'https://applyingml.com',
    twitterUsername: '@eugeneyan',
    image: 'default-og-image.png',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'applyingml.com',
        short_name: 'applyingml.com',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'static/favicon-32x32.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: false,
            },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-social-cards',
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              isIconAfterHeader: true,
              icon:
                '<svg aria-hidden="true" height=\'20px\' width=\'20px\' style="vertical-align: -10%; margin-left: 0.25rem" fill="#007bff" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 52" xml:space="preserve"><g transform="matrix(0.6136733,-0.6136733,0.6136733,0.6136733,4.0598725,65.6509)"><path d="m 47.807,33.138 c 0.008,-0.009 0.016,-0.019 0.024,-0.026 -0.009,0.007 -0.018,0.015 -0.026,0.023 0,0.001 10e-4,0.002 0.002,0.003 z" style="" fill="none"></path><path d="m 53.048,49.8 c -0.274,-0.071 -0.545,-0.152 -0.815,-0.232 -0.002,0.001 -0.005,0.003 -0.007,0.003 0.259,0.077 0.534,0.155 0.822,0.229 z" style="" fill="none"></path><path d="m 36.33,35.501 h -0.004 c 0.204,0.522 0.496,1.114 0.783,1.651 h 0.013 c -0.284,-0.54 -0.548,-1.09 -0.792,-1.651 z" style="" fill="none"></path><path d="m 37.108,37.152 c 0.291,0.544 0.577,1.029 0.758,1.332 -0.263,-0.436 -0.508,-0.882 -0.746,-1.332 h -0.012 z" style="" fill="#007bff"></path><path d="m 38.062,38.804 h 0.006 c -0.048,-0.079 -0.1,-0.152 -0.147,-0.231 0.087,0.144 0.141,0.231 0.141,0.231 z" style="" fill="#007bff"></path><path d="m 51.812,49.445 c -0.631,-0.197 -1.249,-0.424 -1.856,-0.669 -0.003,0.002 -0.007,0.003 -0.009,0.004 0.06,0.025 0.781,0.324 1.865,0.665 z" style="" fill="#007bff"></path><path d="m 52.226,49.57 c 0.002,0 0.005,-0.002 0.007,-0.003 -0.106,-0.03 -0.213,-0.057 -0.318,-0.091 0.101,0.033 0.205,0.065 0.311,0.094 z" style="" fill="#007bff"></path><path d="M 74.458,0.955 H 59.321 c -1.307,0 -2.591,0.1 -3.845,0.293 -0.273,0.042 -0.541,0.101 -0.811,0.151 4.646,2.666 8.469,6.605 10.987,11.343 h 1.238 8.346 c 7.322,0 13.257,5.937 13.257,13.259 0,7.321 -5.936,13.258 -13.257,13.258 H 65.72 63.762 61.857 61.851 58.68 c -3.305,0 -6.324,-1.212 -8.646,-3.212 0,0 -0.003,0.003 -0.003,0.003 0,-0.002 -10e-4,-0.002 -0.002,-0.003 -0.494,-0.414 -0.886,-0.802 -1.206,-1.148 -0.7,-0.764 -1.011,-1.303 -1.011,-1.303 0.001,-0.002 0.002,-0.002 0.002,-0.003 -10e-4,-0.001 -0.002,-0.002 -0.002,-0.003 -1.505,-2.15 -2.389,-4.766 -2.389,-7.589 0,-2.746 0.834,-5.296 2.263,-7.413 0.041,-0.06 0.086,-0.117 0.127,-0.176 -1.736,-1.473 -3.978,-2.367 -6.429,-2.367 h -5.041 c -1.325,3.052 -2.067,6.416 -2.067,9.956 0,3.538 0.737,6.903 2.061,9.955 0.244,0.561 0.509,1.111 0.792,1.651 0.237,0.45 0.482,0.896 0.746,1.332 0.02,0.033 0.036,0.059 0.054,0.088 0.047,0.079 0.099,0.152 0.147,0.231 2.792,4.463 6.948,7.98 11.888,9.973 0.608,0.245 1.226,0.472 1.856,0.669 0.034,0.011 0.068,0.022 0.103,0.031 0.105,0.034 0.212,0.061 0.318,0.091 0.27,0.08 0.541,0.161 0.815,0.232 0.004,0 0.006,0.002 0.01,0.003 2,0.513 4.096,0.787 6.254,0.787 H 74.457 C 88.289,51.044 99.501,39.831 99.501,26 99.502,12.169 88.29,0.955 74.458,0.955 z" style="" fill="#007bff"></path><path d="m 25.542,51.045 h 15.137 c 1.308,0 2.592,-0.101 3.846,-0.294 0.273,-0.042 0.542,-0.1 0.811,-0.151 C 40.69,47.935 36.866,43.996 34.349,39.258 H 33.11 24.764 c -7.322,0 -13.257,-5.936 -13.257,-13.259 0,-7.322 5.935,-13.257 13.257,-13.257 h 9.516 1.957 1.905 0.007 3.17 c 3.304,0 6.323,1.212 8.645,3.212 l 0.002,-0.003 c 10e-4,10e-4 10e-4,0.002 0.002,0.003 0.495,0.413 0.887,0.801 1.206,1.148 0.701,0.762 1.011,1.302 1.011,1.302 0,0.001 -0.001,0.002 -0.002,0.003 10e-4,0 0.002,0.001 0.003,0.003 1.505,2.15 2.39,4.766 2.39,7.588 0,2.746 -0.835,5.297 -2.264,7.412 -0.041,0.062 -0.085,0.118 -0.127,0.176 1.736,1.474 3.979,2.369 6.429,2.369 h 5.042 c 1.324,-3.053 2.065,-6.417 2.065,-9.957 0,-3.539 -0.737,-6.903 -2.061,-9.955 C 63.416,15.482 63.151,14.932 62.868,14.392 62.631,13.941 62.386,13.494 62.122,13.06 62.102,13.027 62.086,13 62.069,12.971 62.021,12.893 61.97,12.818 61.922,12.741 59.13,8.278 54.973,4.76 50.034,2.768 49.426,2.523 48.808,2.297 48.178,2.098 48.144,2.087 48.11,2.077 48.075,2.066 47.97,2.034 47.863,2.007 47.757,1.977 47.487,1.896 47.216,1.815 46.941,1.745 46.937,1.744 46.935,1.744 46.932,1.743 44.932,1.228 42.837,0.955 40.677,0.955 H 25.542 c -13.832,0 -25.044,11.212 -25.044,25.044 0,13.833 11.212,25.046 25.044,25.046 z" style="" fill="#007bff"></path><path d="M 53.058,49.803 C 53.055,49.802 53.052,49.8 53.048,49.8 c 0.004,0 0.007,0.002 0.01,0.003 z" style="" fill="#007bff"></path><path d="m 51.812,49.445 c 0.034,0.011 0.068,0.022 0.103,0.031 -0.034,-0.008 -0.068,-0.02 -0.103,-0.031 z" style="" fill="#007bff"></path><path d="m 47.805,33.141 c 0,0 0.311,0.539 1.011,1.303 0.005,-0.006 0.01,-0.012 0.016,-0.015 -0.369,-0.407 -0.709,-0.84 -1.025,-1.291 0,0.001 -0.001,0.001 -0.002,0.003 z" style="" fill="#007bff"></path><path d="m 37.92,38.572 c -0.018,-0.029 -0.034,-0.055 -0.054,-0.088 0.019,0.03 0.036,0.058 0.054,0.088 z" style="" fill="#007bff"></path><path d="m 48.832,34.429 c -0.006,0.003 -0.011,0.009 -0.016,0.015 0.319,0.347 0.711,0.734 1.206,1.148 0.001,-0.002 0.002,-0.003 0.002,-0.003 -0.42,-0.362 -0.82,-0.749 -1.192,-1.16 z" style="" fill="#007bff"></path><path d="m 50.027,35.592 c 10e-4,-0.003 0.004,-0.006 0.012,-0.015 -0.004,0.004 -0.01,0.008 -0.015,0.012 10e-4,0 0.002,0.001 0.003,0.003 z" style="" fill="#007bff"></path><rect height="0.004007bff2" width="0.004007bff2" y="35.59" x="50.021999" style="" fill="#007bff"></rect></g></svg>',
            },
          },
          {
            resolve: 'gatsby-remark-reference-footnotes',
            options: {
              groupInclude: 'default',

              inlineLinkPrefix: '',
              inlineLinkSuffix: '',
              inlineTextPrefix: '',
              inlineTextSuffix: '',

              referenceLinkPosition: 'start',

              referenceLinkPrefix: '↑ ',
              referenceLinkSuffix: '.',
              referenceTextPrefix: '',
              referenceTextSuffix: ' ',
            },
          },
        ],
        // eslint-disable-next-line global-require
        remarkPlugins: [require('remark-math'), require('remark-html-katex')],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/data/',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-TJSE5MQCC6', // Google Analytics / GA
        ],
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-yaml',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/resources/slug', '/mentors/first-last'],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: 'https://applyingml.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
