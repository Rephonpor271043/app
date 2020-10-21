import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAZOKVZSDAAEj4IPl192dHlxfJE7XYn7_A",
  authDomain: "app-por-5c7f4.firebaseapp.com",
  databaseURL: "https://app-por-5c7f4.firebaseio.com",
  projectId: "app-por-5c7f4",
  storageBucket: "app-por-5c7f4.appspot.com",
  messagingSenderId: "939774283623",
  appId: "1:939774283623:web:e6bc134da87ff0eb55a9c2",
  measurementId: "G-75WL7RH1HV",
};

firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
  createStackNavigator(
    {
      Loading: LoginScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading",
    }
  )
);
