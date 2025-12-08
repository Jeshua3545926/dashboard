import { createBrowserRouter } from "react-router-dom";
import Boleta from "./pages/boletas/boleta";
import App from "./pages/App";
import Cursos from "./pages/cursos/cursos";
import Horario from "./pages/Horario/horario";
import Credencial from "./pages/credencial/credencial";

export const router = createBrowserRouter([
  /* Enrutador de secciones de la pagina  */

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Boleta",
    element: <Boleta />
  },
  {
    path: "/cursos",
    element: <Cursos />,
  },
  {
    path: "/Boleta",
    element: <Boleta />
  },
  {
    path: "/cursos",
    element: <Cursos />,
  },
  {
    path: "/horario",
    element: <Horario />,
  },
  {
    path: "/credencial",
    element: <Credencial />,
  }

]);
