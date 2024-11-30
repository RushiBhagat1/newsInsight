import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,  // Use Routes instead of Switch for React Router v6
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App =()=> {
 const pageSize = 5;
 const apiKey=process.env.REACT_APP_NEWS_API

  // Initializing the state properly
 const[progress, setProgress]= useState(0)

  

  
    return (
      <div>
        <Router>
          <Navbar />
          
          {/* LoadingBar to show progress */}
          <LoadingBar
            color='#f11946'
            height={5}
            progress={progress}
          />

          <Routes>
            {/* No need for 'exact' in React Router v6 */}
            
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="" pageSize={pageSize} q="trump" category="" />} />
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} q="trump" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} q="trump" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} q="trump" category="general" />} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} q="trump" category="science" />} />
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} q="trump" category="sports" />} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} q="trump" category="health" />} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} q="trump" category="technology" />} />
            <Route path="/war" element={<News setProgress={setProgress} apiKey={apiKey} key="war" pageSize={pageSize} q="trump" category="war" />} />
          </Routes>
        </Router>
      </div>
    );
  }

export default App;