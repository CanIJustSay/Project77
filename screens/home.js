import * as React from "react";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from "react-native";
import Map from "./starmap";
import Craft from "./crafts";
import Pic from "./pic";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      issLoc: "",
    };
  }
  switchNav = (button) => {
    this.props.navigation.navigate(button);
  };

  render() {
    return (
      <View style={s.container}>
        <SafeAreaView style={s.safeStyle} />
        <ImageBackground
          source={require("../assets/bg_image.png")}
          style={s.bg}
        >
          <TouchableOpacity
            style={s.btnStyle}
            onPress={() => {
              this.switchNav("Pic");
            }}
          >
            <Image
              source={require("../assets/iss_icon.png")}
              style={{
                width: 110,
                height: 110,
                position: "absolute",
                left: 0,
                top: -10,
                resizeMode: "contain",
              }}
            ></Image>
            <Text style={{ textAlign: "center", fontSize: 40, color: "white" }}>
              Picture
            </Text>
            <Text
              style={{
                color: "red",
                position: "relative",
                textAlign: "center",
                top: 20,
              }}
            >
              Know More --{">"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.switchNav("Craft");
            }}
            style={s.btnStyle}
          >
            <Image
              source={require("../assets/meteor_icon.png")}
              style={{ position: "absolute", left: -60, top: -40 }}
            ></Image>
            <Text style={{ textAlign: "center", fontSize: 40, color: "white" }}>
              Crafts
            </Text>
            <Text
              style={{
                color: "red",
                position: "relative",
                textAlign: "center",
                top: 20,
              }}
            >
              Know More --{">"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.switchNav("Map");
            }}
            style={s.btnStyle}
          >
            <Image
              source={require("../assets/rocket_icon.png")}
              style={{
                position: "absolute",
                top: -40,
                left: -70,
                transform: [{ rotate: "-45deg" }],
              }}
            ></Image>
            <Text style={{ textAlign: "center", fontSize: 40, color: "white" }}>
              Map
            </Text>
            <Text
              style={{
                color: "red",
                position: "relative",
                textAlign: "center",
                top: 20,
              }}
            >
              Know More --{">"}
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeStyle: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
  },
  btnStyle: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.7)",
    height: 100,
    marginTop: 100,
  },
});
