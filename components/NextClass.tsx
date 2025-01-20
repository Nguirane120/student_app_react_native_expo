import { Image, StyleSheet, Text, View } from "react-native";
import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalculator, faCheck } from "@fortawesome/free-solid-svg-icons";
import CardComponent from "./CardComponent";
const pp = require("../assets/images/pp.jpg");

export default function NextClass() {
  return (
    <Fragment>
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>NextClass</Text>
        <Text style={{ fontSize: 20 }}>See all</Text>
      </View>
    <CardComponent leftIcon={faCalculator} rightIcon={faCheck}
    bgColor="#DEE2FE"
    cardTtitle="Basic Mathematics" time="Today, 08:15" teacher="Mr Robot"/>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 350,
    height: 220,
    backgroundColor: "#DEE2FE",
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
});
