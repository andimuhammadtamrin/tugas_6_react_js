import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from "./App";
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";
import Kontak from "./Page/Kontak";

const AppRouter = () =>(
  <Router>
    <div>
      <Route path="/" exact component = {App} />
      <Route path="/Menu_Makanan" exact component = {MenuMakanan} />
      <Route path="/Menu_Minuman" exact component = {MenuMinuman} />
      <Route path="/kontak" exact component ={Kontak}/>

    </div>
  </Router>
);

export default AppRouter;
