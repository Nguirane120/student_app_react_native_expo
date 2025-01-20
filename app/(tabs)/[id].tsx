import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CourseDetail = () => {
    const router = useRouter();
  const { id, task } = useLocalSearchParams();
  const taskObj = JSON.parse(task); 
  console.log(task);

  if (!task) {
    return <Text>Tâche non trouvée</Text>;
  }

  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity style={styles.icon} onPress={() => router.back()}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </TouchableOpacity>
        <Text style={{fontWeight:"bold", marginLeft:10, fontSize:20}}>{taskObj.title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({
  icon: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 15,
    padding: 15,
    marginLeft: 10,
    backgroundColor: "white",
  },
});
