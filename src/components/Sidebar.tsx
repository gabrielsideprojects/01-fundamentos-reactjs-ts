import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import {PencilLine } from 'phosphor-react'
export function Sidebar(){
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
             src='https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50' />
            <div className={styles.profile}>
             <Avatar src={"https://github.com/gabrielsideprojects.png"}/>


                <strong>Gabriel Menezes</strong>
                <span>Web Developer</span>
            </div>

            <footer>
   
                <a href='#'> 
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}