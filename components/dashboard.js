import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";

// export default function Dashboard(props) {
//   const onPress = () => {
//     props.navigation.navigate("Menu");
//   }};
  

    
    export default function ProfileScreen({ navigation }) {
      const onPress = () => {
        navigation.navigate("Menu");
      }
      return (
        <ImageBackground source={require('../assets/kk.webp')} style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Menu</Text>
          </TouchableOpacity>
    
          <View style={styles.detailsContainer}>
            <Text style={styles.welcomeText}>
              Welcome Stephen Amimo
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
        </ImageBackground>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#000000',
        fontSize:18,
        padding: 20,
        marginTop: 40,
        alignItems: 'center',
        paddingVertical: 15,
      },
      // button: {
      //   backgroundColor: '#5f9ea0',
      // Menu syles
      //   padding: 10,
      //   borderRadius: 2,
      //   alignSelf: 'flex-start',
      //   borderBottomWidth: 5,
      // },
      // buttonText: {// bold text
      //   color: '#fff',
      //   fontSize: 18,
      //   fontWeight: 'bold',
      //   paddingHorizontal: 10,
      //   backgroundColor: '#fffaf0`',
      // },
      detailsContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: 'cover',
      },
      welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
      },
      // detailsText: {
      //   marginTop: 10,
      //   fontSize: 50,
      //   fontWeight: 'bold',
      // },
      detailsList: {
        marginTop: 20,
       fontSize: 20,
        borderRadius: 20,
        backgroundColor: `#fffaf0`,
        padding: 80,
      },
      detailItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
        
      },
        
      },
    )



