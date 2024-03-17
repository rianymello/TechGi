import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Coracaofavoritefill = () => {
  return (
    <View style={styles.coracaofavoritefill}>
      <Image
        style={styles.heartIcon}
        contentFit="cover"
        source={require("../assets/heart1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heartIcon: {
    position: "absolute",
    height: "78.89%",
    width: "76.67%",
    top: "14.81%",
    right: "11.21%",
    bottom: "6.3%",
    left: "12.12%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  coracaofavoritefill: {
    flex: 1,
    width: "100%",
    height: 27,
    overflow: "hidden",
  },
});

export default Coracaofavoritefill;
