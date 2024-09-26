import { AiFillBank } from "react-icons/ai";
import { MdOutlineSecurity } from "react-icons/md";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { MdFamilyRestroom } from "react-icons/md";
import { FaHouseUser } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { FaClinicMedical } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";

// import Capa from "../assets/Capa.jpg";

const main = () => {
  return (
    <main>
      <section id="home" className="home">
        <section className="imgTextHome">
          {/* <img src={Capa} alt="" className="imgHome" /> */}
          <div className="HomeBox">
            <h1 className="HomeP">
            A capacidade de atender a todos os seus direitos.
            </h1>
          </div>
        </section>
      </section>

      <article className="sobre simpleAnimation" id="sobre">
        <h3 className="SobreH3">Quem somos</h3>
        <figure className="ImgPSobre">
          <section className="SobreImg"> </section>
          <span className="PSobre simpleAnimation">
            <p>
            A Advogado Falso é uma nova sociedade de advogados atuando no mercado desde 2022 com o objetivo fundamental de atendimento ao cliente totalmente personalidade, tanto à pessoa físicas quanto jurídicas.
            </p>
            <br />
            <p>Nosso escritório conta com diversos profissionais dedicados que buscam sempre estarem atualizados no mercado, para um melhor atendimento ao cliente.</p>
          </span>
        </figure>
      </article>


      <article className="Projetos" id="projetos">
        <h2 className="Servih2">Nossos serviços</h2>
        <section className="SerBox">
          <ul className="SerGridList simpleAnimation">
            <li className="simpleAnimation GridElement">
              <AiFillBank size={30} />
              <h3>Direito Bancário</h3>
            </li>
            <li className="simpleAnimation GridElement">
              <MdOutlineSecurity size={30} />
              <h3>Direito Securitário</h3>
            </li>
            <li className="simpleAnimation GridElement">
              <FaPersonBreastfeeding size={30} />
              <h3>Direito Civil</h3>
            </li>
            <li className="simpleAnimation GridElement">
              <MdFamilyRestroom size={30} />
              <h3>Direito de família e sucessões</h3>
            </li>
            <li className="simpleAnimation GridElement">
              <FaHouseUser size={30} />
              <h3>Direito Imobiliário</h3>
            </li>
            <li className="simpleAnimation GridElement">
              <GoLaw size={30} />
              <h3>Assessoria Jurídica</h3>
            </li>
            <li className="simpleAnimation GridElement">
              <FaClinicMedical size={30} />
              <h3>Direito Médico e da Saúde</h3>
            </li>
            <li className="simpleAnimation GridElement">
              <FaMoneyBillTransfer size={30} />
              <h3>Direito Tributário.</h3>
            </li>
          </ul>
        </section>
      </article>

      <address className="Paralax">
        <span className="ParaSpan">
        <p>Sempre fazendo o que é certo pelo que é certo.</p>
        </span>
      </address>

    </main>
  );
};

export default main;
