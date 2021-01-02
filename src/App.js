import Component1 from './components/Component1';
import ComponentA from './components/ComponentA';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <h1>App Component</h1>
      <Component1 />
      <ComponentA />
    </Provider>
  );
}

export default App;
