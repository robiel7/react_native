import React,{Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Dog from './component/Dog';

export default class App extends Component {
  render (){
    return (
     <ScrollView>
        <View style={styles.container }>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 50,
            marginBottom: 10,
          }}> 
          <Text style={{fontSize:30,fontWeight:'bold',color:'#008080', padding:10}}>
          MOB1
        </Text>
        <Text style={{fontSize:15,padding:10,fontStyle:'italic'}}>
          Applicagtions mobiles avec un frameworkhybride 🎉
        </Text>
          </View>

        <Dog />
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
