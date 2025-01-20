import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const pp = require("../assets/images/pp.jpg");

interface CardComponentProps {
  leftIcon: any;
  rightIcon: any;
  cardTtitle: string;
  time: string;
  teacher: string;
  bgColor: string;
}

const CardComponent: React.FC<CardComponentProps> = ({leftIcon, rightIcon, cardTtitle, time, teacher, bgColor }) => {
  return (
    <View style={styles.cardContainer}>
    <View style={[styles.card, {backgroundColor:bgColor}]}>
      <View
        style={{ alignItems: "flex-end", marginTop: 10, marginRight: 5 }}
      >
        <View style={styles.homework}>
          <Text>Homework</Text>
          <View style={styles.icon}>
            <FontAwesomeIcon icon={rightIcon} color="#fff" />
          </View>
        </View>
      </View>
      <View style={styles.course}>
       <View style={styles.calculatorIcon}>
       <FontAwesomeIcon icon={leftIcon} style={{alignItems:'center'}}/>
       </View>
        <Text style={{fontWeight:"bold", fontSize:20}}>{cardTtitle}</Text>
        <Text style={{fontWeight:"200"}}>{time}</Text>
        <View style={{flexDirection:"row", alignItems:"center"}}>
          <Image
            source={pp}
            style={{ width: 30, height: 30, borderRadius: 10 }}
          />
          <Text style={{marginLeft:10}}>{teacher}</Text>
        </View>
      </View>
    </View>
  </View>
  )
}

export default CardComponent

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: "center",
        alignItems: "center",
      },
      card: {
        width: 350,
        height: 220,
        borderRadius: 20,
        marginTop: 20,
      },
      homework: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#ECEEFD",
        width: 150,
        borderRadius: 20,
        padding: 10,
      },
      icon: {
        backgroundColor: "#000",
        borderRadius: 20,
        padding: 2,
      },
      course:{
        flexDirection:"column",
        gap:10,
        marginLeft:20
      },
      calculatorIcon:{
        backgroundColor: "#ECEEFD",
        width:50,
        height:50,
        borderRadius: 20,
        padding:20,
        alignItems:"center"
      }
})