import React, { useState, useReducer, useEffect} from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import logo from '../img/logo.png';

function Login() {
  const history = useHistory();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const login = event => {
    event.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((event) => alert(event.message));
  };

  const register = event => {
    event.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  // useEffect(() => {
  //   const data = localStorage.getItem('me-id');
  //   if (data){
  //     setEmail(JSON.parse(data))
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('me-id', JSON.stringify(email));
  // });

  return (
    <div className="login">
      <Link to="/" className="login__homeLink">
        <img 
          className="login__logo"
          src={logo}
          alt=""
        />
      </Link>

      <div className="login__container">
        <h3>Sign In</h3>
        <form>
          <span>Name</span>
          <input value={name} onChange={event => setName(event.target.value)} type="text" />
          <span>Email</span>
          {/* <input type="email" /> */}
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
          <span>Password</span>
          {/* <input type="password" />  */}
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
          {/* <button type="submit" className="login__loginButton buttons">Sign In</button> */}
          <button onClick={login} type="submit" className="login__loginButton buttons">Sign In</button>
        </form>

        <font>By signing-in you agree to the Terms & Condtions.</font>

        {/* <button type="submit" className="login__registerButton buttons">Register </button> */}
        <button onClick={register} type="submit" className="login__registerButton buttons">Register</button>
      </div>

    </div>
  );
}

export default Login;
