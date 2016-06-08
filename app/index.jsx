/////////////////////////////////////////////////
// Matt's single page app that was written in: //
//          ______                _            //
//         | ___ \              | |            //
//         | |_/ /___  __ _  ___| |_           //
//         |    // _ \/ _` |/ __| __|          //
//         | |\ \  __/ (_| | (__| |_           //
//         \_| \_\___|\__,_|\___|\__|.         //
//                                             //
//                        You should hire him. //
/////////////////////////////////////////////////

import React            from 'react';
import ReactDOM         from 'react-dom';

<<<<<<< HEAD
import todoReducer      from './reducers/TodoApp/todoReducer';
=======
>>>>>>> master
import App              from './components/App';

import './styles/main.css';

<<<<<<< HEAD
let store = createStore(todoReducer);

=======
>>>>>>> master
ReactDOM.render(
  <App />,
  document.getElementById('app')
);
