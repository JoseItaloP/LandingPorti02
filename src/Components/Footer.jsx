import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedin   } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="contato" id="contato">
      <section className="DivBox simpleAnimation">
          <div className="divBoxFooter">
            <h2 className="H2Foot">Nossos Contatos</h2>
            <ul className="listCont1">
              <li><span>Email</span>: <a href="#">Email@Email.com</a></li>
              <br/>
              <li><span>Telefone</span>: <a href="#">00-0000-0000</a></li>
              <br/>
            </ul>
          </div>
          <div className="divBoxFooter">
            <h2 className="H2Foot">Endereço</h2>
            <p className="EndFot">Rua..., 000, Casa</p>
          </div>
          <div className="divBoxFooter">
            <h2 className="H2Foot">Redes sociais</h2>
            <ul className="listCont2">
              <li className="IconFace"><FaFacebookF size={20}/></li>
              <li className="IconInst"><FaInstagram size={20}/></li>
              <li className="IconLink"><FaLinkedin size={20}/></li>
            </ul>
          </div>
      </section>
      <section className="FicFoot">
        <p>Esta é uma empresa fictícia criada para demostração de um produto.</p>
      </section>
    </div>
    </footer>
  )
}

export default Footer
