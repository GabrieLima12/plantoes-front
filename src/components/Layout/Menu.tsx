import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { Tooltip } from "antd";
import { FaClipboardList } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

interface IMenu {
  collapsed: Boolean,
};

const Menu: React.FC<IMenu> = ({ collapsed }) => {

  return (
    <div>
      <div className={styles.links}>
          <Link className={styles.link} to="/">
              {collapsed === true ?
                  <Tooltip title="Cooperados Platonistas" color="#03045e" >
                      <FaClipboardList  className={styles.icons} />
                  </Tooltip> :
                  <FaClipboardList  className={styles.icons} />
              }
              {!collapsed && <span className={styles.label}>Cooperados Platonistas</span>}
          </Link>
      </div>
      <div className={styles.links}>
          <Link className={styles.link} to="/cadastrar-plantonista">
              {collapsed === true ?
                  <Tooltip title="Cadastro de Cooperado" color="#03045e">
                      <FaUserDoctor className={styles.icons} />
                  </Tooltip> :
                  <FaUserDoctor className={styles.icons} />
              }
              {!collapsed && <span className={styles.label}>Cadastro de Cooperado</span>}
          </Link>
      </div>
    </div>
  );
};

export default Menu;