import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Subjects from "@/components/Subjects";
import HomeWork from "@/components/HomeWork";

export default function Course() {
  const [activeTab, setActiveTab] = useState("Subjects");

  const renderContent = () => {
    switch (activeTab) {
      case "Subjects":
        return <Subjects />;
      case "HomeWorks":
        return <HomeWork />;
      case "Library":
        return <Text>Content for Library</Text>;
      default:
        return null;
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.tabContainer}>
          {["Subjects", "HomeWorks", "Library"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTabView]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={{backgroundColor:"#fff"}}>{renderContent()}</View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
  tab: {
    padding: 10,
    borderRadius: 5,
  },
  activeTabView: {
    // backgroundColor: "#007bff",
  },
  tabText: {
    color: "#333",
    fontSize: 20,
  },
  activeTabText: {
    color: "#000",
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabContainer: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    // backgroundColor: "#ddd",
  },
});
