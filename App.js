import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./components/Home";
import DetailsScreen from "./components/details";

const AppStackNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Feed: DetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "Black",
      },
    },
  }
);

const AppContainer = createAppContainer(AppStackNavigator);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
