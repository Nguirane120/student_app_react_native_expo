import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchInput() {
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <FontAwesomeIcon icon={faSearch} size={20} color="gray" style={{marginLeft:15}} />
        <TextInput placeholder="Search" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    flexDirection:"row",
    alignItems:"center",
    marginVertical: 15,
    borderWidth: 1,
    borderColor: "#F7F4F8",
    borderRadius: 20,
    width: 300,
    backgroundColor: "#F7F4F8",
  },
});
