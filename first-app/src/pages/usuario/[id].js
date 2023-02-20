import { useRouter } from "next/router"
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

export default function Usuario() {
    const router = useRouter()
    const { id } = router.query
    return (
        < >
            <h1>usuário selecionado: {usuarios[id-1].nome}</h1>
        </>
    )
}