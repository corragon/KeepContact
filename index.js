import { AppRegistry } from 'react-native';
import App from './App';
AppRegistry.registerComponent('KeepContact', () => App);
//Hack to silence bug with React Native/React Navigation
// https://github.com/react-navigation/react-navigation/issues/3956
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);