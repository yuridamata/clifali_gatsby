import * as React from "react"
import * as styles from "./styles.module.scss"
import { StaticImage } from "gatsby-plugin-image"

function Footer(props, ref) {
	return (
		<footer ref={ref} className={styles.footer}>
			<div className="container column">
				<div className={styles.logo}>
					<StaticImage
						src="../../images/logo-clifali.png"
						width={250}
						quality={95}
						formats={["auto", "webp", "avif"]}
						alt="logo_clifali"
						placeholder="tracedSVG"
						layout="constrained"
					/>
				</div>

				<div className={styles.footer_container}>
					<div className={styles.contact_footer}>
						<h2>Contato:</h2>
						<p>
							<a href="tel:06133524189">61 3352-4189</a> /{" "}
							<a href="tel:06133524313">61 3352-4313</a>
						</p>

						<p>
							<a href="mailto:atendimento@clifali.com.br">
								atendimento@clifali.com.br
							</a>
						</p>
					</div>

					<div className={styles.contact_footer}>
						<h2>Endereço:</h2>
						<p>
							CSB 02, Lote 1/4, ED. Alameda Tower – Taguatinga Sul – DF
							Torre A – Salas 704, 706 e 708 – Matriz
						</p>
						<p>Torre B – Salas 617 e 619 – Filial</p>
					</div>

					<div className={styles.contact_footer}>
						<h2>Horário de atendimento:</h2>
						<p>Segunda à Sexta, das 08h às 20h30</p>
						<p>Sábado, das 08h às 18h</p>
					</div>
				</div>

				<a
					href="https://linkwhats.app/3dfa70"
					target="_blank"
					rel="noreferrer"
					className={styles.whatsapp}
				>
					<StaticImage
						src="../../images/whatsapp.png"
						width={50}
						quality={95}
						formats={["auto", "webp", "avif"]}
						alt="logo_clifali"
						placeholder="tracedSVG"
						className={styles.icon_whatsapp}
					/>
					<span>Entre em contato</span>
				</a>
			</div>
		</footer>
	)
}

export default React.forwardRef(Footer)
