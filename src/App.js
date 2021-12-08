import './App.css';


import { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import {HomeDisplay} from './components/HomeDisplay'
import { Detail } from './components/Detail';
import {Routes, Route} from 'react-router-dom'




function App() {

  const [coinData, setCoinData] = useState([])

  const getData = async (limit) => {
    const response = await fetch(`http://localhost:5000/Crypto/${limit}`);
    const body = await response.json();

    setCoinData(body.data)
    
  }


  useEffect(() => {
      getData(10);
      
  }, [])

 
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path='/' element = {<HomeDisplay coinData={coinData} getData={getData}/>} /> 
        <Route path ='/detail/:id' element={<Detail coinData={coinData} />}/>
  
      </Routes>
    </div>
  );
}

export default App;
