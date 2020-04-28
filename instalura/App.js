import React from 'react';
import Login from "./src/views/login/Login";
import {createStackNavigator} from "react-navigation-stack";
import Feed from "./src/views/feed/Feed";
import {createAppContainer} from "react-navigation";

// Mapa de config de rotas
const navigator = createStackNavigator(
  {
    Login: {screen: Login},
    Feed: {screen: Feed},
  }
);

const AppContainer = createAppContainer(navigator);

const App = () => {
  return (
    <AppContainer/>
  )
};

export default App;
