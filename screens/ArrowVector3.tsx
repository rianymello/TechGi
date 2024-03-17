import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color } from "../GlobalStyles";

const ArrowVector3 = () => {
  return <View style={styles.arrowView} />;
};

const styles = StyleSheet.create({
  arrowView: {
    borderStyle: "solid",
    borderColor: Color.colorWhite,
    borderWidth: 13,
    flex: 1,
    width: "100%",
    height: 0,
    transform: [
      {
        rotate: "166.28deg",
      },
    ],
  },
});

export default ArrowVector3;
