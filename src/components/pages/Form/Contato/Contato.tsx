import './contato.css'
import EmailIMG from '../../../../assets/email.png'
import Tel from '../../../../assets/tel.png'

export const Contato = () => {
    


    return (
        <div className="GeneralContainer">
            <div className="info">
                <div className="info01">
                    <p className="contact-title">CONTATO</p>
                    <p className="contact-desc">Nosso atendimento ao cliente funciona de segunda à sabado - 24hs, Domingo até as 08hs (horário de Brasilia) exceto feriados</p>
                </div>
                <div className="info02">
                    <p className="contact-title">LOJA ONLINE</p>
                    <span className='span'><img src={Tel} alt="imagem telefone" /><b>Telefone: </b><p>(11) 4935-2398</p></span>
                    <span className='span'><img src={EmailIMG} alt="imagem email" /><b>Email: </b><p>contato@armaniexchange.com.br</p></span>
                </div>
            </div>
            <form action="" className="form">
                <div>ENVIE UMA MENSAGEM</div>
                <div className='formContent'>
                    <label className="item1" htmlFor="">
                        <span>Nome:</span>
                        <input type="text" />
                    </label>
                    <label className="item2" htmlFor="">
                        <span>Sobrenome:</span>
                        <input type="text" />
                    </label>
                    <label className="item3" htmlFor="">
                        <span>E-mail:</span>
                        <input type="email" />
                    </label>
                    <label className="item4" htmlFor="">
                        <span>Telefone:</span>
                        <input type="tel" />
                    </label>
                    <label className="item5" htmlFor="">
                        <span>Celular:</span>
                        <input type="tel" />
                    </label>
                    <label className="item6" htmlFor="">
                        <span>Tipo de solicitação:</span>
                        <select name="" id="">
                            <option value="">Duvida</option>
                            <option value="">Sugestão</option>
                        </select>
                    </label>
                    <label className="item7" htmlFor="">
                        <span>Mensagem:</span>
                        <textarea name="" id="" rows={10}></textarea>
                    </label>
                    <button className="item8" type="submit">ENVIAR</button>
                </div>
            </form>
        </div>
    );
}