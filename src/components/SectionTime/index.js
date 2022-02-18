import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./styles.module.scss"

const SectionTime = () => {
  return (
		<section className={styles.time}>
			<div className="container">
				<div className={styles.overlay}></div>

				<div className={styles.time_content}>
					<div className={styles.image_time}>
						<StaticImage
							src="../../images/psicologa.jpg"
							alt="image_principal_time"
							quality={95}
							formats={["auto", "webp", "avif"]}
							placeholder="tracedSVG"
							layout="constrained"
							cropFocus="bottom"
							className={styles.image}
						/>
					</div>

					<div className={styles.call_time}>
						<h2>Conheça nosso time</h2>
						<p>
							São mais de 20 profissionais capacitados e prontos para te
							atender
						</p>
						<a href="https://www.clifali.com.br/a-clinica/equipe/">
							Conhecer Profissionais
						</a>
					</div>
				</div>
			</div>
		</section>
  )
}

export default SectionTime
