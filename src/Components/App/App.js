import React, { useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import AddTodoForm from '../AddTodoForm/AddTodoForm';
import TodosList from '../TodosList/TodosList';
import TodosOptions from '../TodosOptions/TodosOptions';
import Footer from '../Footer/Footer';
import { useTheme } from '../../ThemeContext';

export default function App() {
  const themeStyle = useTheme();
  
  useEffect(() => {
    document.body.classList.toggle(themeStyle);

    return () => document.body.classList.toggle(themeStyle);
  }, [themeStyle]);

  return (
      <div id="container">
        <Header />
          <main>
            <AddTodoForm />
            <TodosList />
            <TodosOptions />
          </main>
        <Footer />
      </div>
  )
}
