import "react-native-gesture-handler";

// Import React and Component
import React from "react";

// Import Navigators from React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Import Screens
import Login from './Screens/Login'
import Register from './Screens/Register'
import Welcome from './Screens/Welcome'
import DonarInfo from "./Screens/DonarInfo";

const Stack = createStackNavigator();


const navigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          {/* SplashScreen which will come once for 2 Seconds */}
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            // Hiding header for Splash Screen
            options={{
                title: "Welcome", //Set Header Title
                headerStyle: {
                  backgroundColor: "red", //Set Header color
                },
                headerTintColor: "#fff", //Set Header text color
                headerTitleStyle: {
                  fontWeight: "bold", //Set Header text style
                },
              }}
          />
          {/* Auth Navigator which include Login Signup */}
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
                title: "Login", //Set Header Title
                headerStyle: {
                  backgroundColor: "red", //Set Header color
                },
                headerTintColor: "#fff", //Set Header text color
                headerTitleStyle: {
                  fontWeight: "bold", //Set Header text style
                },
              }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: "Register", //Set Header Title
              headerStyle: {
                backgroundColor: "red", //Set Header color
              },
              headerTintColor: "#fff", //Set Header text color
              headerTitleStyle: {
                fontWeight: "bold", //Set Header text style
              },
            }}
          />
           <Stack.Screen
          name="DonarInfo"
          component={DonarInfo}
          options={{
            title: "DonarInfo", //Set Header Title
            headerStyle: {
              backgroundColor: "red", //Set Header color
            },
            headerTintColor: "#fff", //Set Header text color
            headerTitleStyle: {
              fontWeight: "bold", //Set Header text style
            },
          }}
        />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default navigator;