import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Kategori from './Kategori'
import IkanLaut from './IkanLaut'
import IkanTawar from './IkanTawar'



const Routing = () => {
    return (
      <div>
        <Router>
            <Routes>
                  <Route exact path="/" element = {<Kategori />} />
                  <Route exact path="/IkanLaut" element = {<IkanLaut />} />
                  <Route exact path="/IkanTawar" element = {<IkanTawar />} />
                  </Routes>
            </Router>
        </div>
    )
}

export default Routing;