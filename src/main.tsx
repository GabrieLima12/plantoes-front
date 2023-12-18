import { createRoot } from 'react-dom/client';
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VisualizarPlantonista from './pages/VisualizarPlantonista.tsx';
import EditarPlantonista from './pages/EditarPlantonista.tsx';
import CadastrarPlantonista from './pages/CadastrarPlantonista.tsx';
import Tabela from './components/ListagemPlatonistas/Tabela.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Tabela />,
      },
      {
        path: '/visualizar-plantonista/:id',
        element: <VisualizarPlantonista />,
      },
      {
        path: '/editar-plantonista/:id',
        element: <EditarPlantonista />,
      },
      {
        path: '/cadastrar-plantonista',
        element: <CadastrarPlantonista />,
      },
    ]
  }
])

const root = createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={router} />);