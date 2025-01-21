import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, Stack, useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft, faClock, faCommentDots, faMessage, faPlay, faTimesSquare } from "@fortawesome/free-solid-svg-icons";

const CourseDetail = () => {
  const router = useRouter();
  const { id, task } = useLocalSearchParams();
  const taskObj = JSON.parse(Array.isArray(task) ? task[0] : task);
  console.log(task);

  if (!task) {
    return <Text>Tâche non trouvée</Text>;
  }

  return (
    <SafeAreaView>
   
      <Stack.Screen
        options={{
          title: taskObj.title,
          // headerBackTitle: capitalize(t('back')),
          headerLeft: ({ canGoBack }) =>
            !canGoBack ? (
                 <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => router.push("/(tabs)/course")}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", marginLeft: 10, fontSize: 20 }}>
          {taskObj.title}
        </Text>
      </View> 
            ) : null,
      
        }}
      />
      <FlatList
        horizontal
        data={taskObj.taskDeatil}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ImageBackground
            source={require("./../assets/images/dev.jpg")}
            style={{ height: 200, width: 300, margin: 10 }}
            imageStyle={{ borderRadius: 20 }}
          >
            <View style={styles.backgoundContainer}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <View style={styles.playIcon}>
                  <FontAwesomeIcon icon={faPlay} color="white" />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.taskTitle}>{item.lesson}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        )}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Tasks</Text>
        <Text style={{ fontWeight: "400", fontSize: 20 }}>
          Done 1<Text style={{ fontWeight: "300" }}>/3</Text>
        </Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={{flex:1,  flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Task 1</Text>
          <View style={{flexDirection: "row", alignItems: "center", }}>
            <FontAwesomeIcon icon={faClock} color="lightgray"/>
            <Text style={{marginLeft:10, fontWeight:"200"}}>30 mn</Text>
          </View>
          <Text>Done</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={{flex:1,  flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Task 1</Text>
          <View style={{flexDirection: "row", alignItems: "center", }}>
            <FontAwesomeIcon icon={faClock} color="lightgray"/>
            <Text style={{marginLeft:10, fontWeight:"200"}}>30 mn</Text>
          </View>
          <Text>Done</Text>
        </View>
      </View>    <View style={styles.cardContainer}>
        <View style={{flex:1,  flexDirection: "row", alignItems: "center", justifyContent: "space-between", padding: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>Task 1</Text>
          <View style={{flexDirection: "row", alignItems: "center", }}>
            <FontAwesomeIcon icon={faClock} color="lightgray"/>
            <Text style={{marginLeft:10, fontWeight:"200"}}>30 mn</Text>
          </View>
          <Text>Done</Text>
        </View>
      </View>
        <View style={[styles.welcomeButton, {alignSelf:"center"}]}>
              <TouchableOpacity onPress={() => router.push("/(tabs)")}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center",  }}>
                  <FontAwesomeIcon icon={faCommentDots} color="white" size={20} />
                  <Text style={{ color: "white", fontWeight: "bold", fontSize:15,  padding: 15 }}>
                    Chat
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
    </SafeAreaView>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({
  backgoundContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  icon: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 15,
    padding: 15,
    marginLeft: 10,
    backgroundColor: "white",
  },
  playIcon: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 15,
    backgroundColor: "rgba(0,0,0,0.5)",
    alignSelf: "flex-start",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  time: {
    fontWeight: "200",
    fontSize: 16,
    color: "white",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor:"#F7F6F9",
    padding: 10,
    borderWidth: 1,
    borderColor: "#F7F6F9",
    borderRadius: 20,
    margin: 5,
  },

  welcomeButton:{
    
    backgroundColor:"black" ,
    borderRadius:30,
    marginVertical:20,
    width: 120,
    height: 50,
    // textAlign: "center",
  },
});
