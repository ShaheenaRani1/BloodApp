import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
    TextInput,
    Image
} from 'react-native';
import {Button,Icon} from 'native-base'

import Login from './Login'
import Register from './Register'




//...
export default function Welcome({navigation}) {

	return(
		<View style={styles.container}>
        <View style={{ alignItems: "center" }}>
              <Image
                source={require("./Image/logo.png")}
                style={{
                  width: "50%",
                  height: 100,
                  resizeMode: "contain",
                  margin: 30,
                }}
              />
            </View>
            <Text style={styles.header1}>
                WELCOME 
            </Text>
            <Text style={styles.header2}>
                    Lets Get Started
                </Text>

            <View style={styles.buttonPlaceholder}>
                {/* //..UPDATE BUTTON */}
                <Button
                onPress={()=>navigation.navigate('Login')}
                 style={styles.login}>
                <Text style={styles.textstyle}>
                        Login
                    </Text>
                </Button>
                {/* //..UPDATE BUTTON */}
                <Button 
                onPress={()=>navigation.navigate('Register')}
                style={styles.login}>
                <Text style={styles.textstyle}>
                        Register
                    </Text>
                </Button>
                </View>
            </View>
      
        
	);
}

const styles = StyleSheet.create({
	container: {
        flexDirection:'column',
        marginHorizontal:70,
        alignSelf:'center',
        marginVertical:150,
        marginTop: '15%',
        
	},
	header1: {
		// marginTop: '0%',
		fontSize: 40,
        color: 'red',
    },
    header2: {
        position:'relative',
        textAlign:'center',
		fontSize: 20,
		color: 'red',
		
    },
	buttonPlaceholder: {
        flexDirection: 'column',
        flex:1,
        marginTop:50,

	},
	login: {
        padding:20,
        borderRadius:20,
        marginBottom:10,
        backgroundColor:'red',
        justifyContent:'center',
        

    },
    textstyle:{
            color:'white',
            fontSize:30,
            textAlign:'center'
    }
    
});