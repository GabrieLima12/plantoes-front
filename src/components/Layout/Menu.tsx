import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {

  return (
    <div className={styles.container}>
        <div className={styles.links} >
          <Link to="/" className={styles.link} >
            Listagem Plantonistas
          </Link>
          <Link to="/cadastrar-plantonista" className={styles.link} >
            Cadastrar Plantonistas
          </Link>
        </div>
    </div>
  )
}

export default Menu