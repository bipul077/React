import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {
  const pageSize=5;//how many news to show in one page(it will show 15 news on a page)
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  
    // console.log(apiKey);
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apikey={apiKey} key="general" pageSize={pageSize} country="in" category="general"/>}/>
            {/* key is used for rerendering or remounting the component */}
            <Route exact path="/business" element={<News setProgress={setProgress} apikey={apiKey} key="business" pageSize={pageSize} country="in" category="business"/>}/>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apikey={apiKey} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}/>
            <Route exact path="/health" element={<News setProgress={setProgress} apikey={apiKey} key="health" pageSize={pageSize} country="in" category="health"/>}/>
            <Route exact path="/science" element={<News setProgress={setProgress} apikey={apiKey} key="science" pageSize={pageSize} country="in" category="science"/>}/>
            <Route exact path="/sports" element={<News setProgress={setProgress} apikey={apiKey} key="sports" pageSize={pageSize} country="in" category="sports"/>}/>
            <Route exact path="/technology" element={<News setProgress={setProgress} apikey={apiKey} key="technology" pageSize={pageSize} country="in" category="technology"/>}/>
          </Routes>
      </Router>
        {/* <News setProgress={setProgress}  pageSize={pageSize} country="in" category="sports" /> */}
      </div>
    )

}

export default App;