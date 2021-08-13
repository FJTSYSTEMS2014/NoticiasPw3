import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NewsArg from './components/News/NewsArg';
import General from './components/News/General';
import Ciencia from './components/News/Ciencia';
import Entretenimiento from './components/News/Entretenimiento';
import AppTablaDatos from './components/ApiDatosTabla/AppTablaDatos';
import Formulario from './components/Formulario/Formulario'
import FooterPage from './components/Footer/Footer';
import Tecnologia from './components/News/Tecnologia';
import Salud from './components/News/Salud';
import Negocios from './components/News/Negocios';
import Deportes from './components/News/Deportes';
import Prueba from './components/News/Prueba';
import AppQR from './AppQR';
import AppReaderQR from './AppReaderQR';


function App() {
    return (
        <div> <Router>
            <Navbar />

            <Switch >
            <Route path="/" exact component={Formulario} />
                <Route path="/buscar" exact component={AppTablaDatos} />
                <Route path="/general" exact component={General} />
                <Route path="/formulario" exact component={Formulario} />   
                <Route path="/ciencia" exact component={Ciencia} />
                <Route path="/tec" exact component={Tecnologia} />
                <Route path="/salud" exact component={Salud} />
                <Route path="/negocios" exact component={Negocios} />
                <Route path="/deportes" exact component={Deportes} />
                <Route path="/entretenimiento" exact component={Entretenimiento} />
                <Route path="/QR_Generator" exact component={AppQR} />
                <Route path="/QR_Scann" exact component={AppReaderQR} />
            </Switch>

        </Router>
        <FooterPage/>
        </div>
    )
}

export default App
