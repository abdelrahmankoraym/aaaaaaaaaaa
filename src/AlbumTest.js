/*// Import libraries for making a component
import React from 'react';
import {View} from 'react-native';
import {Header} from './src/components/Header';
import {List} from './src/components/List'
//import {AppointmentsReducer} from './src/reducers/AppointmentsReducer'


// Make a component

const App = () => (
    <View>
      <Header headerText={'Appointments'}/>
      <List/>
    </View>

  );

  export default App;


// Make the component available to other parts of the app
*/

import React from 'react';
import { View} from 'react-native';
import {Header} from './components/Header';
import SoloList from './components/SoloList';
//import {AppointmentsReducer} from './src/reducers/AppointmentsReducer'


// Make a component

const AlbumTest = () => (
    <View style={{ flex:1 }}>
      <Header headerText={'المواعيد'}/>
      <SoloList/>
    </View>
  );


  export default AlbumTest;


// Make the component available to other parts of the app






