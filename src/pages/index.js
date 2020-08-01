import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import HeroSlider from '../components/index/hero-slider'
import CTAImages from '../components/index/cta-images'
import LatestTrend from '../components/index/latest-trend'
import Quotation from '../components/index/quotation'
import About from '../components/index/about'

export default () => (
  <Layout>
    <SEO title="Home" />
    <HeroSlider />
    <CTAImages />
    <LatestTrend />
    <Quotation />
    <About />
  </Layout>
)
