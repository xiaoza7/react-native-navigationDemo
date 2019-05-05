/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';



type Props = {};
export default class HomePage extends Component<Props> {
	
	static navigationOptions={
		title:'Home',
		headerBackTitle:'return to !'
		
	};
  render() {
	   const {navigation}=this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Page1 !</Text>
      <Button
		  title={'go to page1'}
		  onPress={
			  ()=>{
				  navigation.navigate('Page1',{name:'dynamic'});
			  }
		  }
		  />
		  
		  <Button
		  title={'go to page2'}
		  onPress={
			  ()=>{
				  navigation.navigate('Page2');
			  }
		  }
		  />
		  <Button
		  title={'go to page3'}
		  onPress={
			  ()=>{
				  navigation.navigate('Page3',{name:'Icomtopage3'});
			  }
		  }
		  />
		  <Button
		  title={'go to bottom'}
		  onPress={
			  ()=>{
				  navigation.navigate('Bottom');
			  }
		  }
		  />
		  		  <Button
		  title={'go to top'}
		  onPress={
			  ()=>{
				  navigation.navigate('Top');
			  }
		  }
		  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }

});
