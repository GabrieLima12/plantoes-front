import { useNavigate, useParams } from "react-router-dom";
import { Button, Input } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { environment } from "../environments/environment";
import styles from './LayoutComum.module.css';


const EditarPlantonista = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [nomeMedico, setNomeMedico] = useState<string>("");
  const [especialidade, setEspecialidade] = useState<string>("");
  const [crm, setCrm] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [unidade1, setUnidade1] = useState(false);
  const [unidade2, setUnidade2] = useState(false);
  const [unidade3, setUnidade3] = useState(false);
  const [nomeUnidade, setNomeUnidade] = useState("");

  const handleUnidade1 = () => {
    setUnidade1(!unidade1);
    setNomeUnidade(unidade1 ? "" : "Unidade 1");
  }

  const handleUnidade2 = () => {
    setUnidade2(!unidade2);
    setNomeUnidade(unidade2 ? "" : "Unidade 2");
  }

  const handleUnidade3 = () => {
    setUnidade3(!unidade3);
    setNomeUnidade(unidade3 ? "" : "Unidade 3");
  }

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
        <h1 className={styles.titulo}>Editar Médico Plantonista</h1>
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
          <button 
            style={{ cursor: "pointer" }}
            className={unidade1 === true ? styles.botao_clicado : styles.botao }
            onClick={handleUnidade1}>Unidade 1
            </button>
          <button 
            style={{ cursor: "pointer" }}
            className={unidade2 === true ? styles.botao_clicado : styles.botao }
            onClick={handleUnidade2}>Unidade 2
            </button>
          <button 
            style={{ cursor: "pointer" }}
            className={unidade3 === true ? styles.botao_clicado : styles.botao }
            onClick={handleUnidade3}>Unidade 3
            </button>
        </div>
        <div className={styles.botao_rodape}>
          <Button onClick={() => navigate("/")}>Voltar</Button>
        </div>
    </div>
  );
};

export default EditarPlantonista;