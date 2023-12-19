import { FaPowerOff, FaEdit, FaEye } from "react-icons/fa";
import styles from './Icones.module.css';
import { IIconesProps } from "../Interface/Interfaces";
import { Link } from "react-router-dom";
import { Popconfirm, message } from "antd";
import axios from "axios";
import { environment } from "../../environments/environment";
import { useState } from "react";


const Icones: React.FC<IIconesProps> = ({ id }) => {

  const [status, setStatus] = useState<string>("");

  const getStatus = async () => {
    
    const response = await axios.get(environment.apiUrl + "/plantonista/" + id);
    setStatus(response.data.status);

  };

  const confirm = async () => {
      
    const payload = {
      id : id,
      status : status === "ATIVO" ? "INATIVO" : "ATIVO",
    };

    try {
      await axios.put(environment.apiUrl + "/status", payload);
      message.success(`Médico ${status === "ATIVO" ? "inativado" : "ativado"} com sucesso`);
    } catch (error) {
      message.error("Erro na requisição!");
    };
    
  };

  return (
    <div className={styles.icones}>
      <Link to={`/visualizar-plantonista/${id}`}>
        <FaEye size={'1em'} className={styles.icone} />
      </Link>
      <Link to={`/editar-plantonista/${id}`}>
        <FaEdit size={'1em'} className={styles.icone} />
      </Link>
      <Popconfirm 
        title={status === "ATIVO" ? "Inativando Médico!" : "Ativando Médico!"}
        description={status === "INATIVO" ? "Deseja ativar o Médico ?" : "Dejesa inativar o Médico ?"}
        onConfirm={confirm}
        okText="Sim"
        cancelText="Não"
        okType={"primary"}
        okButtonProps={{
          danger: true
        }}>
        <FaPowerOff 
          onClick={getStatus}
          size={'1em'} className={styles.icone} />
      </Popconfirm>
    </div>
  );
};

export default Icones;