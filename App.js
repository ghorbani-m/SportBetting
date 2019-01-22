import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import History from "./screens/history"
import {
  DefaultTheme,
  Colors,
  Provider as PaperProvider
} from "react-native-paper";
import theme from "./theme/paperTheme"
export default class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <History/>
      </PaperProvider>
    );
  }
}

