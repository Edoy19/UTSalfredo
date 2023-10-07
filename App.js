import * as React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  SearchScreen,
  VideoScreen,
  StoreScreen,
  ProfileScreen,
  EditProfileScreen,
  MessageScreen
} from './pages'

const Stack = createNativeStackNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle: {
        display: "none" 
      },
      }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
       
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
         
        }}/>
      <Tab.Screen name="Search" component={SearchScreen} options={{
      
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        
        }} />
      <Tab.Screen name="Video" component={VideoScreen} options={{
       
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="movie-play-outline" color={color} size={size} />
          ),
       
        }}/>
      <Tab.Screen name="Store" component={StoreScreen} options={{
      
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
     
        }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} 
            />
          ),
       
        }}/>
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen}  options={{ headerShown: false }}/>
        <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="Register"component={RegisterScreen}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;