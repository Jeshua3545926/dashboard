import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";


export const router = createBrowserRouter([
/* Enrutador de secciones de la pagina  */

  {
    path: "/",
    element: <App />,
  },
  {
    path: "/boletas",
    element: <Boletas />,
  },
  {
    path: "/alumnos",
    element: <Alumnos />,
  },
  {
    path: "/credencial",
    element: <Credencial />,
  },
  {
    path: "/reportes",
    element: <Reportes />,
  },
  {
    path: "/configuracion",
    element: <Configuracion />,
  },

  
]);