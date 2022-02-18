import React from "react"
import * as styles from "./styles.module.scss"

const SectionSchedule = () => {
  return (
    <section className={styles.schedule}>
      <div className="container">
        <div className={styles.call_schedule}>
          <h1>Pré-agendamento Simples e fácil</h1>
          <a href="">Fazer pré-agendamento</a>
        </div>
        {/* Falta arrumar imagem */}
        <div className={styles.image_schedule}>
          <div className={styles.img}></div>
        </div>
      </div>
    </section>
  )
}

export default SectionSchedule
