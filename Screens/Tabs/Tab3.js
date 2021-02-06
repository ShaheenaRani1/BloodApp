import React, {useState,useEffect} from 'react';
import {Text, View,Button,TextInput} from 'react-native';

import firestore from '@react-native-firebase/firestore';
// import { Text} from 'native-base';
const Tab3 =()=>{
    let [userId, setUserId] = useState('');
    let [userData, setUserData] = useState({});
    let userDetails = {};
    const searchUser = async () => {
        if (userId) {
          firestore()
            .collection('Users')
            .doc(userId)
            .get()
            .then((documentSnapshot) => {
                alert(userId)
                alert(userData.name)
              /*
                A DocumentSnapshot belongs to a specific document,
                With snapshot you can view a documents data,
                metadata and whether a document actually exists.
              */
              
              // Document fields
              
              userDetails = documentSnapshot.data();
              
              // All the document related data
            //   userDetails['Id'] = documentSnapshot.Id;
             
              setUserData(userDetails);
             
            });
           
        }
      };
      useEffect(() => {
        searchUser();
      }, []);
return(
    <View style={{paddingHorizontal: 35}}>
    <TextInput
      placeholder="Enter User Id"
      onChangeText={(userId) => setUserId(userId)}
      value={userId}
      style={{padding: 10}}
    />
    <Button title="Search User" onPress={()=>searchUser()} />
    <View style={{marginTop: 10}}>
      <Text>
        User Id: {userData ? userData.id : ''}
      </Text>
      <Text>
        User Name: {userData ? userData.name : ''}
      </Text>
      <Text>
        User Contact: {userData ? userData.phonenumber : ''}
      </Text>
      <Text>
        User bloodgroup: {userData ? userData.bloodgroup : ''}
      </Text>
      <Text>{userData  && userData ?.phonenumber}</Text>
    </View>
  </View>
);
};

{/* <Text>TAB3</Text> */}

export default Tab3;