import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import Main from './module/Main';
import User from './module/User';

const Bar = createBottomTabNavigator();

export default function App() {
 
  return (
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
      <Bar.Navigator screenOptions={{headerShown:false,tabBarStyle:styles.tab}}>
        <Bar.Screen name='Inicio' component={Main}/>
        <Bar.Screen name='Usuario' component={User}/>
      </Bar.Navigator>
      <StatusBar translucent={true} showHideTransition={'slide'}/>
    </NavigationContainer>
  </SafeAreaView>
    // <View style={styles.container}>
      
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab:{
    backgroundColor:"#240046",
    borderTopColor:"white",
    borderTopWidth:3,
    height:"8%"
  },
  
});
