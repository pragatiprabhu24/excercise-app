import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExcerciseDetail from './pages/ExcerciseDetail'
import ExercisePage from './pages/ExercisePage'


const App = () => {
    return (
        <>
            <Box width='400px' sx={{ width: { xl: '1488px' } }} m='auto'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/excercise/:id' element={<ExcerciseDetail />} />
                    <Route path='/excercises' element={<ExercisePage/>} />
                </Routes>
                <Footer />
            </Box>
        </>
    )
}

export default App
