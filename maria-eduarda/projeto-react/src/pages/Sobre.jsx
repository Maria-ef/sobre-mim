import Header from "../components/Header"
import Subtitle from '../components/Subtitle'
import Text from '../components/Text'

import sobre from '../assets/sobre.svg'
import maria from '../assets/maria-ef.jpg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin2.png'
import instagram from '../assets/instagram2.png'

import { Link } from 'react-router-dom'

import styles from '../styles/pages/sobre.module.css'

const Sobre = () => {
  return (
    <main>
    <Header textTitle="Saiba mais sobre mim" image={sobre} />
    <section className={styles.container}>
        <div className={styles.sobreContainer}>
          <Subtitle content='Maria Eduarda, prazer!' />
          <img className={styles.imageSobre} src={maria} />
          <div className={styles.buttons}>
            <div className={styles.github}>
              <Link to="https://github.com/Maria-ef" target="_blank">
                <img className={styles.buttonImage} src={github} />
              </Link>
            </div>

            <div className={styles.linkedin}>
                <Link to="https://www.linkedin.com/in/maria-eduarda-ferreira-aab205270/" target="_blank">
                  <img className={styles.buttonImage} src={linkedin}/>
                </Link>
            </div>

            <div className={styles.instagram}>
              <Link to="https://www.instagram.com/_maduhb/" target="_blank">
                <img className={styles.buttonImage} src={instagram}/>
              </Link>
            </div>
        </div>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.paragraphSobre}>
            Meu nome é Maria Eduarda, sou de Recife e tenho 23 anos. 
            Eu estava cursando Nutrição e realizando um estágio quando tomei a decisão de
            migrar para a área de tecnologia. E hoje, meu objetivo profissional é tornar-me desenvolvedora Fullstack. 
          </div>  

          <div className={styles.paragraphSobre}>
            <h4>Formação</h4>
            <p>Sou formada em saneamento básico pelo IFPE desde 2020, realizei o bootcamp de Front-End da Reprograma de março a agosto de 2023 e, atualmente, sou estudante de Análise e Desenvolvimento de Sistemas na Uninassau.</p>
          </div>

          <div className={styles.paragraphSobre}>  
            <h4>Experiências</h4>
            <p>Realizei dois estágios na área de saneamento, onde pude desenvolver habilidades comunicação, trabalho em equipe etc.</p>
          </div>

          <div className={styles.paragraphSobre}>  
            <h4>Hard Skills</h4>
            <li>Lógica de programação</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git e Github</li>
            <li>UX Design</li>
          </div>

          <div className={styles.paragraphSobre}>
            <h4>Curiosidades</h4>  
            <li>Nas horas vagas, gosto de assistir filmes e séries, estar com as pessoas que amo e meus bichinhos. ♡</li>
            <li>Amo Harry Potter</li>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Sobre