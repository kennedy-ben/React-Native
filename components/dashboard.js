import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Dashboard(props) {
  const onPress = () => {
    props.navigation.navigate("Menu");
  };
  return (
    <View>
      {/* <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>MENU</Text>
      </TouchableOpacity> */}
      <Text> {"\n"}
      <Text>Welocome Stephen Amimo</Text>
        <Text>{"\n"}Your profile details is below:</Text>
        <Text>{"\n"}Age: 50</Text>
        <Text>{"\n"}Gennder: male</Text>
        <Text>{"\n"}Email:atuonyo@sohu.com</Text>
        <Text>{"\n"}Phone:+637916758914</Text>
        <Text>{"\n"}Birth Date:2000-12-25</Text>
        <Text>{"\n"}Blood Group:A-</Text>
        <Text>{"\n"}Height:189</Text>
        <Text>{"\n"}Weight:75.4</Text>
        <Text> {"\n"} Eye Color:Green</Text> 
      </Text>
     
    </View>
  );
}

const styles = StyleSheet.create({});

