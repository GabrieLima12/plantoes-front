import { Table } from "antd";
import { useState, useEffect } from "react";
import Icones from "./Icones";
import { IActionColumn, IColumn, IMedico } from "../Interface/Interfaces";
import { environment }from '../../environments/environment';
import axios from 'axios';
import styles from './Tabela.module.css';


const Tabela = () => {

  const [columns, setColumns] = useState<(IColumn | IActionColumn)[]>([
    {
      title: "ID",
      dataIndex: "id"
    },
    {
      title: "Nome Médico",
      dataIndex: "nomeMedico"
    },
    {
      title: "CRM",
      dataIndex: "crm"
    },
    {
      title: "Especialidade",
      dataIndex: "especialidade"
    },
    {
      title: "Status",
      dataIndex: "status"
    },
    {
      title: "Nome Unidade Assistencial",
      dataIndex: "nomeUnidadeAssistencial"
    },
    {
      title: "Ações",
      render: (text, record) => (
        <Icones id={record.id} />
      )
    }
  ]);

  const [dataSource, setDataSource] = useState<IMedico[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(environment.apiUrl + '/listagem');
        const list: IMedico[] = response.data || [];
        setDataSource(list);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <Table 
      columns={columns}
      dataSource={dataSource}
      rowKey='id'
      scroll={{ x: 900 }}
      />
    </div>
  )
}

export default Tabela;
