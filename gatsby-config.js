require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true, PRESERVE_FILE_DOWNLOAD_CACHE: true },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Jost",
              variants: ["300, 400", "500"],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets\/svgs/,
        },
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_KEY,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `pages`,
            mapping: {
              image: `fileNode`,
            },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `web-design`,
            mapping: {
              image: `fileNode`,
            },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `graphic-design`,
            mapping: {
              image: `fileNode`,
            },
          },

          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `app-design`,
            mapping: {
              image: `fileNode`,
            },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `homeData`,
            mapping: {
              image: `fileNode`,
            },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE_ID,
            tableName: `aboutData`,
            mapping: {
              image: `fileNode`,
            },
          },
        ],
      },
    },
  ],
}
