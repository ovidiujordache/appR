/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
    siteMetadata: {
        title: `gtsapp1`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [
        "gatsby-plugin-netlify",
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-sitemap", {
            resolve: 'gatsby-plugin-manifest',
            options: {
                "icon": "src/images/icon.png"
            }
        }, "gatsby-plugin-mdx", "gatsby-transformer-remark", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }, {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "pages",
                "path": "./src/pages/"
            },
            __key: "pages"
        }
    ]
};