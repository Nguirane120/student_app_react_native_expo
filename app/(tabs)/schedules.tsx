import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Schedules() {
  const days = [
    { day: "SUN", month: "04" },
    { day: "MON", month: "05" },
    { day: "TUE", month: "06" },
    { day: "WED", month: "07" },
    { day: "THU", month: "08" },
    { day: "FRI", month: "09" },
    { day: "SAT", month: "10" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Schedule</Text>

        <View style={styles.icon}>
          <FontAwesomeIcon icon={faSearch} size={20} />
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 10,
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 20 }}>This week</Text>
            <Text style={{ fontWeight: "400", fontSize: 20 }}>See all</Text>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {days.map((item, idx) => (
              <View key={idx}>
                <View
                  style={{
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 5,
                  }}
                >
                  <Text style={{ fontWeight: "300" }}>{item.day}</Text>
                  <View style={{ marginTop: 10, alignItems:"center", justifyContent:"center" }}>
                    <Text
                      style={{
                        fontWeight: "900",
                        backgroundColor: item.month == "09" ? "black" : "",
                        color: item.month == "09" ? "white" : "",
                        padding: item.month == "09" ?  8 : 0,
                        borderRadius: item.month == "09" ? 10 : 0,
                      }}
                    >
                      {item.month}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  icon: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 15,
    padding: 10,
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 350,
    height: 150,
    backgroundColor: "#F7F6F9",
    borderRadius: 20,
    marginTop: 20,
    padding:20
  },
});
