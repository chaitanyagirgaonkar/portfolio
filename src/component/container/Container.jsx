import React, { useState, useEffect } from 'react'
import Navbar from '../Header/Navbar'
import Home from '../Home/Home'
import About from '../About/About'
import Skill from '../Skill/Skill'
import Project from '../Project'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { ThemeProvider } from '../../context/Theme.js'
function Container() {

    const [themeMode, setThemeMode] = useState("light")

    const lightMode = () => {
        setThemeMode("light")
    }
    const darkMode = () => {
        setThemeMode("dark")
    }

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])
    return (
        <ThemeProvider value={{ themeMode, lightMode, darkMode }} >


            <Navbar />
            <Home />
            <About />
            <Skill />
            <Project />
            <Contact />
            <Footer />

        </ThemeProvider>
    )
}

export default Container