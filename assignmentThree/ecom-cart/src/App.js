import './App.css';
import Navbar from './Components/Navbar';
import './Assets/styles/output.css';
import Products from './Components/Products';
import { Provider } from 'react-redux';
import store from './redux/store/store';

function App() {
  return (
    <>
      <Provider store={store} >
        <Navbar/>
        <Products/>
      </Provider>
    </>
  );
}

export default App;
