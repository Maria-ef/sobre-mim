import Header from "../components/Header"
import Title from '../components/Title'
import Text from '../components/Text'

import { useState, useEffect } from 'react'

import Axios from 'axios'
import { ArrowBendDownRight } from 'phosphor-react'

import portfolio from '../assets/portfolio.svg'

import styles from '../styles/pages/portfolio.module.css'


const Portfolio = () => {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function getRepos() {
      try {
        const response = await Axios.get('https://api.github.com/users/Maria-ef/repos');
        setRepos(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getRepos();
  }, [])

  return (
    <main>
    <Header title="Meus projetinhos" image={portfolio} />
    <section className={styles.portfolioContainer}>
    
        <Title content='Projetos no meu GitHub' />
        <div className={styles.cardRepoContainer}>
          {
            repos.map((repo) => {
              return (
                <div className={styles.cardRepo} key={repo.id}>
                  <h2>{repo.name}</h2>
                  <Text content={repo.description ?? 'Repositório sem descrição'} />
                  <a href={repo.html_url} target='_blank'>
                    <ArrowBendDownRight size={32} color='#000000' weight='thin' />
                  </a>
                </div>
              )
            })
          }
        </div>
      </section>
    </main>
  )
}

export default Portfolio