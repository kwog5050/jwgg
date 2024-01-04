import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "components/header/Header";
import Main from "pages/main/Main";
import Search from "pages/search/Search";

import 'assets/styles/font.css'
import 'assets/styles/common.css'

function App() {
  const [userProfile, setUserProfile] = useState(null);
  const [more, setMore] = useState(5);

  return (
    <div className="App">
      <Header setUserProfile={setUserProfile} setMore={setMore}></Header>
      <Routes>
        {
          userProfile === null
            ? <Route path="/" element={<Search setUserProfile={setUserProfile} setMore={setMore} />}></Route>
            : <Route path="/" element={<Main userProfile={userProfile} more={more} setMore={setMore} />}></Route>
        }
      </Routes>
    </div>
  );
}

export default App;
