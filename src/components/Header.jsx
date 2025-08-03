import style from './../assets/style/components/header.module.styl'
import logo from "./../assets/img/logo-dark.svg"

function Header() {
  return (
      <header className={style.Header}>
          <img src={logo} alt="logo" width="90px"/>
          <h1 className="font-playfair text-x-large m-0">
              Chefs
              <br/><span className="font-playfair text-x-large m-0">Academy</span>
              <br/>Secrets
          </h1>
      </header>
  )
}

export default Header
