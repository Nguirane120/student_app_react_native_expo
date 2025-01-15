import EventList from "@/components/EventList";
import Header from "@/components/Header";
import NextClass from "@/components/NextClass";
import SearchInput from "@/components/SearchInput";
import { eventList } from "@/fakeData";
import { Fragment } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={
            <Fragment>
              <Header />

              <SearchInput />

              <NextClass />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Events</Text>
                <Text style={{ fontSize: 20 }}>See alls</Text>
              </View>
            </Fragment>
          }
          data={eventList}
          renderItem={({ item }) => <EventList events={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
