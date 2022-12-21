import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import React,{useState} from 'react';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light');//whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled","success");
      document.title = 'Dark mode-enable';
      // setInterval(() => {
      //   document.title = 'Dark mode-enable';
      // }, 2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","warning");
      document.title = 'Light mode-enable'
      // setInterval(() => {
      //   document.title = 'Light mode-enable';
      // }, 1500);  
    }
  }
  
  
  return (
    <>
      
    {/* <Navbar title={3} aboutText="About TextUtils"/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
    <Alert alert={alert}/>   
    <div className="container my-3">
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}/>
        <Route exact path="/" element={<Textform showalert={showAlert} heading="Write Something" mode={mode}/>}/>
      </Routes>
    </div>
    </Router>
    
    </>
  );
}

export default App;
