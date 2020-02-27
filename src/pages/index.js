import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MdxToJsx from "../components/MdxToJsx"

const IndexPage = ({ data }) => {
  console.log("data :", data)

  return (
    <Layout>
      <SEO title="Home" />
      {/* <MdxToJsx>{data.mdx.body}</MdxToJsx> */}
      <MdxToJsx>{data.testYaml.chi}</MdxToJsx>
    </Layout>
  )
}

export const query = graphql`
  query {
    testYaml {
      foo
      bar
      chi
    }
    mdx {
      body
    }
  }
`

export default IndexPage
