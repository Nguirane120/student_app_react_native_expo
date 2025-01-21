import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import SearchInput from "./SearchInput";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faArrowDown,
  faBalanceScale,
  faBook,
  faCalculator,
  faCalendarDay,
  faCalendarPlus,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "expo-router";

const tasks = [
  {
    id: 1,
    title: "Basic Mathematics",
    icon: faCalculator,
    duration: "50mn",
    completed: "Done",
    color: "#FCF0FE",
    taskDeatil:[
      {
        id: 1,
        lesson: "Lesson 1",
        teacher: "Mr Robot",
        time: "30mn",
      },
      {
        id: 2,
        lesson: "Lesson 2",
        teacher: "Mr Robot",
        time: "20mn",
      },
      {
        id: 3,
        lesson: "Lesson 3",
        teacher: "Mr Robot",
        time: "30mn",
      },
      {
        id: 4,
        lesson: "Lesson 4",
        teacher: "Mr Robot",
        time: "20mn",
      }
    ]
  },
  {
    id: 2,
    title: "English Grammar",
    icon: faBook,
    duration: "30mn",
    completed: "Done",
    color: "#EBFDFB",

    taskDeatil: {
      lesson: "Lesson 2",
      teacher: "Mr Robot",
      time: "20mn",
    },
  },
  {
    id: 3,
    title: "Science",
    icon: faBalanceScale,
    duration: "60mn",
    completed: "To do",

    color: "#F1F5FE",
    taskDeatil: {
      lesson: "Lesson 1",
      teacher: "Mr Robot",
      time: "40mn",
    },
  },
  {
    id: 4,
    title: "World History",
    icon: faGlobe,
    duration: "40mn",
    completed: "To do",
    color: "#FEF8E6",
    taskDeatil: {
      lesson: "Lesson 1",
      teacher: "Mr Robot",
      time: "30mn",
    },
  },
];
const HomeWork = () => {
  return (
    <ScrollView>
      <SearchInput />
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "200", fontSize: 16 }}>
            Subjects: <Text style={{ fontWeight: "bold" }}>All</Text>
          </Text>
          <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: 10 }} />
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontWeight: "200" }}>
            Sort by: <Text style={{ fontWeight: "bold" }}>Do first</Text>
          </Text>
          <FontAwesomeIcon icon={faArrowDown} style={{ marginLeft: 10 }} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 20,
          marginVertical: 15,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ fontSize: 20 }}>Tudesday 6</Text>
          <Text style={{ fontWeight: "200", marginLeft: 8 }}>4 tasks</Text>
        </View>
        <FontAwesomeIcon icon={faCalendarPlus} />
      </View>
      <View style={{ marginHorizontal: 8 }}>
        {tasks.map((task, idx) => (
           <Link
           key={task.id}
           href={{
             pathname: "/[id]",
             params: { id: task.id, task: JSON.stringify(task) },
           }}
           asChild
         >
           <TouchableOpacity style={{ marginBottom: 5 }}>
             <View style={[styles.tasks, { backgroundColor: task.color }]}>
               <View style={styles.taskIcon}>
                 <FontAwesomeIcon icon={task.icon} size={20} />
               </View>
               <View style={styles.textContainer}>
                 <Text style={styles.taskTitle}>{task.title}</Text>
                 <Text style={{ fontWeight: "200" }}>{task.duration}</Text>
               </View>
               <Text style={styles.completed}>{task.completed}</Text>
             </View>
           </TouchableOpacity>
         </Link>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeWork;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    margin: 10,
  },
  tasks: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 5,
    borderRadius: 20,
  },
  taskTitle: {
    fontWeight: "bold",
  },
  taskIcon: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 20,
    padding: 15,
    marginRight: 10,
    backgroundColor: "white",
  },
  completed: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
});
