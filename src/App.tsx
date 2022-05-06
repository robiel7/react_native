import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class App extends Component {
  render (){
    return (
     <ScrollView>
        <View style={styles.container}>
        <Text style={{fontSize:30,fontWeight:'bold',color:'#008080', padding:10}}>
          MOB1
        </Text>
        <Text style={{fontSize:15,padding:10,fontStyle:'italic'}}>
          Applications mobiles avec un frameworkhybride 🎉
        </Text>
        <Image
          source={require('./assets/image/black.png')}
          style={{ width: 200, height: 200 }}/>
        <Image
          source={require('./assets/image/logo.png')}
          style={{ width: 200, height: 200 }}/>
        <Image
          source={require('./assets/image/golden_retriever.jpg')}
          style={{ width: 300, height: 200 }}/>
        <Image
          source={require('./assets/image/beagle.jpg')}
          style={{ width: 300, height: 200 }}/>
        <Image
          source={require('./assets/image/shibazu.jpg')}
          style={{ width: 200, height: 200 }}/>
        <StatusBar style="auto" />
      </View>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
