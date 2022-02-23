import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./styles.module.scss"

const SectionSchedule = () => {
	return (
		<section className={styles.schedule}>
			<div className="container">
				<div className={styles.overlay}></div>

				<div className={styles.call_schedule}>
					<h1>Pré-agendamento Simples e fácil</h1>
					<a href="">Fazer pré-agendamento</a>
				</div>
				<div className={styles.image_schedule}>
					<StaticImage
						src="../../images/Mockup_iphone.png"
						quality={95}
						formats={["auto", "webp", "avif"]}
						alt="image_mockup"
						placeholder="tracedSVG"
						layout="constrained"
						className={styles.image}
					/>
				</div>
			</div>
		</section>
	)
}

export default SectionSchedule
