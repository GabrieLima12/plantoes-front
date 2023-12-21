import { useNavigate, useParams } from "react-router-dom";
import styles from './LayoutComum.module.css';
import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { environment } from "../environments/environment";

const VisualizarPlantonista = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [nomeMedico, setNomeMedico] = useState<string>("");
  const [especialidade, setEspecialidade] = useState<string>("");
  const [crm, setCrm] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [nomeUnidade, setNomeUnidade] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(environment.apiUrl + "/plantonista/" + id);
      setNomeMedico(response.data.nomeMedico);
      setEspecialidade(response.data.especialidade);
      setCrm(response.data.crm);
      setStatus(response.data.status);
      setNomeUnidade(response.data.nomeUnidadeAssistencial);
    }
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
        <h1 className={styles.titulo}>Visualizar Médico Plantonista</h1>
        <div className={styles.inputs}>
          <label><strong>CRM do Médico:</strong></label>
          <Input
            type='text'
            value={crm}
            className={styles.input_crm}
            disabled={true} />
        </div>
        <div className={styles.inputs}>
          <label><strong>Epecialidade do Médico:</strong></label>
          <Input 
            value={especialidade}
            type='text'
            className={styles.input_especialidade} 
            disabled={true}/>
        </div>
        <div className={styles.inputs}>
          <label><strong>Nome do Médico:</strong></label>
          <Input
            value={nomeMedico}
            type='text'
            className={styles.input_nome} 
            disabled={true} />
        </div>
        <div className={styles.inputs}>
          <label><strong>Status Médico:</strong></label>
          <Input
            value={status}
            type='text'
            className={status === "ATIVO" ? styles.input_status : styles.input_status_inativo} 
            disabled={true} 
            bordered={false} />
        </div>
        <div className={styles.botoes}>
          <button className={nomeUnidade === "Unidade 1" ? styles.botao_clicado : styles.botao}>
            Unidade 1
          </button>
          <button className={nomeUnidade === "Unidade 2" ? styles.botao_clicado : styles.botao}>
            Unidade 2
          </button>
          <button className={nomeUnidade === "Unidade 3" ? styles.botao_clicado : styles.botao}>
            Unidade 3
          </button>
        </div>
        <div className={styles.botao_rodape}>
          <Button onClick={() => navigate("/")}>Voltar</Button>
        </div>
    </div>
  );
};

export default VisualizarPlantonista;