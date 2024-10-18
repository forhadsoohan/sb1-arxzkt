import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Moon, Sun, User, HelpCircle, Settings, Bell } from 'lucide-react'
import Home from './pages/Home'
import Patients from './pages/Patients'
import Records from './pages/Records'
import Analytics from './pages/Analytics'

export default function ScribaApp() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <Router>
      <div className={`min-h-screen font-sans ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
        <header className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <Link to="/" className="flex items-center space-x-2">
                  <img src="/logo.png" alt="Scriba AI Logo" className="w-10 h-10" />
                  <h1 className="text-2xl font-bold text-blue-600">Scriba AI</h1>
                </Link>
                <nav className="hidden md:flex space-x-6">
                  <Link to="/" className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                    Home
                  </Link>
                  <Link to="/patients" className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                    Patients
                  </Link>
                  <Link to="/records" className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                    Records
                  </Link>
                  <Link to="/analytics" className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}>
                    Analytics
                  </Link>
                </nav>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="hidden md:flex">
                  <HelpCircle className="w-5 h-5 mr-2" />
                  Help
                </Button>
                <Button variant="ghost" size="sm" className="hidden md:flex">
                  <Settings className="w-5 h-5 mr-2" />
                  Settings
                </Button>
                <Button variant="ghost" size="sm" className="hidden md:flex">
                  <User className="w-5 h-5 mr-2" />
                  Dr. Smith
                </Button>
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="sr-only">Notifications</span>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
                </Button>
                <div className="flex items-center space-x-2">
                  <Sun className="w-4 h-4 text-gray-500" />
                  <Switch checked={isDarkMode} onCheckedChange={setIsDarkMode} />
                  <Moon className="w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/patients" element={<Patients isDarkMode={isDarkMode} />} />
            <Route path="/records" element={<Records isDarkMode={isDarkMode} />} />
            <Route path="/analytics" element={<Analytics isDarkMode={isDarkMode} />} />
          </Routes>
        </main>

        <footer className={`mt-12 py-6 ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'} border-t`}>
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>&copy; 2023 Scriba AI. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end items-center space-x-4">
              <Button variant="ghost" size="sm" className={`${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                Language
              </Button>
              <a href="#" className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} hover:underline`}>Privacy Policy</a>
              <a href="#" className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} hover:underline`}>Terms of Service</a>
              <a href="#" className={`text-sm ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} hover:underline`}>Contact Us</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}