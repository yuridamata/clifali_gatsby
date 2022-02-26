import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import * as styles from "./styles.module.scss"

export function Header() {
	const [match, setMatch] = React.useState(null)
	const [mobileMenu, setMobileMenu] = React.useState(false)

	const mobile = match
	React.useEffect(() => {
		function changeMatch() {
			const { matches } = window.matchMedia("(max-width:768px)")
			setMatch(matches)
		}
		changeMatch()
		window.addEventListener("resize", changeMatch)
		return () => {
			window.removeEventListener("resize", changeMatch)
		}
	}, [match])

	return (
		<header className={styles.headerContainer}>
			<div className="container column">
				{mobile && (
					<button
						aria-label="Menu"
						onClick={() => setMobileMenu(!mobileMenu)}
						className={`${styles.mobileButton} ${
							mobileMenu && styles.mobileButtonActive
						}`}
					></button>
				)}

				<div className={styles.logo}>
					<StaticImage
						src="../../images/logo-clifali.png"
						width={230}
						quality={95}
						formats={["auto", "webp", "avif"]}
						alt="logo_clifali"
						placeholder="tracedSVG"
						layout="constrained"
					/>
				</div>

				<nav
					className={`${mobile ? styles.menuNav : styles.menu} ${
						mobileMenu && styles.menuNavActive
					}`}
				>
					<Link to="/" activeClassName={styles.active}>
						home
					</Link>

					<a href="https://www.clifali.com.br/a-clinica/quem-somos/">
						clínica
					</a>
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
