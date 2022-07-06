import { useContext } from 'react';
import './App.css';
import { Body } from './component/Body';
import Navbar from './component/Navbar';
import SideBar from './component/SideBar';
import { ThemeContext } from './context/ThemeContex';

function App() {
    
  const {isLight} = useContext(ThemeContext)
  return (
    <div className={`App ${isLight ? "light" : "dark"}`}>
        <SideBar/>
     <div style={{width:"100%"}}>
     <Navbar/>
     <Body/>
     </div>
    </div>
  );
}

export default App;
