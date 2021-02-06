import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import {Button,Icon} from 'native-base'

export default Login =({navigation})=>{
    //..
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [errortext, setErrortext] = useState("");


  
    
      
      
          // If server response message same as Data Matched
         // if (user) navigation.replace("HomeScreen");
       
    async function LoginUser(){
        setErrortext("");
      if (!email) {
        alert("Please fill Email");
        return;
      }
      if (!password) {
        alert("Please fill Password");
        return;
      }
        await firebase
        
        .auth()
        .signInWithEmailAndPassword(email.trim(),password)
        .then((user)=>{
            alert('WELCOME')
            if (user) navigation.navigate("DonarInfo");
        })
        .catch((error) => {
            console.log(error);
            if (error.code === "auth/invalid-email")
              setErrortext(error.message);
            else if (error.code === "auth/user-not-found")
              setErrortext("No User Found");
            else {
              setErrortext(
                "Please check your email id or password"
              );
            }
          });
        

    }


    return(
        
        <View style={styles.container}>
           <View style={{ alignItems: "center" }}>
              <Image
                source={require("./Image/logo.png")}
                style={{
                  width: "50%",
                  height: 100,
                  resizeMode: "contain",
                  margin:5,
                }}
              />
            </View>
            <View style={{
                padding:10,
                
            }}>
            <Text style={{
                fontSize:35,
                textAlign:'center',
                fontWeight:'200',
                color: 'red',
            }}>
                Login 
            </Text>
            </View>
            

            <View style={styles.forms}>
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
                secureTextEntry
                inlineImageLeft={"account"}
                keyboardType="default"
                // ...
                onChangeText={(text)=>setPassword(text)}
                value={password}

                style={styles.textinput}>
                </TextInput>
            </View>

            {/* //.. */}
            <View>
            {errortext != "" ? (
              <Text style={styles.errorTextStyle}>
                {" "}
                {errortext}{" "}
              </Text>
              ) : null}
            </View>

           <Button 
           onPress={()=>LoginUser()}
           style={{
               borderRadius:20,
               padding:50,
               marginTop:30,
               justifyContent:'center',
               backgroundColor:'red'
           }}>
               <Text style={{
                   textAlign:'center',
                   color:'white',
                   fontSize:25,
                  
               }}>
                   LOGIN
               </Text>

           </Button>
        </View>

    )
}

const styles =StyleSheet.create({
    container:{
        padding:20,
        marginVertical:110,
        marginTop:-15,
    },
    forms:{
        flexDirection:'column',
        
    },
    textinput:{
            fontSize:20,
            fontWeight:'300',
            borderColor:'red',
            borderWidth:3,
            borderRadius:15,
            padding:10,
            marginTop:5,
    }
})