// import React  from "react";
// import {Layout} from "./Layout";
// import {Routes} from "./Routes";

// export const AppRouter = () => {
//    return (
//       <Layout>
//          <Routes/>
//       </Layout>
//    )
// }

// import { useRoutes } from 'react-router-dom'

import { useRoutes } from 'react-router-dom'
import { routes } from './routes'

export const AppRouter = () => {
  return useRoutes(routes)
}