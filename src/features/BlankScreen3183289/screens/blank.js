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

import { Component } from 'react'
import { AppRegistry } from 'react-native'
class App extends Component {
  state = {
      email: '',
     password: '',
  };
  onSubmit = (e) => {
     this.props.onSubmit(this.state.email, this.state.password)

};
  

render() {

const { email, password } = this.state;

return (

<View style={styles.container}>

<TextInput

style={styles.textInput}

placeholder='Email'

value={email}

onChangeText={text => this.onChangeText(text)}

/>

<TextInput

style={styles.textInput}

placeholder='Password'

value={password}

onChangeText={text => this.onChangeText(text)}

/>

<TouchableOpacity

style={styles.button}

onPress={this.onSubmit}

>

<Text style={styles.buttonText}>Sign in</Text>

</TouchableOpacity>

</View>

);

}
}

const styles = StyleSheet.create({

container: {

flex: 1,

justifyContent: 'center',

alignItems: 'stretch',

padding: 20

},

textInput: {

height: 40,

padding: 15,

width: "95%",

borderColor: "blue",

borderWidth: 1,

marginBottom: 20

},

button: {

backgroundColor: "white",

color: "blue",

borderWidth: 1,

borderRadius: 5,

padding: 20,

margin: 20,

fontSize: 20

},

buttonText: {

color: "white",

fontSize: 20

}

})

AppRegistry.registerComponent('App', () => App)
