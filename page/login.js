import React, { Component } from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { getDocs, collection, doc, where, query } from "firebase/firestore";
import { db } from "./config";
import 'localstorage-polyfill';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      username:"",
      email: "",
      password: "",
      dbemail: "",
      dbpassword: "",
      pass_email:"",
      HP:"",
      check_textInputChange: false,
      secureTextEntry: true,
      pass_username:"",
      address:'',
      pass_address:''
    };
  }

  // function untuk verifikasi data user yang diinput
  getUser = () => {
    var email = this.state.email;
    var password = this.state.password;
    if (email.length == 0 || password.length == 0) {
      alert("Harap isi data dengan benar!!");
    } else {
      getDocs(
        query(collection(db, "username"), where("email", "==", email))
      ).then((docSnap) => {
        let username = [];
        docSnap.forEach((doc) => {
          username.push({ ...doc.data(), id: doc.id });
        });
        this.setState({
          dbemail: username[0].email,
          dbpassword: username[0].password,
          user: username[0].username,
          HP: username[0].HP,
          address: username[0].Address,
        });
        if (
          this.state.email === this.state.dbemail &&
          this.state.password === this.state.dbpassword
        ) {
          this.setState({ pass_username: this.state.user, pass_HP:this.state.HP, pass_address:this.state.address }, () =>
            localStorage.setItem("pass_username", this.state.user),
            localStorage.setItem("pass_email", this.state.email),
            localStorage.setItem("pass_address", this.state.address),
            localStorage.setItem("pass_HP", this.state.HP)
          );
          Alert.alert("Login Berhasil");
          console.log(
            "Documen Data: ",
            username[0].email,
            username[0].password,
            username[0].username,
          );
          this.props.navigation.navigate("Dashboard",{email});
        } else {
          Alert.alert("Login Gagal");
        }
      });
    }
  };

  // function untuk verifikasi data user yang diinput
  getUserCust = () => {
    var email = this.state.email;
    var password = this.state.password;
    if (email.length == 0 || password.length == 0) {
      alert("Harap isi data dengan benar!!");
    } else {
      getDocs(
        query(collection(db, "username"), where("email", "==", email))
      ).then((docSnap) => {
        let username = [];
        docSnap.forEach((doc) => {
          username.push({ ...doc.data(), id: doc.id });
        });
        this.setState({
          dbemail: username[0].email,
          dbpassword: username[0].password,
          user: username[0].username,
          HP: username[0].HP,
          address: username[0].Address,
        });
        if (
          this.state.email === this.state.dbemail &&
          this.state.password === this.state.dbpassword
        ) {
          this.setState({ pass_username: this.state.user, pass_HP:this.state.HP, pass_address:this.state.address }, () =>
            localStorage.setItem("pass_username", this.state.user),
            localStorage.setItem("pass_email", this.state.email),
            localStorage.setItem("pass_address", this.state.address),
            localStorage.setItem("pass_HP", this.state.HP)
          );
          Alert.alert("Login Berhasil");
          console.log(
            "Documen Data: ",
            username[0].email,
            username[0].password,
            username[0].username,
          );
          this.props.navigation.navigate("Tombol_customer",{email});
        } else {
          Alert.alert("Login Gagal");
        }
      });
    }
  };


  updateSecureTextEntry() {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <StatusBar />
          <Image
            source={require("../assets/logo_fnf.png")}
            style={{
              width: 250,
              height: 250,
              alignSelf: "center",
              overflow: "hidden",
              borderRadius: 180,
              marginBottom: 10,
              marginTop: 40
            }}
          />
          <View style={styles.viewStyle}>
            <Text style={styles.sila}>LOGIN</Text>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="Enter Your Email"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
            <View style={styles.inputStyle2}>
              <TextInput
                placeholder="Enter Your Password"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                secureTextEntry={this.state.secureTextEntry ? true : false}
                onChangeText={(password) => this.setState({ password })}
              />
              <TouchableOpacity
                style={styles.mata}
                onPress={this.updateSecureTextEntry.bind(this)}
              >
                {this.state.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="black" size={20} />
                )}
              </TouchableOpacity>
            </View>
            {/* tombol untuk melakukan verifikasi login ke dashboard admin */}
            <View style={styles.loginButtonSection}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                  this.getUser();
                }}
              >
                <Text style={styles.text}>Login as Admin</Text>
              </TouchableOpacity>
            </View>
            {/* tombol untuk melakukan verifikasi login ke dashboard customer */}
            <View style={styles.loginButtonSection}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                  this.getUserCust();
                }}
              >
                <Text style={styles.text}>Login as Customer</Text>
              </TouchableOpacity>
            </View>
            {/* tombol untuk registrasi */}
            <View style={styles.loginButtonSection}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                  this.props.navigation.navigate("Register");
                }}
              >
                <Text style={styles.text}>Create new Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

// Style yang digunakan
const styles = StyleSheet.create({
  logo: {
    width: 260,
    height: 260,
    marginBottom: 10,
    justifyContent: "center",
  },
  viewStyle: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  inputStyle: {
    width: "100%",
    height: 48,
    overflow: "hidden",
    backgroundColor: "#615d5d",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 30,
  },
  inputStyle2: {
    width: "100%",
    height: 48,
    overflow: "hidden",
    backgroundColor: "#615d5d",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 30,
    flexDirection: "row",
  },
  mata: {
    paddingTop: 15,
    paddingRight: 20,
  },
  textInput: {
    height: 50,
    color: "white",
    fontSize: 15,
    flex: 1,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    paddingBottom: 5,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textTransform: "uppercase",
  },
  loginButtonSection: {
    width: "100%",
    marginTop: 25,
  },
  loginButton: {
    backgroundColor: "#7a1a1a",
    color: "white",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  sila: {
    marginVertical: 15,
    fontWeight: "bold",
    color: "#7a1a1a",
    fontSize: 22,
    fontFamily: "Poppins-SemiBold",
  },
});
