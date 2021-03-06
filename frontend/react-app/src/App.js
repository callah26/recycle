// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import FileUpload from "./components/file-upload/file-upload.component";
import axios from 'axios'

function App() {
  const [getMessage, setGetMessage] = useState({})

  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: []
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
  };


  useEffect(() => {
    axios.get('http://localhost:5000/flask/test').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
      console.log("Error: Flask server not reached.");
    })

  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <h1> LMPSU Conference Ticket Count </h1>
        </div>
      </header>

      <div className="Home-page">
        <div id="home-main-text">
          <div id="home-main-text-bottom">
            <p>
              Currently there are x tickets sold!
            </p>
          </div>
        </div>
    </div>
  </div>
  );
}

export default App;
