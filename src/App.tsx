import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
      style={{fontSize:30,fontWeight:'bold',color:'#008080', padding:10}}
      >MOB1</Text>
      <Text
       style={{fontSize:15,padding:10,fontStyle:'italic'}}
      >
        Applications mobiles avec un frameworkhybride 🎉
        </Text>
      <Image
          source={require('./assets/image/black.png')}
          style={{ width: 200, height: 200 }}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
