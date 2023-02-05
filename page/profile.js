import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { Component } from "react";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from "@expo-google-fonts/dm-sans";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Card } from "react-native-paper";

export default class Profile extends Component {
  

  state = {
    username: localStorage.getItem("pass_username"),
    HP: localStorage.getItem("pass_HP"),
    email: localStorage.getItem("pass_email"),
    address: localStorage.getItem("pass_address"),
  };

  // let [fontsLoaded] = useFonts({
  //   DMSans_400Regular,
  //   DMSans_400Regular_Italic,
  //   DMSans_500Medium,
  //   DMSans_500Medium_Italic,
  //   DMSans_700Bold,
  //   DMSans_700Bold_Italic,
  // });

 

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              alignSelf: "center",
              justifyContent: "center",
              paddingTop: 20,
              paddingBottom: 10,
              backgroundColor: "white",
              height: "6%",
              width: "15%",
              marginTop: 60,
              borderRadius: 180,
              marginBottom: 40
            }}
          >
           <Image source={require("../assets/logo_fnf.png")}
            style={{borderRadius:90, marginBottom:10,height:80 , width: 80, alignSelf:"center"}}
            >

           </Image>
          </View>

          <View
            style={{
              flex: 1,
              width: "95%",
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            {/* Data untuk profil yang dipakai saat login */}
            <Card
              style={{
                marginTop: 15,
                backgroundColor: "white",
                height: 150,
                justifyContent: "center",
                flexDirection: "column",
                borderColor: "#615d5d", borderLeftWidth: 2, borderTopWidth:2, borderRightWidth:2 , borderBottomWidth: 2 
              }}
            >
              <View>
                <Text style={styles.tulisan1}> Username
                  <Text style={styles.tulisan1}> : </Text>
                  <Text style={styles.tulisan2}> {this.state.username}</Text>  
                </Text>
              </View>
              <View>
                <Text style={styles.tulisan1}> Nomor hp
                  <Text style={styles.tulisan1}> : </Text>
                  <Text style={styles.tulisan2}> {this.state.HP}</Text>  
                </Text>
              </View>
              <View>
                <Text style={styles.tulisan1}> Alamat
                  <Text style={styles.tulisan1}> : </Text>
                  <Text style={styles.tulisan2}> {this.state.address}</Text>  
                </Text>
              </View>
              <View>
                <Text style={styles.tulisan1}> E-mail
                  <Text style={styles.tulisan1}> : </Text>
                  <Text style={styles.tulisan2}> {this.state.email}</Text>  
                </Text>
              </View>
            </Card>
          </View>
          {/* tombol untuk logout */}
          <View style={styles.loginButtonSection}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                  this.props.navigation.navigate("Login");
                }}
              >
                <Text style={styles.Text}> Logout </Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  }
}

// style yang digunakan
const styles = StyleSheet.create({
  kart: {
    flex: 1,
    width: "90%",
  },
  tulisan1: {
    fontSize: 16,
    paddingLeft: 30,
  },
  loginButtonSection: {
    width: "25%",
    marginBottom: 20,
    alignSelf: "center"
  },
  loginButton: {
    backgroundColor: "#7a1a1a",
    color: "white",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 150,
  },
  Text: {
    fontFamily: "Poppins-SemiBold",
    color: "white"
  },
  tulisan1: {
    fontSize: 18,
    paddingLeft: 30,
    fontFamily: "Poppins-SemiBold",
    color: "#ab3629"
  },
  tulisan2: {
    fontSize: 18,
    paddingLeft: 30,
    marginTop: 5,
    fontFamily: "Poppins-SemiBold",
    color: "black"
  },

});
