import React,{useState,useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
    TextInput,
    Picker,
} from 'react-native';
import {Button,Icon} from 'native-base'

export default Register =({navigation})=>{
    const firestore_ref=firestore().collection('Users')
    //..
    const [fullname,setFullName]=useState('')
    const [displayname,setDisplayName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phoneNumber,setPhoneNumber]=useState('')
    const [bloodgroup,setbloodgroup]=useState('')

    //..
    async function RegisterUser(){
        await firebase
        .auth()
        .createUserWithEmailAndPassword(email.trim(),password)
        .then((loggeduser)=>{
            const userdata=firestore_ref.doc(loggeduser.user.uid)
            userdata.set({
                name:fullname,
                email:email,
                phonenumber:phoneNumber,
                bloodgroup:bloodgroup
            }).then(()=>{
                alert('sucesss')
                navigation.navigate("Login");
            })
        })
        .catch((error)=>{
            alert(error)
        })

    }

     

    return(
        <View style={styles.container}>
            <View style={{
                padding:10,
              
                marginLeft:0,
            }}>
            {/* <Text style={{
                fontSize:35,
                textAlign:'center',
                fontWeight:'200',
                color:'red'
            }}>
Register            </Text> */}
            </View>
            
            <View style={styles.forms}>
            <TextInput
                placeholder={'Full Name'}
                inlineImageLeft={"account"}
                keyboardType="default"
                //..
                onChangeText={(text)=>setFullName(text)}
                value={fullname}
                style={styles.textinput}>
                </TextInput>
                
                <TextInput
                placeholder={'Email'}
                inlineImageLeft={"account"}
                keyboardType="default"
                //..
                onChangeText={(text)=>setEmail(text)}
                value={email}
                style={styles.textinput}>


                </TextInput>
                <TextInput
                placeholder={'Password'}
                inlineImageLeft={"account"}
                secureTextEntry
                //...
                onChangeText={(text)=>setPassword(text)}
                value={password}
                keyboardType="default"
                style={styles.textinput}>
                </TextInput>

                <TextInput
                placeholder={'Phone Number'}
                inlineImageLeft={"account"}
                keyboardType="numeric"
                //..
                onChangeText={(text)=>setPhoneNumber(text)}
                value={phoneNumber}
                style={styles.textinput}>
                </TextInput>
                <View style={{ fontSize:20,
            fontWeight:'200',
            borderColor:'red',
            borderWidth:3,
            borderRadius:20,
            padding:10,
            marginTop:20,}}>
                <Picker
        selectedValue={bloodgroup}
        // itemStyle={{ backgroundColor: "red", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
    
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
      </View>
                {/* //.. */}
                <Button
                onPress={()=>RegisterUser()}
                style={{
                    borderRadius:20,
                    padding:10,
                    marginTop:10,
                    justifyContent:'center',
                    backgroundColor:'red'
                }}
           >
               <Text style={{
                   textAlign:'center',
                   color:'white',
                   fontSize:25,

               }}>
                   Sign Up
               </Text>

           </Button>
            </View>
           
        </View>

    )
}

const styles =StyleSheet.create({
    container:{
        padding:20,
        flex:1,
        marginVertical:110,
        marginTop:0,
    },
    forms:{
        flexDirection:'column',
        flex:1,
    },
    textinput:{
            fontSize:20,
            fontWeight:'300',
            borderColor:'red',
            borderWidth:3,
            borderRadius:15,
            padding:10,
            marginTop:20,
    },
    
})