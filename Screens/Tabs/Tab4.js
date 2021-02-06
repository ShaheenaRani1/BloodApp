import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, Picker } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Tab4 = () => {
  let [listData, setListData] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [bloodgroup, setbloodgroup] = useState("");
  /*
    You can use different filters, limitar, start-end boundaries
    and can also order the results
    firestore()
        .collection('Users')
        // Filter results
        .where('age', '>=', 18)
        .where('languages', 'in', ['en', 'fr'])
        // Limit results
        .limit(20)
        // Order results
        .orderBy('age', 'desc')
        // Pagination using startAt, endAt, startAfter, endBefore
        .startAt(18)
        .endAt(30)
        .get()
        .then(querySnapshot => {});
  */
  //  const [userDetails, setUserDetails] = useState('')
  // db.collection('users').doc(id).get()
  //         .then(snapshot => setUserDetails(snapshot.data()))

  useEffect(() => {
    firestore()
      .collection('Users')
      .doc(bloodgroup)
      .get()
      .then((querySnapshot) => {
      
        /*
            A QuerySnapshot allows you to inspect the collection,
            such as how many documents exist within it,
            access to the documents within the collection,
            any changes since the last query and more.
        */
        let temp = [];
        // console.log('Total users: ', querySnapshot.size);
        querySnapshot.forEach((documentSnapshot) => {
          //   console.log('user Id: ', documentSnapshot.id);
          /*
            A DocumentSnapshot belongs to a specific document,
            With snapshot you can view a documents data,
            metadata and whether a document actually exists.
          */
          let userDetails = {};
          // Document fields
          userDetails = documentSnapshot.data();
          // All the document related data
          userDetails['bloodgroup'] = documentSnapshot.bloodgroup;
          
          temp.push(userDetails);
          setbloodgroup(userDetails);
        });
      });
  }, []);

  const itemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.2,
          width: '100%',
          backgroundColor: '#808080'
        }} />
    );
  };

  let itemView = ({ item }) => {
    return (
      <View
        key={item.name}
        style={{
          backgroundColor: 'white',
          padding: 20
        }}>
        <View/>
        <Text style={{
          color:'red',
          fontWeight:'bold'
        }}>Doc Id: {item.id}</Text>
        <Text style={{
          color:'red',
          fontWeight:'bold'
        }}>Name: {item.name}</Text>
        <Text style={{
          color:'red',
          fontWeight:'bold'
        }}>Contact: {item.phonenumber}</Text>
        <Text style={{
          color:'red',
          fontWeight:'bold'
        }}>BloodGroup: {item.bloodgroup}</Text>
      </View>
    );
  };

  return (
  <View>
 <Text style={{
                fontSize:35,
                textAlign:'center',
                fontWeight:'200',
                color:'red'
            }}>Search Donar           
            </Text>
    <View style={{ fontSize:20,
      fontWeight:'200',
      borderColor:'red',
      borderWidth:3,
      borderRadius:20,
      padding:10,
      marginTop:20,}}>
      <Picker
        selectedValue={bloodgroup}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setbloodgroup(itemValue)}
      >
        <Picker.Item label="Blood Group" value="null" />
        <Picker.Item label="A+" value="A+" />
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="B+" value="B+" />
        <Picker.Item label="B-" value="B-" />
        <Picker.Item label="AB+" value="AB+" />
        <Picker.Item label="AB-" value="AB-" />
        <Picker.Item label="O+" value="O+" />
        <Picker.Item label="O-" value="O-" />
      </Picker>
      <FlatList
        data={bloodgroup}
        ItemSeparatorComponent={itemSeparatorView}
        keyExtractor={(Item, item) => item.toString()}
        renderItem={itemView}
      />
    </View>
    </View>
  );
};

export default Tab4;