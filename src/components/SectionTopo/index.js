import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./styles.module.scss"

const SectionTopo = () => {
	return (
		<section className={styles.top_banner}>
			<div className={styles.overlay}></div>
			<div className="content">
				<StaticImage
					src="../../images/bg-topo.jpg"
					alt="image_bg"
					quality={90}
					formats={["auto", "webp", "avif"]}
					layout="constrained"
					placeholder="tracedSVG"
					className={styles.background_image}
				/>
			</div>
			<div className="container">
				<h2 className={styles.call_banner}>
					&ldquo; Um dia, quando olhares para trás, verás que os dias mais
					belos foram aqueles em que lutaste &rdquo;
				</h2>
			</div>
		</section>
	)
}

export default SectionTopo
