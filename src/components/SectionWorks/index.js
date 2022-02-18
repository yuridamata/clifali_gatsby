import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./styles.module.scss"

const SectionWorks = () => {
  return (
    <section className={styles.works}>
      <div className="container column">
        <div className={styles.psic_container_work}>
          <div className={styles.description}>
            <h2 className={styles.psic_title}>Psicologia</h2>
            <p className={styles.psic_description}>
              Ciência que estuda o comportamento e a mente humana. Nosso
              objetivo é ajudar as pessoas a compreenderem, de forma adequada,
              seus pensamentos e atitudes, para possibilitar uma convivência
              melhor consigo mesmo e em sociedade, trazendo maior qualidade de
              vida e adequada saúde mental.
            </p>
            <a href="https://www.clifali.com.br/especialidades/psicologia/">
              + Saiba mais
            </a>
            <div className={styles.bottons}>
              <a href="#">Fazer pré-agendamento</a>
              <a href="https://www.clifali.com.br/a-clinica/equipe/">
                Conhecer profissionais
              </a>
            </div>
          </div>

          <div className={styles.image}>
            <div className={styles.bgone}></div>
            <div className={styles.bgtwo}></div>

            <StaticImage
              src="../../images/psicologia_clifali.jpg"
              alt="image_psic"
              width={560}
              quality={95}
              formats={["auto", "webp", "avif"]}
              layout="constrained"
            />
          </div>
        </div>

        <div className={styles.fono_container_work}>
          <div className={styles.description}>
            <h2 className={styles.fono_title}>Fonoaudiologia</h2>
            <p className={styles.fono_description}>
              Ciência que ajuda no desenvolvimento da comunicação oral e
              escrita, aprimorando a audição, fala, a compreensão e a expressão.
              Em alguns casos, também auxilia a odontologia, atuando em
              tratamentos ortodônticos, protéticos e buco-maxilar.
            </p>
            <a href="https://www.clifali.com.br/especialidades/fonoaudiologia/">
              + Saiba mais
            </a>
            <div className={styles.bottons}>
              <a href="#">Fazer pré-agendamento</a>
              <a href="https://www.clifali.com.br/a-clinica/equipe/">
                Conhecer profissionais
              </a>
            </div>
          </div>
          <div className={styles.image}>
            <StaticImage
              src="../../images/psicologia_clifali.jpg"
              alt="image_psic"
              width={560}
              quality={95}
              formats={["auto", "webp", "avif"]}
              layout="constrained"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionWorks
