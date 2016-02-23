import React from 'react';
import AddTodo from '../containers/Todo/AddTodo.jsx';
import VisibleTodoList from '../containers/Todo/VisibleTodoList';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const App = () => (
    <div>
        <Header />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;