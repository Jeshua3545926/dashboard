import { createBrowserRouter } from "react-router-dom";
import Boleta from "./pages/boletas/boleta";
import App from "./pages/App";
import Cursos from "./pages/cursos/cursos";

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
  // {
  //   path: "/horarios-examenes",
  //   element: <HorariosExamenes />,
  // },
  // {
  //   path: "/actividades",
  //   element: <Actividades />,
  // },





]);