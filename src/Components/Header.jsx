import { useState } from "react";
import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/Logo.png"

const Header = () => {
  const [click, setClick] = useState(false);

  const hamdleClick = () => setClick(!click);
  return (
    <header className="header">
      <section className="LogIcon">
          <img src={Logo} alt="Logo da empresa" className="Logo"/>
        <nav className={`${click ? "listTop0" : "list"} listActive`}>
          <a href="#home" onClick={hamdleClick} className="linkB">
            Home
          </a>
          <a href="#sobre" onClick={hamdleClick} className="linkB">
            Sobre
          </a>
          <a href="#projetos" onClick={hamdleClick} className="linkB">
            Projetos
          </a>
          <a href="#contato" onClick={hamdleClick} className="linkB">
            Contato
          </a>
        </nav>
      </section>
      <div className="Icon" onClick={hamdleClick}>
        {click ? <IoMdClose className="closeIcon" /> : <HiBars3 />}
      </div>
    </header>
  );
};

export default Header;
