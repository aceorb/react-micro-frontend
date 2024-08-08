import React, { Suspense, useState, useEffect } from "react";
import {  Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { setMenuItems } from './redux/actions';

import "./index.scss";

import Menu from "./Components/Menu";
import ViewPanel from "./Components/ViewPanel";



const exampleMenuConfig = [
  {
    id: '1',
    label: 'Product 1',
    app:'product',
    component: 'ProductApp',
    version: 'v1',
  },
  {
    id: '2',
    label: 'Product 2',
    app:'product',
    component: 'ProductApp',
    version: 'v2',
  },
  {
    id: '3',
    label: 'RegistrationForm 1',
    app:'product',
    component: 'RegistrationFormApp',
    version: 'v1',
  },
  {
    id: '4',
    label: 'RegistrationForm 3',
    app:'product',
    component: 'RegistrationFormApp',
    version: 'v3',
  },
  {
    label: 'FlowDiagram',
    app:'flowdiagram',
    component: 'FlowDiagramApp',
  }
];

const App = () => {
  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState(false);

  useEffect(() => {
    // Fetch or use configuration JSON here
    // For now, using static example data
    dispatch(setMenuItems(exampleMenuConfig));
  }, [dispatch]);

  return (
    <>
      <Menu />
      <ViewPanel/>
    </>
  );
};

export default App