
import { Route, Switch } from 'react-router-dom';
import { DataProvider } from './components/DataProvider';
// import './App.css';
import Header from './components/Header';
import Login from './features/Auth/components/Login';
import Cart from './features/Cart';
import Products from './features/Products';
import Detail from './features/Products/components/DetailProducts';


function App() {
  return (
   <DataProvider>
      <div className="App">
     <Header />
     <Switch>
      <Route path="/product" component={Products} exact/>
      <Route path="/product/login" component={Login} exact/>
      <Route path="/product/:id" component={Detail} exact />
      <Route path="/cart" component={Cart} exact />
      </Switch>
    </div>
   </DataProvider>
  );
}

export default App;
