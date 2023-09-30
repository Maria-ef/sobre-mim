import { Link } from 'react-router-dom'

import { Butterfly, Code } from 'phosphor-react'

import styles from '../styles/components/menu.module.css'


const Menu = () => {
    return (
    <nav className={styles.menuContainer}>
        <Code size={40} color='#000000' weight='thin' />
        <li>
            <Link className={styles.menuLink} to="/sobre">Home</Link>
        </li>
        <li>
            <Link className={styles.menuLink} to="/portfolio">Portfólio</Link>
        </li>
        <li>
            <Link className={styles.menuLink} to="/contato">Contato</Link>
        </li> 
        <Butterfly size={40} color='#000000' weight='thin' />
    </nav>
    )
}

export default Menu