import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Form from './components/form';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Main from './components/main';
import Appointment from './components/appointment';
import AddAppointment from './components/addAppointment';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/addSlot" element={<Form />} />
        <Route path="/addAppointment" element={<AddAppointment />} />
      </Routes> 
    </BrowserRouter>

    {/* <Main /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
