import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const MdxToJsx = ({ children }) => {
  console.log("children :", children)

  return <MDXRenderer>{children}</MDXRenderer>
}

export default MdxToJsx
