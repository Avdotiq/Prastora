import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const singlePost = () => (
  <Layout>
    <h1>
      BLOG
    </h1>
    <p>This page is not created until requested by a user.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="Using DSG" />

export default singlePost
