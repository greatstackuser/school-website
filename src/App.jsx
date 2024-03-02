import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import OurSchool from './Pages/About/OurSchool'
import OurTeam from './Pages/About/OurTeam'
import OurPhilosophy from './Pages/About/OurPhilosophy'
import OurCurriculum from './Pages/About/OurCurriculum'
import PreSchool from './Pages/Program/PreSchool'
import SummerCamp from './Pages/Program/SummerCamp'
import ChildCare from './Pages/Program/ChildCare'

const App = () => {


  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about'>
          <Route path='school' element={<OurSchool/>} />
          <Route path='team' element={<OurTeam/>} />
          <Route path='philosophy' element={<OurPhilosophy/>} />
          <Route path='curriculum' element={<OurCurriculum/>} />
        </Route>
        <Route path='program'>
          <Route path='preschool' element={<PreSchool/>} />
          <Route path='summercamp' element={<SummerCamp/>} />
          <Route path='childcare' element={<ChildCare/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App