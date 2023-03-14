import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

// export default function Dashboard(props) {
//   const onPress = () => {
//     props.navigation.navigate("Menu");
//   };
//   return (

    
    export default function ProfileScreen({ onPress }) {
      return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>MENU</Text>
          </TouchableOpacity>
    
          <View style={styles.detailsContainer}>
            <Text style={styles.welcomeText}>
              Welcome Kennedy Makuani (Ken Ben)
            </Text>
    
            <Text style={styles.detailsText}>
              Your profile details are below:
            </Text>
    
            <View style={styles.detailsList}>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Age:</Text>
                <Text style={styles.detailValue}>50</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Gender:</Text>
                <Text style={styles.detailValue}>male</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Email:</Text>
                <Text style={styles.detailValue}>atuonyo@sohu.com</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Phone:</Text>
                <Text style={styles.detailValue}>+637916758914</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Birth Date:</Text>
                <Text style={styles.detailValue}>2000-12-25</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Blood Group:</Text>
                <Text style={styles.detailValue}>A-</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Height:</Text>
                <Text style={styles.detailValue}>189</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Weight:</Text>
                <Text style={styles.detailValue}>75.4</Text>
              </View>
              <View style={styles.detailItem}>
                <Text style={styles.detailLabel}>Eye Color:</Text>
                <Text style={styles.detailValue}>Green</Text>
              </View>
            </View>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
      },
      button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-start',
      },
      buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
      },
      detailsContainer: {
        marginTop: 20,
        alignItems: 'center',
      },
      welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007AFF',
      },
      detailsText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
      },
      detailsList: {
        marginTop: 10,
        backgroundColor: '#F2F2F2',
        borderRadius: 5,
        padding: 10,
      },
      detailItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,},
      },
    )



