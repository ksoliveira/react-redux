import './App.css';
import Sidebar from './components/Sidebar';
import Video from './components/Video';


import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}

export default App;
