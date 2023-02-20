import Link from 'next/link'
import styles from '../styles/Usuarios.module.css'
const usuarios = [
    {
        nome: "André Eppinghaus",
        id: 1
    },
    {
        nome: "Luiz Estevão",
        id: 2
    },
    {
        nome: "Vicente Calfo",
        id: 3
    }
]

export default function Usuarios() {
    
    return (
        < >
            <h1>Lista Usuários</h1>
            {
            usuarios.map((usuario, index)=> {
                return <Link href={`/usuario/${index}`} className={styles.card}>
                        
                <h2>{usuario.nome}</h2>
            
        </Link>
                
            })
            }
        </>
    )
}