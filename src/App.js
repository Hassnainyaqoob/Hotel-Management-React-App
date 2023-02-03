import { Provider } from 'react-redux';
import './App.css';
import store from './config/redux/store';
import Routerings from './config/router/routers';

function App() {
  return (

    <>

      <Provider store={store}>
        <Routerings />
      </Provider>


    </>

  );
}

export default App;
