import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense } from 'react';
import HomePage from './Component/HomePage';
import ProductList from './Component/ProductPage';
import AboutPage from './Component/AboutPage';
import SigninPage from './Component/SigninPage';
import CartPage from './Component/CartPage';
import PaymentPage from './Component/PaymentPage';
import ContactPage from './Component/ContactPage';
import SpecialPage from './Component/SpecialPage';
import LaptopList from './Component/LaptopPage';
import MouseList from './Component/MousePage';
import SpeakerList from './Component/SpeakerPage';
import HeadphoneList from './Component/HeadphonePage';
//import KeyboardPage from './Component/KeyboardPage';
import MousePage from './Component/MousePage';
import SignupPage from './Component/SignupPage';
import ProductDetail from './Component/ProductDetail'


const AppRouter = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        
        <Route path="/san-pham" component={ProductList}/>
        <Route path="/chi-tiet/:idProduct" component={ProductDetail}/>
        <Route path="/laptop" component={LaptopList}/>
        <Route path="/chuot" component={MouseList}/>
        <Route path="/tai-nghe" component={HeadphoneList}/>
        <Route path="/loa" component={SpeakerList}/>
        <Route path="/chuot" component={MousePage}/>
        <Route path="/gioi-thieu" component={AboutPage}/>
        <Route path="/dang-nhap" component={SigninPage}/>
        <Route path="/gio-hang" component={CartPage}/>
        <Route path="/thanh-toan" component={PaymentPage}/>
        <Route path="/lien-he" component={ContactPage}/>
        <Route path="/khuyen-mai" component={SpecialPage}/>
        <Route path="/dang-ky" component={SignupPage}/>
      </Switch>
    </Suspense>
  </Router>
);
export default AppRouter;