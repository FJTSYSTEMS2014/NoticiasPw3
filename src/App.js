import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NavbarDown from './components/Navbar/NavbarDown';
//import NewsArg from './components/News/NewsArg';
import General from './components/News/General';
<<<<<<< HEAD
import GoogleNewsArg from './components/News/GoogleNewArg';
=======
>>>>>>> 76d3c2b86b66e28ab7803030a68a91177dda3dcb
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
            <Route path="/" exact component={Prueba} />
                <Route path="/buscar" exact component={AppTablaDatos} />
<<<<<<< HEAD
                <Route path="/google-ar" exact component={GoogleNewsArg} />
=======
>>>>>>> 76d3c2b86b66e28ab7803030a68a91177dda3dcb
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
            <NavbarDown />
        </Router>
        
        <FooterPage/>
        </div>
    )
}

export default App
