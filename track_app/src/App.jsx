import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import ExpenseInput from './Components/ExpenseInput'
import ExpenseList from './Components/ExpenseList'

function App() {
  return (
    <div>
      <Header />
      <ExpenseInput />
      <ExpenseList />
    </div>
  )
}

export default App
