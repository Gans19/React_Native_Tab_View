// import { StatusBar } from 'expo-status-bar';
// import {
//   Dimensions,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// export default function App() {
//   const ListTab = ["Events", "Clubs", "Gallery"];

//   const ListView = [
//     {
//       Events: {
//         content: "Events",
//       },
//     },
//     {
//       Clubs: {
//         Clubs: "Clubs",
//       },
//     },
//     {
//       Gallery: {
//         Gallery: "Gallery",
//       },
//     },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar style="light" />

//       <View style={styles.ListTab}>
//         {ListTab &&
//           ListTab.map((tab) => {
//             return (
//               <View>
//                 <TouchableOpacity style={styles.BtnTab}>
//                   <Text>{tab}</Text>
//                 </TouchableOpacity>
//                 {ListTab &&
//                   ListTab.map((tab) => {
//                     return (
//                       <View>
//                         <Text>{tab}</Text>
//                       </View>
//                     );
//                   })}
//               </View>
//             );
//           })}
//         {/* <TouchableOpacity style={styles.BtnTab}>
//           <Text>Events</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.BtnTab}>
//           <Text>Clubs</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.BtnTab}>
//           <Text>Gallery</Text>
//         </TouchableOpacity> */}
//       </View>
//     </SafeAreaView>
//   );
// }

// import * as React from "react";
// import { View, useWindowDimensions } from "react-native";
// import { TabView, SceneMap } from "react-native-tab-view";

// const FirstRoute = () => (
//   <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
// );

// const SecondRoute = () => (
//   <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
// );

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
// });

// export default function App() {
//   const layout = useWindowDimensions();

//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     { key: "first", title: "First" },
//     { key: "second", title: "Second" },
//   ]);

//   return (
//     <TabView
//       navigationState={{ index, routes }}
//       renderScene={renderScene}
//       onIndexChange={setIndex}
//       // initialLayout={{ width: layout.width }}
//       style={{
//         borderBlockColor: "white",
//         borderRadius: "25px",
//         width: "80%",
//         // margin: "20px",
//       }}
//     />
//   );
// }

import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Meetings from "./Meetings";

// Define components for each tab
const EventsComponent = () => <Text>Events Component</Text>;
const ClubsComponent = () => <Text>Clubs Component</Text>;
const GalleryComponent = () => <Text>Gallery Component</Text>;

export default function App() {
  const ListTab = ["Events", "Clubs", "Gallery", "Meetings"];
  const [selectedTab, setSelectedTab] = useState(ListTab[0]);

  const ContentView = {
    Events: EventsComponent,
    Clubs: ClubsComponent,
    Gallery: GalleryComponent,
    Meetings: Meetings,
  };

  const SelectedComponent = ContentView[selectedTab];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.ListTab}>
        {ListTab.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.BtnTab}
            onPress={() => setSelectedTab(tab)}
          >
            <Text style={{ fontWeight: "bold" }}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.contentTab}>
        <SelectedComponent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FAF2D3",
    // alignItems: "center",
    // alignSelf: "center",
    // justifyContent: "center",
    paddingHorizontal: 10,
    // height: "100%",
  },
  ListTab: {
    // flex: 1,
    // backgroundColor: "white",
    marginTop: 50,
    flexDirection: "row",
    padding: 15,
    alignSelf: "center",
  },
  BtnTab: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: Dimensions.get("window").width / 4.5,
    fontWeight: "bold",
    padding: 10,
    justifyContent: "center",
    borderBlockColor: "gray",
    borderWidth: 0.5,
    borderRadius: 15,
    marginRight: 5,
    backgroundColor: "white",
  },
  contentTab: {
    flex: 1,
    // margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    // alignContent: "center",
    // alignSelf: "center",
    // textAlign: "center",
    // alignContent: "center",
    backgroundColor: "#FAF2D3",
    width: Dimensions.get("window").width,
  },
});
