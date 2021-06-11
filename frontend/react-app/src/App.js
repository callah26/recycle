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
        <h1> Recycle App </h1>
        </div>
      </header>

      <div className="Home-page">
        <div id="home-main-text"> 
          <div id="home-main-text-top">
            <p>
              Welcome to the future, in which
            </p>
          </div>
          <div id="home-main-text-bottom">
            <p>
              Powerful AI makes recycling easy
            </p>
          </div>
        </div>
      

        <div>
          <form onSubmit={handleSubmit} value="Analyze image">
            <FileUpload
              accept=".jpg,.png,.jpeg"
              // label="Profile Image(s)"
              multiple
              // updateFilesCb={updateUploadedFiles}
            />
          </form>
        </div>

    </div>
  </div>
  );
}

export default App;
