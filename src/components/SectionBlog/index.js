import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "./styles.module.scss"

const SectionBlog = () => {
	return (
		<section className={styles.blog}>
			<div className="container column">
				<div className={styles.title_blog}>
					<h1>Blog</h1>
				</div>

				<div className={styles.links_container_blog}>
					<div className={styles.blog_princ}>
						<a href="https://www.clifali.com.br/2017/12/22/a-fonoaudiologia-ajuda-a-tratar-disturbios-de-aprendizagem-educacionais/">
							<div className={styles.image_blog_princ}>
								<StaticImage
									src="../../images/aprendizado.jpg"
									width={490}
									quality={95}
									formats={["auto", "webp", "avif"]}
									alt="image_post_principal"
									placeholder="tracedSVG"
									layout="constrained"
									imgClassName={styles.image}
								/>
							</div>

							<div className={styles.description_blog_princ}>
								<h2>
									A FONOAUDIOLOGIA AJUDA A TRATAR DISTÚRBIOS DE
									APRENDIZAGEM EDUCACIONAIS
								</h2>
								<p>
									A fonoaudiologia também trata pacientes que
									apresentam problemas de aprendizagem e dificuldades
									escolares. Esses distúrbios educacionais afetam a
									compreensão e decodificação dos sons, afetando a
									compreensão da linguagem escrita e oral. Distúrbios
									no desenvolvimento da fala como troca de sons,
									dificuldade na formação de frases, e...
								</p>
							</div>
						</a>
					</div>

					<div className={styles.other_posts_blog}>
						<a href="https://www.clifali.com.br/2017/12/10/a-fonoaudiologia-ajuda-a-cuidar-de-disturbios-relacionados-a-disfagia/">
							<div className={styles.image_other_post_blog}>
								<StaticImage
									src="../../images/disfagia.jpg"
									alt="image_post_disfalgia"
									quality={95}
									formats={["auto", "webp", "avif"]}
									placeholder="tracedSVG"
									width={190}
									height={100}
									layout="fixed"
								/>
							</div>
							<div className={styles.title_other_post_blog}>
								<p>10 de dezembro de 2017</p>
								<h2>
									A FONOAUDIOLOGIA AJUDA A CUIDAR DE DISTÚRBIOS
									RELACIONADOS À DISFAGIA
								</h2>
							</div>
						</a>

						<a href="https://www.clifali.com.br/2017/12/08/a-fonoaudiologia-ajuda-a-tratar-problemas-do-sistema-auditivo/">
							<div className={styles.image_other_post_blog}>
								<StaticImage
									src="../../images/problemas-auditivos.jpg"
									alt="image_post_prob-auditivos"
									quality={95}
									width={190}
									height={100}
									formats={["auto", "webp", "avif"]}
									placeholder="tracedSVG"
									layout="fixed"
								/>
							</div>
							<div className={styles.title_other_post_blog}>
								<p>08 de dezembro de 2017</p>
								<h2>
									A FONOAUDIOLOGIA AJUDA A TRATAR PROBLEMAS DO SISTEMA
									AUDITIVO
								</h2>
							</div>
						</a>

						<a href="https://www.clifali.com.br/2017/12/05/a-fonoaudiologia-ajuda-a-falar-em-publico/">
							<div className={styles.image_other_post_blog}>
								<StaticImage
									src="../../images/falar-em-publico.jpg"
									alt="image_post_fala-pub"
									quality={95}
									formats={["auto", "webp", "avif"]}
									placeholder="tracedSVG"
									width={190}
									height={100}
									layout="fixed"
								/>
							</div>
							<div className={styles.title_other_post_blog}>
								<p>05 de dezembro de 2017</p>
								<h2>A FONOAUDIOLOGIA AJUDA A FALAR EM PÚBLICO</h2>
							</div>
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SectionBlog
