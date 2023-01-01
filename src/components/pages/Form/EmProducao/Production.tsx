import { useParams } from 'react-router-dom'


export const Producao = () => {
    const params = useParams()
    return (
        <div className="Prod_Container">
            <h1>Pagina {params.slug?.toLowerCase()} em desenvolvimento</h1>
        </div>
    )
}