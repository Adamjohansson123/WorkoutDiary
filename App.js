import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import StartPage from './Screens/StartPage'
import MainPage from './Screens/MainPage'
import DetailsPage from './Screens/DetailsPage'
import AddPage from './Screens/AddPage'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import eventsReducer  from './Store/events-reducer'


const Stack=createStackNavigator();
const rootReducer=combineReducers({
  events:eventsReducer
})
const store=createStore(rootReducer, applyMiddleware(ReduxThunk))

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Start'
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#F2E4BF',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
        },
      }}>
        <Stack.Screen name = "Start" component={StartPage} options={{title: ''}}/>
        <Stack.Screen name = "Main" component={MainPage} options={{title: 'Träningsdagbok'}} />
        <Stack.Screen name = "Details" component={DetailsPage} options={{title: 'Information'}} />
        <Stack.Screen name = "Add" component={AddPage} options={{title: 'Ny händelse'}} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
};
