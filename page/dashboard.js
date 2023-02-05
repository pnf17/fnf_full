import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import React, { Component } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Card } from "react-native-paper";
import { SearchBar } from "@rneui/base";
import { useFonts } from "expo-font";
import MapView, { Marker } from "react-native-maps";
import { firebase } from "./fetch.jsx";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cari: "",
      username: localStorage.getItem("pass_username"),
      HP: localStorage.getItem("pass_HP"),
      email: localStorage.getItem("pass_email"),
      search: "",
    };
  }
  
  render() {
    return (
      <View>
        <SafeAreaView>
          <StatusBar />
          <ScrollView>
          <Text style={styles.title}>Dashboard admin</Text>
            <View style={{ flex: 1, marginTop: -5 }}>
              <View
                style={{
                  flex: 1,
                  paddingHorizontal: 20,
                  height: 500,
                  marginBottom: 40,
                }}
              >
                <View>
                  <Text style={styles.sila3}>Menu :</Text>

                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                >
                  <Card
                    style={{
                      marginTop: 15,
                      backgroundColor: "white",
                      height: "70%",
                      justifyContent: "center",
                      marginBottom: 15,
                      padding: 10,
                      marginRight: 20,
                      alignItems: "center",
                      flex: 1,
                      width: "70%",
                      marginHorizontal: 20,
                    }}
                  >
                    {/* button untuk ke page profil */}
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate("Profile");
                      }}
                    >
                      <Ionicons
                        name="person-sharp"
                        size={50}
                        color={'#7a1a1a'}
                        style={{ alignSelf: "center", marginBottom: 10 }}
                      ></Ionicons>
                      <Text style={styles.tulisan3}>Profile</Text>
                    </TouchableOpacity>
                  </Card>
                  <Card
                    style={{
                      marginTop: 15,
                      backgroundColor: "white",
                      height: "70%",
                      justifyContent: "center",
                      marginBottom: 15,
                      padding: 10,
                      marginRight: 20,
                      alignItems: "center",
                      flex: 1,
                      width: "70%",
                      marginHorizontal: 20,
                    }}
                  >
                    {/* button untuk ke page edit */}
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate("Update Franchise");
                      }}
                    >
                      <Ionicons
                        name="folder-outline"
                        size={50}
                        color={'#7a1a1a'}
                        style={{ alignSelf: "center", marginBottom: 10 }}
                      ></Ionicons>
                      <Text style={styles.tulisan3}>List Data</Text>
                    </TouchableOpacity>
                  </Card>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Card
                    style={{
                      backgroundColor: "white",
                      height: "70%",
                      justifyContent: "center",
                      marginBottom: 15,
                      padding: 10,
                      marginRight: 20,
                      alignItems: "center",
                      flex: 1,
                      width: "35%",
                      marginHorizontal: 20,
                      marginVertical: -25
                    }}
                  >
                    {/* button untuk add data franchise */}
                    <TouchableOpacity
                      onPress={() => {
                        this.props.navigation.navigate("Tambah");
                      }}
                    >
                      <Ionicons
                        name="add-circle-outline"
                        size={50}
                        color={'#7a1a1a'}
                        style={{ alignSelf: "center", marginBottom: 10 }}
                      ></Ionicons>
                      <Text style={styles.tulisan3}>Tambah Data</Text>
                    </TouchableOpacity>
                  </Card>
                </View>
              </View>
            </View>
          </ScrollView>
          <Card style={{height: "7%", width: "15%", alignSelf:"flex-end", marginEnd: 20, marginVertical: 60, borderRadius: 90,backgroundColor: "white"}}>
            {/* button untuk view map */}
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Lokasi");
              }}
            >
              <Ionicons
                name="compass-outline"
                size={50}
                color={'#7a1a1a'}
                style={{ alignSelf: "center", marginVertical: 1, marginLeft: 2}}
              ></Ionicons>
              <Text style={{marginLeft: 10, fontSize:16, fontWeight:"bold"}}>Maps</Text>
            </TouchableOpacity>
          </Card>
        </SafeAreaView>
      </View>
    );
  }
}

// style yang digunakan
const styles = StyleSheet.create({
  sila: {
    color: "#7a1a1a",
    fontSize: 22,
    paddingLeft: 20,
    fontFamily: "Poppins-SemiBold",
  },
  title: {
    marginVertical: 15,
    color: "#7a1a1a",
    fontSize: 22,
    paddingLeft: 20,
    fontFamily: "Poppins-SemiBold",
  },
  sila2: {
    fontWeight: "bold",
    color: "#7a1a1a",
    fontSize: 22,
    paddingLeft: 20,
    fontFamily: "Poppins-SemiBold",
  },
  sila3: {
    color: "#656565",
    fontSize: 22,
    paddingLeft: 20,
    fontFamily: "Poppins-SemiBold",
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems: "center",
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    marginVertical: 8,
    flexBasis: "47%",
    marginHorizontal: 5,
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: "center",
    borderColor: "#DCDCDC",
    borderWidth: 3,
  },
  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: "center",
    color: "#008080",
    fontWeight: "bold",
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: "center",
    color: "#696969",
  },
  about: {
    marginHorizontal: 10,
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  followButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  icon: {
    height: 20,
    width: 20,
  },
  container2: {
    width: "90%",
    backgroundColor: "#e5e5e5",
    padding: 10,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
    marginLeft: "5%",
  },
  innerContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  itemHeading: {
    fontWeight: "bold",
  },
  itemText: {
    fontWeight: "300",
  },
  tulisan3:{
    fontWeight: "bold",
    marginStart: 3,
    fontFamily: "Poppins-SemiBold",
  }
});
