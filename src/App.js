import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NewsArg from './components/News/NewsArg';
import App3 from './App3';
import Formulario from './components/Formulario/Formulario'


function App() {
    return (
        <div> <Router>
            <Navbar/>

            <Switch >
          <Route path="/hola" exact component={NewsArg} />
        </Switch>
<div className="row justify-content-end"> 
    <div className=" col-md-6 col-xs-12 bg-dark"> <App3/></div>
     <div className="  col-md-6 col-xs-12 bg-dark float-right" ><Formulario/></div>
        
           
            </div>
            </Router>
        </div>
    )
}

export default App
