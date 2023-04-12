import styles from './Home.module.css'
import servicesimg from './servicesimg.png'

import LinkButton from '../layout/LinkButton'


function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        Bem-vindo a <span>WorkNow</span>
        
      </h1>
      <p>Resolva seu serviço já !</p>
      <LinkButton to="/newproject" text="Começar serviço" />
      <img src={servicesimg}/>
    </section>
  )
}

export default Home
