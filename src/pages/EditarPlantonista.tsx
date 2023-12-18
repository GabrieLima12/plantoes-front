import { useParams } from "react-router-dom";
import styles from './CadastrarPlantonista.module.css';

const EditarPlantonista = () => {

  const { id } = useParams();

  return (
    <div className={styles.container}>
      EditarPlantonista {id}
    </div>
  )
}

export default EditarPlantonista;