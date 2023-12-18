import { Table } from "antd"
import { useState, useEffect } from "react"
import Icones from "./Icones";
import { IActionColumn, IColumn, IMedico } from "./Interfaces";
import { environment }from '../../environments/environment'
import axios from 'axios'

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
        <Icones handleAction={() => handleAction(record.id)} />
      )
    }
  ]);

  const [dataSource, setDataSource] = useState<IMedico[]>([]);

  const handleAction = (id: number) => {
    // Implemente a lógica desejada para a ação
    console.log(`Ação clicada para o médico com ID ${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(environment.apiUrl + '/listagem');
        const list: IMedico[] = response.data || [];
        setDataSource(list);
      } catch (error) {
        // Trate os erros, se necessário
        console.error('Erro ao buscar dados:', error);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div className="container">
      <Table 
      columns={columns}
      dataSource={dataSource}
      rowKey='id'
      />
    </div>
  )
}

export default Tabela;
