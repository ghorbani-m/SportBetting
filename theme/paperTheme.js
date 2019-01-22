import { Platform } from 'react-native';
import { DefaultTheme,Colors } from "react-native-paper";

export default {
    ...DefaultTheme,
    colors:{
      ...DefaultTheme.colors,
      primary:Colors.blue600,
      background:"white",
    }
  };