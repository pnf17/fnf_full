import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import Dashboard from "./dashboard";
import { colors } from "react-native-elements";
import { db } from "./config";
import { useState } from "react";

export default function UpdateFranchise({ route, navigation }) {
  const { username, Address, HP, email, longitude, latitude, jam } = route.params;
  const [myUsername, setMyUsername] = useState(username);
  const [myHP, setMyHP] = useState(HP);
  const [myemail, setMyemail] = useState(email);
  const [myjam, setMyjam] = useState(jam);
  const [myaddress, setMyaddress] = useState(Address);

  // function untuk mengubah lokasi franchise
  const updateLokasi = (username, HP, email, Address, jam) => {
    updateDoc(doc(db, "franchise", myUsername), {
      username: myUsername,
      HP: myHP,
      jam: myjam,
      email: myemail,
      Address: myaddress,
    })
      .then(() => {
        console.log("berhasil");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // function untuk menghapus data franchise
  const deleteFranchise = () => {
    deleteDoc(doc(db, "franchise", username))
      .then(() => {
        console.log("Franchise Data success to remove !");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", margin: 20 }}>
      <Text style={styles.sila1}>EDIT DATA</Text>
      {/* form untuk melakukan perubahan data */}
      <Text style={{alignSelf: "flex-start", marginStart: 10}}>
          No. HP: 
      </Text>
      <View style={styles.conta}>
        <TextInput
          placeholder={HP}
          placeholderTextColor="#aaaaaa"
          style={styles.sila}
          onChangeText={(HP) => setMyHP(HP)}
        />
      </View>
      <Text style={{alignSelf: "flex-start", marginStart: 10}}>
          E-Mail: 
      </Text>
      <View style={styles.conta}>
        <TextInput
          placeholder={email}
          placeholderTextColor="#aaaaaa"
          style={styles.sila}
          onChangeText={(email) => setMyemail(email)}
        />
      </View>
      <Text style={{alignSelf: "flex-start", marginStart: 10}}>
          Jam Operasional: 
      </Text>
      <View style={styles.conta}>
        <TextInput
        placeholder={jam}
          placeholderTextColor="#aaaaaa"
          style={styles.sila}
          onChangeText={(jam) => setMyjam(jam)}
        />
      </View>
      <Text style={{alignSelf: "flex-start", marginStart: 10}}>
          Alamat: 
      </Text>
      <View style={styles.conta}>
        <TextInput
          placeholder={Address}
          placeholderTextColor="#aaaaaa"
          style={styles.sila}
          onChangeText={(Address) => setMyaddress(Address)}
        />
      </View>
      <View style={{ flexDirection: "column", flex:1, marginTop:20 }}>
      <View style={{ flexDirection: "row", flex:1, marginTop:20 }}>
        {/* button untuk melakukan perubahan data franchise */}
        <TouchableOpacity
          style={{ marginHorizontal: 20, backgroundColor: "white", width: 150, height:40, justifyContent:'center', alignItems:"center", borderRadius:40, borderColor: "#615d5d", borderLeftWidth: 2, borderTopWidth:2, borderRightWidth:2 , borderBottomWidth: 2 }}
          onPress={() => {
            updateLokasi();
            navigation.navigate("Update Franchise");
          }}
        >
          <Text style={styles.tulis}>Change Data</Text>
        </TouchableOpacity>
        {/* button untuk mengubah lokasi franchise */}
        <TouchableOpacity
          style={{ marginHorizontal: 20, backgroundColor: "white", width: 150, height: 40, justifyContent:'center', alignItems:"center", borderRadius:40, borderColor: "#615d5d", borderLeftWidth: 2, borderTopWidth:2, borderRightWidth:2 , borderBottomWidth: 2 }}
          onPress={() => {
            updateLokasi();
            navigation.navigate("Mapss");
          }}
        >
          <Text style={styles.tulis}>Edit Lokasi</Text>
        </TouchableOpacity>
        </View>
        {/* button untuk menghapus data franchise */}
        <View style={{ flexDirection: "row",  justifyContent: "center", marginLeft: 0,flex:1, marginTop: -140 }}>
          <TouchableOpacity
            style={{ marginHorizontal: 20, backgroundColor: "#7a1a1a", width: 150, height:40, justifyContent:'center', alignItems:"center", borderRadius:40}}
            onPress={() => {
              Alert.alert(
                "Delete Confirmation",
                "Are you sure you want to delete this Data?",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  {
                    text: "OK",
                    onPress: () => deleteFranchise(db, "franchise", myUsername),
                  },
                ],
                { cancelable: false }
              );
            }}
          >
            <Text style={styles.tulis1}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

// style yang digunakan
const styles = StyleSheet.create({
  sila: {
    height: 50,
    color: "white",
    fontSize: 20,
  },
  sila1: {
    marginVertical: 15,
    fontWeight: "bold",
    color: "#7a1a1a",
    fontSize: 22,
  },
  conta: {
    backgroundColor: "#615d5d",
    paddingLeft: 30,
    margin: 15,
    width: "100%",
    borderRadius: 40
  },
  tulis:{
    fontSize:15,
    fontWeight:'bold',
    color:'#7a1a1a'
  },
  tulis1:{
    fontSize:15,
    fontWeight:'bold',
    color:'white'
  }
});
