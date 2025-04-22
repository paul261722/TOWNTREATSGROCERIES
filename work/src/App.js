import './App.css';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Getproduct from './components/Getproduct';
import Addproducts from './components/Addproducts';
import Signup from './components/Signup';
import Notfound from './components/Notfound';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import AboutUs from './components/Aboutus';

function App() {
  return (
    <Router><div className="App">
    {/* <header className="App-header"> */}
      {/* <h1 className='text-success'>TOWN TREATS GROCERIES</h1> */}

    {/* </header> */}

    {/* create the different urls to thecomponents */}
    <Navbar/>
    <Routes>
      <Route path='/' element={<Getproduct/>}/>
      <Route path='/addproducts' element={<Addproducts/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Notfound' element={<Notfound/>}/>
      <Route path='/*' element={<AboutUs/>}/>
    </Routes>

  </div>
  </Router>
  );
}

export default App;
// npm install bootstrap
// ''   '' axios
// ''   ''react-router-dom
