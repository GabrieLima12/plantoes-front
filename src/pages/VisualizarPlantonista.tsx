import { useParams } from "react-router-dom";
import styles from './VisualizarPlantonista.module.css';

const VisualizarPlantonista = () => {

  const { id } = useParams();

  return (
    <div className={styles.container}>
      VisualizarPlantonista {id} 
    </div>
  )
}

export default VisualizarPlantonista;