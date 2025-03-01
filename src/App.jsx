import React from "react";
 

import "./styles/main.css";
import { createBrowserRouter } from "react-router-dom";
import { BrowserRouter,Routes,Route } from "react-router"
import { lazy } from "react";

const Welcome = lazy(() => import ("./pages/Welcome"));
const StepOne = lazy(() => import ("./pages/StepOne"));
const StepTwo = lazy(() => import ("./pages/StepTwo"));
const StepThree = lazy(() => import ("./pages/StepThree"));
const StepFour = lazy (() => import ("./pages/StepFour"));
const Thanks = lazy (() => import ("./pages/Thanks"));
const App = () => {
  // const router = createBrowserRouter ([
  //   {
  //     path : "/",
  //     element : <Welcome/>
  //   }  ,
  //   {
  //     path : "/step-one",
  //     element : <StepOne/>
  //   }  ,
  //   {
  //     path : "/step-two",
  //     element : <StepTwo/>
  //   } ,
  //   {
  //     path : "/step-three",
  //     element : <StepThree/>
  //   } ,
  //   {
  //     path : "/step-four",
  //     element : <StepFour/>
  //   } ,
  //   {
  //     path : "/thanks",
  //     element : <Thanks/>
  //   } 
  // ])
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Welcome/>} /> 
      <Route path = "/step-one" element = {<StepOne/>} /> 
      <Route path = "/step-two" element = { <StepTwo/>}/>
      <Route path = "/step-three" element = {<StepThree/>}/> 
      <Route path = "/step-four" element = { <StepFour/>}/>
      <Route path = "/thanks" element = {<Thanks/>}/>
    </Routes>
    </BrowserRouter>
     
   
  );
};

export default App;
