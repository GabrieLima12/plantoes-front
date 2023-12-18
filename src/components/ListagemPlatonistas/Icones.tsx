import { FaPowerOff, FaEdit, FaEye } from "react-icons/fa";
import styles from './Icones.module.css';
import { IIconesProps } from "../Interface/Interfaces";
import { Link } from "react-router-dom";
import { Popconfirm, message } from "antd";


const Icones: React.FC<IIconesProps> = ({ id }) => {

  const confirm = () => {
    message.success("Deu certo!");    
  }

  return (
    <div className={styles.icones}>
      <Link to={`/visualizar-plantonista/${id}`}>
        <FaEye size={'1em'} className={styles.icone} />
      </Link>
      <Link to={`/editar-plantonista/${id}`}>
        <FaEdit size={'1em'} className={styles.icone} />
      </Link>
      <Popconfirm 
        title="Caixa de Texto"
        onConfirm={confirm}>
        <FaPowerOff size={'1em'} className={styles.icone} />
      </Popconfirm>
    </div>
  )
}

export default Icones;