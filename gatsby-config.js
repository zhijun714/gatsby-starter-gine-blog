module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/zhijun/a1592bbac81b4a978a5561e0e2839e92?v=e21ec54f84ef43568d6908f6e1184d54"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/zhijun/cd4bd8084ea548b890d16812b286a2b6?v=620e4ddb50cb4f67844b87a154b52e27"
            }
        }
    ],
}
