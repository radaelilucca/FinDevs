import React from 'react';
import Routes from './src/Routes'
import {StatusBar, YellowBox} from 'react-native'

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])
 
export default function App() {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='#8E4DFF'/>
    <Routes />
    </>
   );
}


