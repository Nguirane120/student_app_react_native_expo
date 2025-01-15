import React from 'react';
import { Pressable, View, StyleSheet, GestureResponderEvent } from 'react-native';
import * as Haptics from 'expo-haptics';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

const HapticTab = ({ children, onPress, accessibilityState }: BottomTabBarButtonProps) => {
  const handlePress = (event: GestureResponderEvent) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (onPress) {
      onPress(event);
    }
  };

  // Check if tab is focused using accessibilityState
  const isFocused = accessibilityState?.selected;

  return (
    <Pressable onPress={handlePress}>
      <View style={[
        // styles.tabContainer,
        isFocused && styles.activeTab
      ]}>
        {children}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  // tabContainer: {
  //   padding: 8,
  //   // borderWidth: 0,
   
  //   marginHorizontal: 4,
  // },
  activeTab: {
    // borderWidth: 2,
    justifyContent:"center",
    alignItems:"center",
    borderRadius: 20,
    borderColor: 'black',
    backgroundColor: 'black',
    width:50,
    height:50,
    padding:8
  },
});

export default HapticTab;