import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MiFieldSet from './MiFieldSet.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App /> */}
    <MiFieldSet titulo="Datos personales" text1="Nombre: " text2="Password: "/>
    <MiFieldSet titulo="Datos personales" text1="Nombre: " text2="Password: "/>
    <input type="submit" value="Enviar datos" />
  </React.StrictMode>,
)
