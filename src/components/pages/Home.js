import styles from './Home.module.css'
import servicesimg from './servicesimg.png'

import LinkButton from '../layout/LinkButton'
import logo from './LOGO.jpeg'

function Home() {
  return (
    <section className={styles.home_container}>
      
      <img src={logo}/>
        
      
      <p>Resolva seu serviço já !</p>
      <LinkButton to="/newproject" text="Começar serviço" />
      
    </section>
  )
}

export default Home
