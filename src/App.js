import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import QuizApp from './components/QuizApp';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <QuizApp />
    </div>
  </Provider>
);

export default App;
