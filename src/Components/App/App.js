import React from 'react';
import './App.css';
import Header from '../Header/Header';
import AddTodoForm from '../AddTodoForm/AddTodoForm';
import TodosList from '../TodosList/TodosList';
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
            <TodosList />
            <TodosOptions />
          </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
