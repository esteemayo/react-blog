import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';

import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

axios.defaults.baseURL =
  'https://ndb99xkpdk.execute-api.eu-west-2.amazonaws.com/dev';

function App() {
  return (
    <Router>
      <NavBar />
      <ToastContainer />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
