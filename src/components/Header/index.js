import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import * as styles from "./styles.module.scss"

export function Header() {

  return (
    <header className={styles.headerContainer}>
      <div className="container column">
        <div className={styles.logo}>

          <StaticImage
            src="../../images/logo-clifali.png"
            width={230}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="logo_clifali"
            placeholder="tracedSVG"
          />
        </div>

        <nav className={styles.menu}>
          <Link to="/" activeClassName={styles.active}>
            home
          </Link>

          <a href="https://www.clifali.com.br/a-clinica/quem-somos/">clínica</a>
          <a href="https://www.clifali.com.br/especialidades/psicologia/">
            especialidades
          </a>
          <a href="https://www.clifali.com.br/blog/">blog</a>
          <a href="https://www.clifali.com.br/convenios/">convênios</a>
          <a href="https://www.clifali.com.br/contato/">contato</a>
        </nav>
      </div>
    </header>
  )
}
