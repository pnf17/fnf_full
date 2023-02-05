import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  Modal,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { firebase } from "./fetch.jsx";
import { SpeedDial } from "@rneui/themed";

class DaftarFranchise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      locations: [],
      selectedLocation: null,
      mapVisible: false,
    };
  }

  // function untuk mengambil data dari firebase
  componentDidMount() {
    const maplistRef = firebase.firestore().collection("franchise");
    maplistRef.onSnapshot((querySnapshot) => {
      const locations = [];
      querySnapshot.forEach((doc) => {
        const { username, nama, HP, Address, email, jam, gambar, longitude, latitude } = doc.data();
        locations.push({
          username,
          nama,
          HP,
          Address,
          email,
          jam,
          gambar,
          longitude,
          latitude
        });
      });
      this.setState({ locations });
    });
  }

  // function untuk pindah page
  handlePress = (item) => {
    console.log({ item });
    var username = item.username;
    var nama = item.nama;
    var Address = item.Address;
    var HP = item.HP;
    var email = item.email;
    var jam = item.jam;
    var gambar = item.gambar;
    var longitude = item.longitude;
    var latitude = item.latitude;

    this.props.navigation.navigate("Detail", {
      username,
      Address,
      HP,
      email,
      longitude, 
      latitude,
      jam
    });
  };

  render() {
    return (
      <SafeAreaView>
        <Text style={styles.sila}>LIST FRANCHISE</Text>
        <FlatList
          style={{ height: "100%" }}
          data={this.state.locations}
          numColumn={1}
          renderItem={({ item }) => (
            // card untuk pindah ke page detail
            <TouchableOpacity
              style={styles.container}
              onPress={() => {
                this.handlePress(item);
              }}
            >
              <View style={styles.innerContainer}>
              <View style={{ flexDirection: "row", alignSelf: "flex-start" }}>
                <Image
                      style={{ width: "45%", marginRight: 20,height: "80%", alignSelf: "flex-start" }}
                      source={{ uri: item.gambar }}
                  />
                <View style={{ flexDirection: "column", alignSelf: "center" }}>
                  <Text style={styles.itemText}>Nama : {item.nama}</Text>
                  <Text style={styles.itemText}>Alamat : {item.Address}</Text>
                  <Text style={styles.itemText}>email : {item.email}</Text>
                  <Text style={styles.itemText}>Jam   : {item.jam}</Text>
                  <Text style={styles.itemText}></Text>
                </View>
              </View>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
      </SafeAreaView>
    );
  }
}

// style yang digunakan
const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#615d5d",
    padding: 10,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
    marginLeft: "5%",
  },
  innerContainer: {
    alignItems: "flex-start",
    flexDirection: "column",
  },

  itemHeading: {
    fontWeight: "bold",
  },
  itemText: {
    fontWeight: "300",
    color: "white"
  },
  sila: {
    marginVertical: 15,
    fontWeight: "bold",
    color: "#7a1a1a",
    textAlign: "center",
    fontSize: 22,
    paddingLeft: 20,
    marginTop: 30,
  },
});

export default DaftarFranchise;
