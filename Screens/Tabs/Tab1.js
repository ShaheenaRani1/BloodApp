import React, { useState,useEffect } from "react";
import { View, Picker, StyleSheet,Text,Image } from "react-native";
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
const Tab1 = () => {
  const [user, setUser] = useState();
  const {uid} = auth().currentUser;

  const getUser = async () => {
    try {
      const documentSnapshot = await firestore()
        .collection('Users')
        .doc(uid)
        .get();

      const userData = documentSnapshot.data();
      setUser(userData);
    } catch {
      //do whatever
    }
  };

  // Get user on mount
  useEffect(() => {
    getUser();
  }, []);

  // return info if user is set
    return (
      <View>
         <Text style={{
                fontSize:35,
                textAlign:'center',
                fontWeight:'bold',
                color:'red'
            }}>My Detail
           </Text>
         <View style={{ alignItems: "center" }}>
              <Image
                source={require("../Image/logo.png")}
                style={{
                  width: "50%",
                  height: 100,
                  resizeMode: "contain",
                  margin: 30,
                }}
              />
            </View>
      <View style={styles.container}>
       
        <Text  style={{
                fontSize:20,
                textAlign:'center',
                fontWeight:'20',
                color:'red'}}>Name:   {user && user?.name}</Text>
                <Text></Text>
        <Text style={{
                fontSize:20,
                textAlign:'center',
                fontWeight:'20',
                color:'red'}}>Email:    {user && user?.email}</Text>
                <Text></Text>
        <Text style={{
                fontSize:20,
                textAlign:'center',
                fontWeight:'20',
                color:'red'}}>Contact:  {user && user?.phonenumber}</Text>
                <Text></Text>
        <Text style={{
                fontSize:20,
                textAlign:'center',
                fontWeight:'20',
                color:'red'}}>bloodgroup:   {user && user?.bloodgroup}</Text>
      </View>
      </View>
    );
  // const [selectedValue, setSelectedValue] = useState("");
  // return (
  //   <View style={styles.container}>
  //     <Picker
  //       selectedValue={selectedValue}
  //       style={{ height: 50, width: 150 }}
  //       onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
  //     >
  //   <Picker.Item label="Blood Group" value="null" />
  //                     <Picker.Item label="A+" value="A+" />
  //                     <Picker.Item label="A-" value="A-" />
  //                     <Picker.Item label="B+" value="B+" />
  //                     <Picker.Item label="B-" value="B-" />
  //                     <Picker.Item label="AB+" value="AB+" />
  //                     <Picker.Item label="AB-" value="AB-" />
  //                     <Picker.Item label="O+" value="O+" />
  //                     <Picker.Item label="O-" value="O-" />
  //     </Picker>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:1,
 
    
    margin:20,
    
}
});

export default Tab1;