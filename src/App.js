import React from 'react';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Meals from './pages/Meals';
import Favorites from './components/Favorites';
import Portal from './components/Portal';
import MealDetail from './pages/MealDetail';
// import Search from './components/Search';
import store from './store'
import {Provider} from 'react-redux';
import { Switch, Route, useLocation } from 'react-router';
import './App.scss';

function App() {

  let location = useLocation()
  // console.log(location)

  let background = location.state && location.state.background;

  return (
    <Provider store={store}>
      <Navbar/>
      {/* <Search/> */}
      <Switch location={background || location}>
        <Route exact path='/' children={<Home/>}/>
        <Route exact path='/meals' children={<Meals/>}/>
        <Route exact path='/meals/:mealId' children={<MealDetail/>}/>
        <Route export path='/favorites' children={<Favorites/>}/>
      </Switch>
			{background && <Route path='/meals/:mealId' children={<Portal />} />}
    </Provider>
  );
}

export default App;
