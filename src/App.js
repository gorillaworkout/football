import React,{useEffect,useState} from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import {toast} from 'react-toastify'  
import 'react-toastify/dist/ReactToastify.css' 
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Pilihan from './Pages/Pilihan/Pilihan'
import Register from './Pages/Register/Register'
import Axios from 'axios'
import {API_URL} from './Helpers/apiUrl'
import { LoginFunc } from './redux/Actions'
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux'
import Detail from './Pages/Detail/Detail'
function App(props) {
  const dispatch = useDispatch()

  toast.configure()

  const [loading,setLoading]=useState(true)

  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/detail/:id' component={Detail}/>
    </Switch>
  );
}

const Mapstatetoprops=({Auth})=>{
  return {
    ...Auth
  }
}

export default connect(Mapstatetoprops,{})(App);
