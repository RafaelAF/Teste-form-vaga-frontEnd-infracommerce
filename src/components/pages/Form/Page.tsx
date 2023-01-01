import { Contato } from "./Contato/Contato";

import { Routes, Route, Link } from 'react-router-dom'
import './style.css'
import { Producao } from "./EmProducao/Production";

export const Page = () => {
    return (
        <div className="Container">
            <div className="leftSide">
                <div className="head">
                    <p>Aconpanhar Pedido</p>
                </div>
                <div className="menuContainer">
                    <nav className="menu">
                        <ul className="menuList">
                            <li><Link to="/compra">COMPRA</Link></li>
                            <li><Link to="/guia%20de%20tamanhos">GUIA DE TAMANHOS</Link></li>
                            <li><Link to="/minha%20conta">MINHA CONTA</Link></li>
                            <li><Link to="/politica%20de%20pagamento">POLITICA DE PAGAMENTO</Link></li>
                            <li><Link to="/politica%20de%20entrega">POLITICA DE ENTREGA</Link></li>
                            <li><Link to="/trocas%20e%20devolucoes">TROCAS E DEVOLUÇÕES</Link></li>
                            <li><Link to="/cuidados%20com%20os%20produtos">CUIDADOS COM OS PRODUTOS</Link></li>
                            <li><Link className="active" to="/contato">CONTATO</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="rightSide">
                <Routes>
                    <Route path="/:slug" element={<Producao />} />
                    <Route path="/contato" element={<Contato />} />
                </Routes>
            </div>
            
        </div>
    );
}