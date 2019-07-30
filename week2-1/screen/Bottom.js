import React, { Component } from "react";
import { View } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

const ICON_SIZE = 26;
class Bottom extends Component {
  render() {
    return (
      <View
        style={{
          flex: 0.05,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        <AntDesign name="home" size={ICON_SIZE} color="black" />

        <Feather name="plus-circle" size={ICON_SIZE} color="black" />

        <AntDesign name="user" size={ICON_SIZE} color="black" />
      </View>
    );
  }
}

export default Bottom;
