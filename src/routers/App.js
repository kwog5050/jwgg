import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "components/header/Header";
import Main from "pages/main/Main";

import 'assets/styles/font.css'
import 'assets/styles/common.css'

function App() {
  const [userProfile, setUserProfile] = useState();

  return (
    <div className="App">
      <Header setUserProfile={setUserProfile}></Header>
      <Routes>
        <Route path="/" element={<Main userProfile={userProfile} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
