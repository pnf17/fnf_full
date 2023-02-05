import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { firebase } from "./fetch.jsx";

class ListFranchise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      locations: [],
      selectedLocation: null,
      mapVisible: false,
    };
  }

  componentDidMount() {
    // get data dari firebase
    const maplistRef = firebase.firestore().collection("franchise");
    maplistRef.onSnapshot((querySnapshot) => {
      const locations = [];
      querySnapshot.forEach((doc) => {
        const { username, nama, HP, Address, email, longitude, latitude, jam } = doc.data();
        locations.push({
          username,
          nama,
          jam,
          HP,
          Address,
          email,
          longitude,
          latitude
        });
      });
      this.setState({ locations });
    });
  }

  handlePress = (item) => {
    console.log({ item });
    var username = item.username;
    var Address = item.Address;
    var jam = item.jam;
    var HP = item.HP;
    var email = item.email;
    var longitude = item.longitude;
    var latitude = item.latitude;

    // navigasi ke page edit franchise
    this.props.navigation.navigate("Edit Franchise", {
      username,
      Address,
      HP,
      email,
      jam,
      longitude, 
      latitude
    });
  };

  render() {
    return (
      <SafeAreaView>
        <Text style={styles.sila}>List :</Text>
        <FlatList
          style={{ height: "100%"}}
          data={this.state.locations}
          numColumn={1}
          renderItem={({ item }) => (
          <View
          style={{
            height: 200,
            width: 400
            }}
          >
            {/* box untuk pindah ke page edit */}
            <TouchableOpacity
              style={styles.container}
              onPress={() => {
                this.handlePress(item);
              }}
            >
              <View style={styles.container1}>
                <View style={styles.innerContainer}>
                  <Text style={styles.itemHeading}>Nama : {item.nama} {"\n"}
                    <Text style={styles.itemText}>Address : {item.Address} {"\n"}</Text>
                    <Text style={styles.itemText}>E-mail : {item.email} {"\n"}</Text>
                    <Text style={styles.itemText}>No. Telp : {item.HP}{"\n"}</Text>
                    <Text style={styles.itemText}>Jam : {item.jam} {"\n"}</Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          )}
        ></FlatList>
      </SafeAreaView>
    );
  }
}

// Style untuk page update
const styles = StyleSheet.create({
  container:{
    alignSelf: "flex-start",
    justifyContent: "flex-start",
    width: "70%",
    marginStart: 10,
  },
  container1: {
    width: "60%",
    backgroundColor: "#615d5d",
    padding: 10,
    borderRadius: 15,
    margin: 5,
    alignItems: "flex-start",
  },
  innerContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  itemHeading: {
    fontWeight: "bold",
    color: "white"
  },
  itemText: {
    fontWeight: "300",
    color: "white"
  },
  sila: {
    marginVertical: 15,
    fontWeight: "bold",
    color: "#7a1a1a",
    fontSize: 22,
    paddingLeft: 20,
  },
});

export default ListFranchise;
