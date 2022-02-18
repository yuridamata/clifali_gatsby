import React from "react"

import Layout from "../components/Layout"
import SectionTopo from "../components/SectionTopo"
import SectionWorks from "../components/SectionWorks"
import SectionSchedule from "../components/SectionSchedule"
import SectionBlog from "../components/SectionBlog"
import SectionSlider from "../components/SectionSlider"
import SectionTime from "../components/SectionTime"

import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    
    <SectionTopo />
    <SectionWorks />
    <SectionSchedule />
    <SectionBlog />
    <SectionTime />
    <SectionSlider />
  </Layout>
)

export default IndexPage
