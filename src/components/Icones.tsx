import { FaPowerOff, FaEdit, FaEye } from "react-icons/fa";
import styles from './Icones.module.css';
import { IIconesProps } from "./Interfaces";

export enum ActionType {
    Eye = 'eye',
    Edit = 'edit',
    PowerOff = 'powerOff',
}

const Icones: React.FC<IIconesProps> = ({ handleAction }) => {

  return (
    <div className={styles.icones} >
        <FaEye size={'1em'} onClick={() => handleAction(ActionType.Eye)} />
        <FaEdit size={'1em'} onClick={() => handleAction(ActionType.Edit)} />
        <FaPowerOff size={'1em'} onClick={() => handleAction(ActionType.PowerOff)} />
    </div>
  )
}

export default Icones;