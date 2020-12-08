import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_12_16} />
      <View style={styles.View_12_5}>
        <Text style={styles.Text_12_5}>lens</Text>
      </View>
      <View style={styles.View_12_10} />
      <View style={styles.View_12_11}>
        <Text style={styles.Text_12_11}>Username</Text>
      </View>
      <View style={styles.View_12_12} />
      <View style={styles.View_12_13}>
        <Text style={styles.Text_12_13}>Password</Text>
      </View>
      <View style={styles.View_12_14} />
      <View style={styles.View_12_15}>
        <Text style={styles.Text_12_15}>SIGN IN</Text>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_12_16: {
    width: 375,
    minWidth: 375,
    height: 667,
    minHeight: 667,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_12_5: {
    width: 64,
    minWidth: 64,
    height: 63,
    minHeight: 63,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 155,
    top: 302
  },
  Text_12_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 42,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_12_10: {
    width: 250,
    minWidth: 250,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 403,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.25
  },
  View_12_11: {
    width: 105,
    minWidth: 105,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 70,
    top: 407
  },
  Text_12_11: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_12_12: {
    width: 250,
    minWidth: 250,
    height: 30,
    minHeight: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 453,
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.25
  },
  View_12_13: {
    width: 105,
    minWidth: 105,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 70,
    top: 457
  },
  Text_12_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_12_14: {
    width: 103,
    minWidth: 103,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 136,
    top: 519,
    backgroundColor: "rgba(248, 196, 65, 1)",
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: "1",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4
  },
  View_12_15: {
    width: 48,
    minWidth: 48,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 163,
    top: 521
  },
  Text_12_15: {
    color: "rgba(2, 131, 172, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_2: { height: 667 }
})
