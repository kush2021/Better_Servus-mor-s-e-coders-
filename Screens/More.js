/* The More.js file contains the code for the more options screen. */

/* Import statement. */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';

/* The different options. */
const data = [
  {id: 1, name: "Face ID"},
  {id: 2, name: "Change Password"},
  {id: 3, name: "Branch & ATM Locations"}, //not functional
  {id: 4, name: "Contact Us"},             //not functional
  {id: 5, name: "Feedback & Support"},     //not functional
]

/**
 * The More() function is called when the more options screen is opened.
 * @returns The screen to display.
 */
export default function More() {
  const navigation = useNavigation();

  /* Navigate to the correct screen. */
  const goToScreen = ({name}) => {
    switch(name) {
      case "Feedback & Support":
        navigation.navigate("More", {screen: "Feedback Support Page"});
        return;
      case "Face ID":
        navigation.navigate("More", {screen: "Face ID Page"});
        return;
      case "Change Password":
        navigation.navigate("More", {screen: "Change Password Page"})
        return;
      case "Branch & ATM Locations":
        navigation.navigate("More", {screen: "Branch ATM Page"});
        return;
      case "Contact Us":
        navigation.navigate("More", {screen: "Contact Us Page"});
        return;
    }
  };

  /* Define how the options should render. */
  const Item = ({ name }) => (
    <TouchableOpacity
      onPress={() => {
        goToScreen({name});
      }}
    >
      <View style={styles.item}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
  const renderItem = ({item}) => <Item name={item.name} />;
  
  /* Return the screen. */
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  )
}

/* The styles used. */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 10,
    },
    name: {
        fontSize: 15,
        fontFamily: "SFcompactRegular",
    },
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        padding: 20,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
});