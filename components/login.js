import {
  View,
  Text,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

export const LoginComponent= (props) => {
  const onPress = () => {
    props.navigation.navigate('Dashboard')
  };

  return (
    <View style={styles.wrapper}>
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>LOG IN</Text>
      </TouchableOpacity>
      
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "100%",
  },
  wrapper: {
    width: "70%",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});
