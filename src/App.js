import './App.css';
import About from './Components/About/About';
import AddService from './Components/AddService/AddService';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NotFound from './Components/NotFound/NotFound';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';

import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Contact from './Components/Contact/Contact';
import Allorders from './Components/Allorders/Allorders';
import Myorders from './Components/Myorders/Myorders';


function App() {
  return (
    < div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/servicedetails/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>

            <Route path="/addservice">
              <AddService></AddService>
            </Route>

            <Route path="/allOrder">
              <Allorders></Allorders>
            </Route>
            <Route path="/myOrder">
              <Myorders></Myorders>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Router path="*">
              <NotFound></NotFound>
            </Router>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
