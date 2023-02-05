import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import React from "react";

export default function DetailFranchise({ route, navigation }) {
  const { username, Address, HP, email, jam, longitude, latitude } = route.params;
  // function untuk pindah page 
  const handlePress = (username, latitude, longitude) => {
    var username = username;
    var longitude = longitude;
    var latitude = latitude;
    // console.log(username, latitude, longitude );
    navigation.navigate("Mapopup", {
      username,
      longitude,
      latitude,
    });
  };
  const handlePress1 = () => {
    navigation.navigate("Lokasi", {
    });
  };

  return (
    <View>
      <Text style={styles.sila1}>DETAIL FRANCHISE</Text>
      <View style={styles.card}>
        <Text style={styles.sila2}>
          <Text style={{ fontWeight:'bold' }}>
          Nama Franchise :
          </Text> 
          {username}
        </Text>
        <Text style={styles.sila2}>
          <Text style={{ fontWeight:'bold' }}>
          Customer service:
          </Text> {"\n"}
          ({HP}) - {email}
        </Text>
        <Text style={styles.sila2}>
          <Text style={{ fontWeight:'bold' }}>
          Lokasi:
          </Text> {"\n"}
          {longitude}, {latitude}
        </Text>
        <Text style={styles.sila2}>
          <Text style={{ fontWeight:'bold' }}>
          Jam Operasional :
          </Text>
          {jam}
        </Text>
      </View>
      {/* button untuk menampilkan lokasi franchise yang dipilih */}
      <TouchableOpacity
        style={{
          alignItems: "center",
          marginTop: 20,
          backgroundColor: "#615d5d",
          width: "60%",
          alignSelf: "center",
          borderRadius: 50,
          height: 50,
          justifyContent: "center",
        }}
        onPress={() => {
          handlePress(username, latitude, longitude, navigation);
        }}
      >
        <Text
          style={{ alignSelf: "center", fontWeight: "bold", color: "white" }}
        >
          Tampilkan Lokasi Franchise
        </Text>
      </TouchableOpacity>
      {/* button untuk menampilkan seluruh lokasi franchise */}
      <TouchableOpacity
        style={{
          alignItems: "center",
          marginTop: 20,
          backgroundColor: "#615d5d",
          width: "60%",
          alignSelf: "center",
          borderRadius: 50,
          height: 50,
          justifyContent: "center",
        }}
        onPress={() => {
          handlePress1();
        }}
      >
        <Text
          style={{ alignSelf: "center", fontWeight: "bold", color: "white" }}
        >
          Tampilkan Lokasi Penuh
        </Text>
      </TouchableOpacity>

    </View>
  );
}

// style yang digunakan
const styles = StyleSheet.create({
  sila: {
    height: 50,
    color: "black",
    fontSize: 20,
  },
  sila1: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#7a1a1a",
    fontSize: 22,
    textAlign: "center",
    marginLeft: 20,
  },
  sila2: {
    color: "black",
    fontSize: 20,
    marginLeft: 20,
  },
  conta: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingLeft: 30,
    margin: 15,
    width: "100%",
  },
  tulis: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  card: {
    backgroundColor: "white",
    width: "80%",
    alignSelf: "center",
    padding: 20,
    borderColor: "#615d5d", borderLeftWidth: 2, borderTopWidth:2, borderRightWidth:2 , borderBottomWidth: 2 
  },
});
