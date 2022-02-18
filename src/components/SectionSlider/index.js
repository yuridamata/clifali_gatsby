import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Carousel from "react-multi-carousel"
import * as styles from "./styles.module.scss"

const SectionSlider = () => {
  const { slideShow } = useStaticQuery(graphql`
    query {
      slideShow: allFile(
        filter: { relativeDirectory: { eq: "convenios" } }
        sort: { fields: base, order: ASC }
      ) {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(
                width: 120
                placeholder: TRACED_SVG
                quality: 90
                blurredOptions: { width: 100 }
              )
            }
          }
        }
      }
    }
  `)

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 580 },
      items: 3,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 580, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  }

  const settings = {
    responsive: responsive,
    infinite: true,
    containerClass: "react-multi-carousel-list",
    itemClass: `${styles.image_item}`,
    autoPlay: true,
    autoPlaySpeed: 2500,
  }

  return (
    <section className={styles.slider}>
      <div className="container column">
        <div className={styles.title_slider}>
          <h2>Convênios</h2>
          <p>veja a lista de todos os convênios que trabalhamos</p>
        </div>

        <div className={styles.slider_container}>
          <Carousel {...settings}>
            {slideShow.edges.map(({ node }) => (
              <div key={node.id}>
                <GatsbyImage
                  image={node.childImageSharp.gatsbyImageData}
                  alt={node.base}
                />
              </div>
            ))}
          </Carousel>
        </div>

        <div className={styles.slider_button}>
          <a href="https://www.clifali.com.br/convenios/">Ver lista completa</a>
        </div>
      </div>
    </section>
  )
}

export default SectionSlider
