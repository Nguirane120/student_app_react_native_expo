import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const pp = require("../assets/images/pp.jpg");

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={pp}
          style={{ width: 50, height: 45, borderRadius: 15 }}
        />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Alioune Badara</Text>
          <Text style={{ fontWeight: "200", marginTop: 5 }}>
            Developpeur web
          </Text>
        </View>
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon icon={faBell} size={30} color="#000" />
        <View style={styles.badge} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  icon: {
    position: "relative",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    padding: 5,
  },

  badge: {
    position: "absolute",
    height: 10,
    width: 10,
    top: 9,
    right: 5,
    backgroundColor: "green",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
  },
});
