import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import {useState} from 'react';

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

// import Landing from "views/Landing.js";
import Event from "views/Event.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import Home from "views/Home.js";
import Service from "views/Service.js";
import Contact from "views/Contact.js";
import Donate from "views/Donate.js";
import Donate_one from "views/Donate_one.js";
import Donate_monthly from "views/Donate_monthly.js";

// import Login from "views/auth/Login";

// const [token, setToken] = useState();
//       if (!token) {
//         return <Login setToken ={setToken}/>
//       }
ReactDOM.render(
  // const [token, setToken] = useState();
  <BrowserRouter>
    <Switch>
      
      {/* add routes with layouts */}
      <Route path="/auth" component={Auth} />
      <Route path="/admin" component={Admin} />
      
      {/* add routes without layouts */}
      <Route path="/home" exact component={Home} />
      <Route path="/event" exact component={Event} />
      <Route path="/service" exact component={Service} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/donate" exact component={Donate}/>
      <Route path="/donate/donate_one" exact component={Donate_one}/>
      <Route path="/donate/donate_month" exact component={Donate_monthly}/>
      <Route path="/profile" exact component={Profile} />
      <Route path="/" exact component={Index} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// const Index = () => {
//   return(
//     <>
//     <BrowserRouter>
//       <Switch>
//         {/* add routes with layouts */}
//         <Route path="/admin" element={<Admin/>} />
//         <Route path="/auth" element={<Auth/>}/>
//         {/* add routes without layouts */}
//         <Route path="/home" element={<Home/>}/>
//         <Route path="/event" element={<Event/>} />
//         {/* <Route path="/home" exact component={Home}/> */}
//         <Route path="/profile" element={<Profile/>} />
//         <Route path="/" element={<Index/>} />
//         {/* add redirect for first page */}
//         <Redirect from="*" to="/" />
//       </Switch>
//     </BrowserRouter>
//     </>
//   );
// };
// export default Index;
