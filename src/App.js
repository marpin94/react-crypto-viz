import './App.css';
import { useState, useEffect } from 'react';
import { Nav } from './components/Nav';
import {HomeDisplay} from './components/HomeDisplay'
import { Detail } from './components/Detail';
import {Routes, Route} from 'react-router-dom'


//DUMMY Data to limit api calls
import {data} from './TestData/Data'

function App() {

  const [coinData, setCoinData] = useState([])

  const getData = async () => {
    // const response = await fetch('http://localhost:5000/Crypto');
    // const body = await response.json();

    // setCoinData(body.data)
    setCoinData(data)
  }

  useEffect(() => {
      getData();
  }, [])

 
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path='/' element = {<HomeDisplay coinData={coinData} />} /> 
        <Route path ='/detail/:id' element={<Detail coinData={coinData} />}/>
  
      </Routes>
    </div>
  );
}

export default App;
