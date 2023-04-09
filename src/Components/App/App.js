import React, { useEffect } from 'react';
// Styles
import './App.css';
// Components
import Header from '../Header/Header';
import AddTodoForm from '../AddTodoForm/AddTodoForm';
import TodosList from '../TodosList/TodosList';
import TodosOptions from '../TodosOptions/TodosOptions';
import Footer from '../Footer/Footer';
// Functions
import { useTheme } from '../../ThemeContext';
import { ThemeProvider } from '../../ThemeContext';

export default function App() {

  return (
    <ThemeProvider>
      <div id="container">
        <Header />
          <main>
            <AddTodoForm />
            <TodosList />
            <TodosOptions />
          </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
