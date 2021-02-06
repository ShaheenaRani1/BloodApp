import React from 'react';
import {
	StyleSheet,

} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './Tabs/Tab1';
import Tab2 from './Tabs/Tab2';

import Tab4 from './Tabs/Tab4';

const DonarInfo =()=>{
   
    return (
      <Container >
        <Header hasTabs style={styles.container}/>
        <Tabs >
          <Tab heading="My detail" tabStyle={{backgroundColor: 'red'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'red'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Tab1 />
          </Tab>
          <Tab heading="Blood Bank" tabStyle={{backgroundColor: 'red'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'red'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Tab2 />
          </Tab>
          <Tab heading="SearchDono" tabStyle={{backgroundColor: 'red'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: 'red'}} activeTextStyle={{color: '#fff', fontWeight: 'normal'}}>
            <Tab4 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
  const styles =StyleSheet.create({
    container:{
        backgroundColor:'red',
    }
  })

export default DonarInfo;