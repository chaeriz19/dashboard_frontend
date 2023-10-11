import * as React from 'react';
import { View, Text } from 'react-native';
import Welcome from './pages/welcome.js';
import Admin from './pages/admin.js';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/authentication/login.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="admin" element={<Admin />} />
          <Route path="home" element={<Welcome />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;