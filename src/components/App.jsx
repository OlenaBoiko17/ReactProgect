import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from '../modules/Navbar/Navbar';
import Main from '../modules/Main/Main';
import Footer from '../modules/Footer/Footer';
import Payment from '../modules/Payment/Payment';


import '../styles/styles.scss'


export const App = () => {
  return (
    <BrowserRouter basename="/ReactProgect" >
    <Navbar title="ШКОЛА испанского ЯЗЫКА  «ЛаВИта» в петербурге"  />
  <Routes>
    <Route path="/"  element={<Main/> }  />
    <Route path="/payment"  element={<Payment />} />
  </Routes>
  <Footer />
</BrowserRouter >
  );
};
