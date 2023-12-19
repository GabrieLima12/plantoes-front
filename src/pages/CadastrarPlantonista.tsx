import { Button, Input, Select, Space, message } from 'antd';
import styles from './CadastrarPlantonista.module.css';
import { ChangeEvent, useState } from 'react';
import axios from 'axios';
import { environment } from '../environments/environment';
import { useNavigate } from 'react-router-dom';

const CadastrarPlantonista = () => {

  const navigate = useNavigate();
  const [nomeMedico, setNomeMedico] = useState<string>("");
  const [especialidade, setEspecialidade] = useState<string>("");
  const [crm, setCrm] = useState<string>("");

  const [unidade1, setUnidade1] = useState(false);
  const [unidade2, setUnidade2] = useState(false);
  const [unidade3, setUnidade3] = useState(false);
  const [nomeUnidade, setNomeUnidade] = useState("");

  const options = [
    {
      value: 'ORTOPEDIA',
      label: 'ORTOPEDIA',
    },
    {
      value: 'CARDIOLOGIA',
      label: 'CARDIOLOGIA',
    },
    {
      value: 'GINECOLOGIA',
      label: 'GINECOLOGIA',
    },
    {
      value: 'DERMARTOLOGIA',
      label: 'DERMARTOLOGIA',
    },
  ];

  const handleCrmChange = (e: ChangeEvent<HTMLInputElement>) => {
    const novoValor = e.target.value.replace(/\D/g, '');
    setCrm(novoValor);
  }

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

  const handleChange = (value: string) => {
    setEspecialidade(value);
  }

  const handleSubmit = async () => {

    if (!nomeMedico || !crm || !especialidade || !nomeUnidade) {
      alert("Preencha todos os campos antes de enviar.");
      return;
    }

    const payload = {
      nomeMedico: nomeMedico,
      crm: crm,
      especialidade: especialidade,
      nomeUnidadeAssistencial: nomeUnidade,
    }
    
    try {
      await axios.post(environment.apiUrl + "/cadastro", payload);
      message.success("Médico cadastrado com Sucesso!");
      navigate("/");
    } catch (error) {
      message.error("Erro ao cadastrar médico!");
    }
  }

  return (
    <div className={styles.container}>
        <h1 className={styles.titulo}>Cadastro de Médico Plantonista</h1>
        <div className={styles.inputs}>
          <label><strong>CRM do Médico:</strong></label>
          <Input
            type='text'
            value={crm}
            onChange={handleCrmChange}
            maxLength={6}
            className={styles.input_crm} />
        </div>
        <div className={styles.inputs}>
          <label><strong>Epecialidade do Médico:</strong></label>
          <Select 
            options={options}
            onChange={handleChange}
            className={styles.input_especialidade}/>
        </div>
        <div className={styles.inputs}>
          <label><strong>Nome do Médico:</strong></label>
          <Input
            value={nomeMedico}
            onChange={(e) => setNomeMedico(e.target.value)} 
            maxLength={150}
            type='text'
            className={styles.input_nome} />
        </div>
        <div className={styles.botoes}>
          <button 
            className={unidade1 === true ? styles.botao_clicado : styles.botao }
            onClick={handleUnidade1}>Unidade 1</button>
          <button 
            className={unidade2 === true ? styles.botao_clicado : styles.botao }
            onClick={handleUnidade2}>Unidade 2</button>
          <button 
            className={unidade3 === true ? styles.botao_clicado : styles.botao }
            onClick={handleUnidade3}>Unidade 3</button>
        </div>
        <div className={styles.botao_rodape}>
          <Button onClick={() => navigate("/")}>Voltar</Button>
          <Button
            onClick={handleSubmit}
          >Enviar</Button>
        </div>
    </div>
  );
};

export default CadastrarPlantonista;