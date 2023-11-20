import {
    Route,
    createRoutesFromElements,
  } from "react-router-dom";
import { Home } from "../pages/home";
const Routes = (
    <>
    <Route path="/" element={<Home/>}/>
    </>
)
export const routes = createRoutesFromElements(Routes);
