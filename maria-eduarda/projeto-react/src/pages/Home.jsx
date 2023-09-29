import Header from '../components/Header'
import Text from '../components/Text'
import Subtitle from '../components/Subtitle'

import home from '../assets/home.svg'

import { Butterfly, Code, AddressBook } from 'phosphor-react'

import styles from '../styles/pages/home.module.css'

const Home = () => {
  return (
    <main>
    <Header image={home}/>
    <section className={styles.homeContainer}>
        <div className={styles.cardContainer}>
          <Butterfly size={200} color='#000000' weight='thin' />
          <Subtitle content='Vida' />
          <Text content='Em Sobre conto um pouco sobre mim. Descrevo um pouco da minha história, minhas formações, curiosidades e alguns gostos pessoais.' />
        </div>
        <div className={styles.cardContainer}>
          <Code size={200} color='#000000' weight='thin' />
          <Subtitle content='Código' />
          <Text content='Em Portfólio mostro todos os meus repositórios públicos no GitHub.' />
        </div>
        <div className={styles.cardContainer}>
          <AddressBook size={200} color='#000000' weight='thin' />
          <Subtitle content='Contato' />
          <Text content='Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.' />
        </div>
      </section>
    </main>
  )
}

export default Home