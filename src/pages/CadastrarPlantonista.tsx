import { Button, Input } from 'antd';
import styles from './CadastrarPlantonista.module.css';
import { ChangeEvent, useState } from 'react';

const CadastrarPlantonista = () => {

  const [nomeMedico, setNomeMedico] = useState<string>("");
  const [especialidade, setEspecialidade] = useState<string>("");
  const [crm, setCrm] = useState<string>("");

  const handleCrmChange = (e: ChangeEvent<HTMLInputElement>) => {
    const novoValor = e.target.value.replace(/\D/g, '');
    setCrm(novoValor);
  }

  return (
    <div className={styles.container}>
        <h1 className={styles.titulo} >Cadastro de Médico Plantonista</h1>
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
          <Input 
            value={especialidade}
            onChange={(e) => setEspecialidade(e.target.value)}
            maxLength={150}
            type='text'
            className={styles.input_especialidade} />
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
        <div className={styles.botao_rodape}>
          <Button>Enviar</Button>
        </div>
    </div>
  )
}

export default CadastrarPlantonista;