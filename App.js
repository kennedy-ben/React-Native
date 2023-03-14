import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import  LoginComponent  from "./components/login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./components/dashboard";
import Menu from "./components/menu";
import SignupComponent from "./components/signup";


// const App = () => {
//   return (
//     <View>
//       <Menu />
//     </View>
//   );
// };



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={LoginComponent}/>
        <Stack.Screen name="Signup" component={SignupComponent}/>
        <Stack.Screen name="Dashboard" component={Dashboard}/>
        <Stack.Screen name="Menu" component={Menu}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});