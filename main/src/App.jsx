import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';

import { setMenuItems } from './redux/actions';
import "./index.scss";
import Menu from "./Components/Menu";
import ViewPanel from "./Components/ViewPanel";
import Loader from "./Components/Loader";

const App = () => {
  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState(false);
  const [error, setError] = useState(null);
  const fetchMenuData = async () => {
    try {
      const response = await fetch('http://localhost:5000/menu.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      dispatch(setMenuItems(data));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenuData();

    const intervalId = setInterval(() => {
      fetchMenuData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) return <Loader/>;
  if (error) return <div>Error Fetching Menu Json Data: {error}</div>;

  return (
    <>
      <Menu />
      <ViewPanel/>
    </>
  );
};

export default App