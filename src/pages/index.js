import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"
import Banner from "../components/banner"
import CommunityPosts from "../components/communityPosts"

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>Portify</title>
        <meta name="description" content="Credit score building and interest-free loans" />
      </Helmet>
      
      <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column", justifyContent: "center", textAlign: "center", width: "100%"}}>
        
        <div style={{width: "100%"}}><iframe width="560" height="315" src="https://www.youtube.com/embed/uJiGGd5XkX4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

        <HeroHeader />
      </div>

      <h2>Recent stories from our members</h2>
      <div className="grids">
        {Posts}
      </div>
      <Banner />
      <CommunityPosts />
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
