import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Routes/Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from "./Routes/Detail.jsx"
import Favs from "./Routes/Favs"
import Contact from "./Routes/Contact.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/dentist/:id" element={<Detail/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/favs" element={<Favs/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
