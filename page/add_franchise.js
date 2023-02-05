import React, { Component } from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
  Text,
  Alert,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { setDoc, doc } from "firebase/firestore";
import { db } from "./config";

export default class AddFranchise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      HP: "",
      Address: "",
      email: "",
      jam: "",
      gambar: "",
      check_textInputChange: false,
      confirmSecureTextEntry: true,
      secureTextEntry: true,
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  }

  // function untuk menambah data pada firebase
  insertNewFranchise = () => {
    var user = this.state.user;
    var HP = this.state.HP;
    var Address = this.state.Address;
    var email = this.state.email;
    var jam = this.state.jam;
    var gambar = this.state.gambar;
    if (
      user.length == 0 ||
      email.length == 0 ||
      HP.length == 0 ||
      Address.length == 0 ||
      jam.length == 0 ||
      gambar.length == 0
      //   confirmPw.length == 0
    ) {
      alert("Harap isi data dengan benar!!");
    } else {
      setDoc(doc(db, "franchise", user), {
        username: user,
        HP: HP,
        Address: Address,
        email: email,
        jam: jam,
        gambar: gambar
      })
        .then(() => {
          console.log("data submitted");
          Alert.alert("Pendaftaran Franchise Berhasil!");
          this.props.navigation.navigate("Mapss");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "center",
                lineHeight: 50,
                marginHorizontal: 15,
                fontSize: 28,
                color: "#7a1a1a",
                marginBottom: 10,
                marginTop: 10,
              }}
            >
              ADD DATA
            </Text>
            {/* formulir franchise */}
            <View
              style={{
                flex: 1,
                backgroundColor: "#615d5d",
                borderRadius: 30,
                paddingLeft: 30,
                margin: 15,
              }}
            >

              <TextInput
                placeholder="Masukkan Nama Franchise"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(user) => this.setState({ user })}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#615d5d",
                borderRadius: 30,
                paddingLeft: 30,
                margin: 15,
              }}
            >
              <TextInput
                placeholder="Masukkan Nomor HP Franchise"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(HP) => this.setState({ HP })}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#615d5d",
                borderRadius: 30,
                paddingLeft: 30,
                margin: 15,
              }}
            >
              <TextInput
                placeholder="Masukkan Email Franchise"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#615d5d",
                borderRadius: 30,
                paddingLeft: 30,
                margin: 15,
              }}
            >
              <TextInput
                placeholder="Masukkan Alamat Franchise"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(Address) => this.setState({ Address })}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#615d5d",
                borderRadius: 30,
                paddingLeft: 30,
                margin: 15,
              }}
            >
              <TextInput
                placeholder="Masukkan Link gambar"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(gambar) => this.setState({ gambar })}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "#615d5d",
                borderRadius: 30,
                paddingLeft: 30,
                margin: 15,
              }}
            >
              <TextInput
                placeholder="Masukkan Jam"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(jam) => this.setState({ jam })}
              />
            </View>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", paddingHorizontal: 20 }}
          >
            {/* button untuk add data franchise */}
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => {
                this.insertNewFranchise();
              }}
            >
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        
      </SafeAreaView>
    );
  }
}

// style yang digunakan
const styles = StyleSheet.create({
  textInput: {
    height: 50,
    color: "white",
    fontSize: 20,
    flex: 1,
  },
  registerButton: {
    backgroundColor: "#7a1a1a",
    color: "white",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 150,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textTransform: "uppercase",
  },
});
