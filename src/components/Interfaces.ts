import { ActionType } from './Icones';

export interface IMedico {
    id: number,
    nomeMedico: string,
    crm: string,
    especialidade: string,
    status: string,
    nomeUnidadeAssistencial: string
};

export interface IColumn {
    title: string;
    dataIndex: keyof IMedico;
    render?: (text: any, record: IMedico) => React.ReactNode;
}

export interface IActionColumn {
    title: string;
    render?: (text: any, record: IMedico) => React.ReactNode;
}

export interface IIconesProps {
    handleAction: (actionType: ActionType) => void;
}

export interface IEnvironment {
    production: boolean,
    apiUrl: string;
}