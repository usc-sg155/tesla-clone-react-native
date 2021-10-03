import React from "react";
import { View, Text } from "react-native";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import StyledButton from "../StyleButton";
import styles from "./styles";

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Tesla</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
      <StyledButton
        type="primary"
        content={"Custom Order"}
        onPress={() => {
          console.log("Customer Order was pressed");
        }}
      />
      <StyledButton
        type="secondary"
        content={"Existing Inventory"}
        onPress={() => {
          console.log("Customer Order was pressed");
        }}
      />
    </View>
  );
};

export default CarItem;
