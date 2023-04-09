import React, { useEffect } from 'react';
// Styles
import './App.css';
// Components
import Header from '../Header/Header';
import AddTodoForm from '../AddTodoForm/AddTodoForm';
import Todos from '../Todos/Todos';
import TodosOptions from '../TodosOptions/TodosOptions';
import Footer from '../Footer/Footer';
import { ThemeProvider } from '../../ThemeContext';

export default function App() {

  return (
    <ThemeProvider>
      <div id="container">
        <Header />
        <main>
          <AddTodoForm />
          <Todos />
          <TodosOptions />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
