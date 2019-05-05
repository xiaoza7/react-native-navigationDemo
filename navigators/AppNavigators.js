/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import {createStackNavigator,createBottomTabNavigator,createMaterialTopTabNavigator}from 'react-navigation'
import HomePage from '../page/HomePage';
import Page1 from '../page/Page1';
import Page2 from '../page/Page2';
import Page3 from '../page/Page3';
import Page4 from '../page/Page4';
import Page5 from '../page/Page5';
import Login from '../page/Login';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const AppTopNavigator=createMaterialTopTabNavigator(
{
	Page1:{
		screen:Page1,
		navigationOptions:{
			tabBarLabel: 'ALL'
		}
	},
	Page2:{
		screen:Page2,
		navigationOptions:{
			tabBarLabel: 'iOS'
		}
	},
	Page3:{
		screen:Page3,
		navigationOptions:{
			tabBarLabel: 'React'
		}
	},
	Page4:{
		screen:Page4,
		navigationOptions:{
			tabBarLabel: 'React-native'
		}
	},
	Page5:{
		screen:Page5,
		navigationOptions:{
			tabBarLabel: 'devio'
		}
	}
},{
		
		tabBarOptions:{
			tabStyle:{minWidth:50},
			upperCaseLabel:false,
			scrollEnabled:true,
			style:{
				backgroundColor:'#678'
			},
			indicatorStyle:{
				height:2,
				backgroundColor:'white'	
			},
			
			labelStyle:{
				fontSize:13,
				marginTop:6,
				marginBottom:6
			},
		}
	}

);
export const AppBottomNavigator=createBottomTabNavigator(
{
	Page1:{
		screen:Page1,
		navigationOptions:{
			tabBarLabel: 'hotest',
			tabBarIcon:({tintColor,focused})=>(
			<Ionicons 
			name={'ios-home'}
			size={26}
			style={{color:tintColor}}
			/>
			)
		}
	},
	Page2:{
		screen:Page2,
		navigationOptions:{
			tabBarLabel: 'popular',
			tabBarIcon:({tintColor,focused})=>(
			<Ionicons 
			name={'ios-people'}
			size={26}
			style={{color:tintColor}}
			/>
			)
		}
	},
	Page3:{
		screen:Page3,
		navigationOptions:{
			tabBarLabel: '收藏',
			tabBarIcon:({tintColor,focused})=>(
			<Ionicons 
			name={'ios-chatboxes'}
			size={26}
			style={{color:tintColor}}
			/>
			)
		}
	},
	Page4:{
		screen:Page4,
		navigationOptions:{
			tabBarLabel: 'mine',
			tabBarIcon:({tintColor,focused})=>(
			<Ionicons 
			name={'ios-aperture'}
			size={26}
			style={{color:tintColor}}
			/>
			)
		}
	}
},
	{
		
		tabBarOptions:{
		activeTintColor:Platform.OS==='ios'?'#e91e63':'#fff',
		}
	}

);



export const AppStackNavigator=createStackNavigator({
	HomePage:{
		screen:HomePage
	},
	Page1:{
		screen:Page1,
		navigationOptions:({navigation})=>(
			{
				title:'${navigation.state.params.name}页面名'
			}
		)
	},
	Page2:{
		screen:Page2,
		navigationOptions:
			{
				title:'this is 页面2'
			}
		
	},
	Bottom:{
		screen:AppBottomNavigator,
		navigationOptions:
			{
				title:'BottomNavigator'
			}
		
	},
	Top:{
		screen:AppTopNavigator,
		navigationOptions:
			{
				title:'this is ApptopNavigator'
			}
		
	},
	Page4:{
		screen:Page4,
		navigationOptions:
			{
				title:'this is 页面4'
			}
		
	},
	Page3:{
		screen:Page3,
		navigationOptions:(props)=>
			{
				const {navigation}=props;
				const {state,setParams}=navigation;
				const {params}=state;
				return {
					title:params.title?params.title:'this is page3!',
					headerRight:(
					<Button
                           title={params.mode==='edit'?'保存':'编辑'}
                           onPress={()=>setParams({mode:params.mode==='edit'?'':'edit'})}					   
						 />
					)
				}
				
			}
		
	}
});

//export default class App extends Component {
 // render() {                            //将Navigation作为根路径导出
 //   return <AppStackNavigator />;
 // }
//}