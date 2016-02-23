import React from 'react';
import AddTodo from '../containers/Todo/AddTodo.jsx';
import VisibleTodoList from '../containers/Todo/VisibleTodoList';
import Footer from '../components/Footer/Footer.jsx';

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;