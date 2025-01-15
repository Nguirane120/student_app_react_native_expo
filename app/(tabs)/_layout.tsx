import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import HapticTab from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar, faCommentDots, faHome, faList } from '@fortawesome/free-solid-svg-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
    
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor:"black",
        tabBarInactiveTintColor:"black",
        tabBarBackground: TabBarBackground,
        tabBarShowLabel:false,
        tabBarItemStyle: {
          // borderWidth: 2,  
          // borderColor: "black",
          borderRadius: 8,
          // marginHorizontal: 4,
          // marginVertical:5,
          alignItems:"center",
          justifyContent:"center"
        },
       
        headerShown: false,
        
        tabBarButton: HapticTab,
        tabBarStyle: {
         borderTopWidth:0,
          backgroundColor:"#fff",
          position:"absolute",
          left:20,
          bottom:20,
          right:16,
          height:72,
          borderRadius:20,
          margin:10,
          justifyContent:"center",
          alignItems:"center",
          ...Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: 'absolute',
            },
            default: {},
          }),
        },
   
        
      }}>
      <Tabs.Screen
      
        name="index"
        options={{
          // title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faHome} size={28}  color={color} />,
        }}
      />
      <Tabs.Screen
        name="schedules"
        options={{
          // title: 'Explore',
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faCalendar} size={28}  color={color} />,
        }}
      />
        <Tabs.Screen
        name="course"
        options={{
          // title: 'Explore',
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faList} size={28}  color={color} />,
        }}
      />
       <Tabs.Screen
        name="chat"
        options={{
          // title: 'Explore',
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faCommentDots} size={28}  color={color} />,
        }}
      />
    </Tabs>
  );
}
