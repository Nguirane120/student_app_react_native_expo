import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  ImageBackground,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";

const welcomeImg = require("../assets/images/welcome.png");
const WelcomeScreeen = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop:40}}>
      <Image source={welcomeImg} style={styles.image} />
      </View>
      <View>
        <Text style={[styles.welcomeText, {fontSize:40, fontWeight:"bold", marginTop:10}]}>The only study app you'll ever need</Text>
        <Text style={[styles.welcomeText, {fontSize:20, fontWeight:"200", marginTop:15}]}>Upload class study material, create electronic flash cards to study. </Text>
      </View>
      <View style={styles.welcomeButton}>
        <TouchableOpacity onPress={() => router.push("/(tabs)")}>
          <Text style={styles.textButton}>Let's start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreeen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
   flexDirection:"column",
   alignItems:"center",
    marginTop: 30,
  },
  image: {
    width: 300,
    height: 200,
    marginTop:50
  },
  welcomeText:{
    textAlign:"center"
  },
  welcomeButton:{
    backgroundColor:"black",
    borderRadius:30,
    marginVertical:50,
  },
  textButton:{
    color:"white",
    padding:20,
    fontWeight:"bold",
    
  }
});
