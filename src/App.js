import './App.css'
import MainDash from './components/MainDash/MainDash';
import RightSide from './components/RightSide/RightSide';
import Sidebar from './components/Sidebar/Sidebar';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons, getTypes } from "./Redux/Actions/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons(649));
    dispatch(getTypes());
  }, [dispatch]);
  
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
  );
}

export default App;
