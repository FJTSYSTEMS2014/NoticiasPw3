import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NewsArg from './components/News/NewsArg';
import App3 from './App3';
import AppTablaDatos from './components/ApiDatosTabla/AppTablaDatos';
import Formulario from './components/Formulario/Formulario'
import FooterPage from './components/Footer/Footer';


function App() {
    return (
        <div> <Router>
            <Navbar />

            <Switch >
                <Route path="/buscar" exact component={AppTablaDatos} />
                <Route path="/home" exact component={App3} />
                <Route path="/formulario" exact component={Formulario} />
                <Route path="/" exact component={Formulario} />
            </Switch>

        </Router>
        <FooterPage/>
        </div>
    )
}

export default App
