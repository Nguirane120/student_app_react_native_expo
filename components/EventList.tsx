import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { EventListType } from "@/event-type";
const eventImg = require("../assets/images/e1.jpg");
interface EventProps {
  events: {
    name: string;
    date: string;
    color: string;
  };
}

export default function EventList({ events }: EventProps) {
  return (
    <View style={styles.cardContainer}>
      <View
        style={[
          styles.card,
          { backgroundColor: events.color, borderColor: events.color },
        ]}
      >
        <Image
          source={eventImg}
          style={{ width: 100, height: 100, borderRadius: 15 }}
        />

        <View>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            {events.name}
          </Text>
          <Text style={{ fontWeight: "200" }}>{events.date}</Text>
        </View>
        <View style={styles.icon}>
          <FontAwesomeIcon icon={faHeart} size={20} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 350,
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  icon: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    padding: 5,
    marginRight:10, backgroundColor:"white"
  },
});
