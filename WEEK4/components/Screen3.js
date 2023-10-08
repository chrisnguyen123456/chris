import React,{ useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { TextInput, TouchableOpacity } from 'react-native-web';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Screen3 = () => {
  const [isCheckedLowcase, setIsCheckedLowcase] = useState(false);
  const toggleCheckBoxLowcase = () => {
    setIsCheckedLowcase(!isCheckedLowcase);
  };

  const [isCheckedUpcase, setIsCheckedUpcase] = useState(false);
  const toggleCheckBoxUpcase = () => {
    setIsCheckedUpcase(!isCheckedUpcase);
  };

  const [isCheckedNumber, setIsCheckedNumber] = useState(false);
  const toggleCheckBoxNumber = () => {
    setIsCheckedNumber(!isCheckedNumber);
  };

  const [isCheckedSymbol, setIsCheckedSymbol] = useState(false);
  const toggleCheckBoxSymbol = () => {
    setIsCheckedSymbol(!isCheckedSymbol);
  };

  const [numberInput, setNumberInput] = useState('');
  const handleNumberInputChange = (text) => {
    setNumberInput(text);
  };

  const [generatedPassword, setGeneratedPassword] = useState('');

  const handlerGeneratePassword = () => {
    let characters = '';
    let password = '';
  
    if (isCheckedLowcase) {
      characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (isCheckedUpcase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (isCheckedNumber) {
      characters += '0123456789';
    }
    if (isCheckedSymbol) {
      characters += '!@#$%^&*()_+~`|}{[]:;?><,./-='
    }
    for (let i = 0; i < numberInput; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setGeneratedPassword(password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backgroundIn}>
        <View style={styles.title}>PASSWORD GENERATOR</View>
        <View style={styles.passOut}>
          <TextInput style={styles.pass} placeholder="Your Password" value={generatedPassword}></TextInput>
        </View>
        <View style={styles.fieldContainer}>
          <View style={styles.fieldContainerItem}>
            <View style={styles.fieldTitle}>Password length</View>
            <TextInput style={styles.inputNum } onChangeText={handleNumberInputChange}></TextInput>
          </View>
          <View style={styles.fieldContainerItem}>
            <View style={styles.fieldTitle}>Include lower case letters</View>
            <View style={styles.checkBox}>
              <CheckBox  size={40}  
                  checked={isCheckedLowcase}
                  onPress={toggleCheckBoxLowcase}>
              </CheckBox>
            </View>
          </View>
          <View style={styles.fieldContainerItem}>
            <View style={styles.fieldTitle}>Include upcase letters</View>
            <View style={styles.checkBox}>
              <CheckBox size={40}
                  checked={isCheckedUpcase}
                  onPress={toggleCheckBoxUpcase}>
              </CheckBox>
            </View>
          </View>
          <View style={styles.fieldContainerItem}>
            <View style={styles.fieldTitle}>Include number</View>
            <View style={styles.checkBox}>
              <CheckBox size={40}
                checked={isCheckedNumber}
                onPress={toggleCheckBoxNumber}
              ></CheckBox>
            </View>
          </View>
          <View style={styles.fieldContainerItem}>
            <View style={styles.fieldTitle}>Include special symbol</View>
            <View style={styles.checkBox}>
              <CheckBox size={40}
                checked={isCheckedSymbol}
                onPress={toggleCheckBoxSymbol}
              ></CheckBox>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.generateButton}
          onPress={handlerGeneratePassword}
        >GENERATE PASSWORD 
        </TouchableOpacity>
      </View>
      
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'radial-gradient(circle, #C4C4C4 0%, #3B3B98 100%)',
  },
  backgroundIn : {
    width : '90%',
    height : '90%',
    backgroundColor : '#23235B',
    borderRadius : 20,
  },
  title : {
    width : 180,
    height : 64,
    alignSelf : 'center',
    top : '9%',
    fontSize : 25,
    fontWeight : 'bold',
    textAlign : 'center',
    fontFamily : 'Roboto',
    color : 'white'
  },
  passOut : {
    width : '90%',
    height : '10%',
    backgroundColor : 'white',
    alignSelf : 'center',
    top : '14%',
    textAlign : 'center',
    justifyContent : 'center',
    fontSize : 20,
    fontWeight : 'bold',
    fontFamily : 'Roboto',
    
  },
  fieldContainer : {
    width : '90%',
    height : '48%',
    alignSelf : 'center',
    top : '18.5%',
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'space-around',
  },
  fieldContainerItem : {
    width : '90%',
    height : 40,
    alignSelf : 'center',
    flexDirection : 'row',
    justifyContent : 'space-between', 
  },
  fieldTitle : {
    width : '75%',
    height : '100%',
    color : 'white',
    fontSize : 20,
    fontWeight : 'bold',
    justifyContent : 'center',
    paddingLeft : 10,
  },
  checkBox : {
    // flex : 1,
    width : 40,
    height : 40,
    justifyContent : 'center',
    alignItems : 'center',
    textAlign : 'center',
  },
  inputNum : {
    width : 40,
    height : 40,
    justifyContent : 'center',
    alignItems : 'center',
    textAlign : 'center',
    backgroundColor : 'white',
  },
  pass : {
    width : '90%',
    height : '90%',
    alignSelf : 'center',
    textAlign : 'center',
    justifyContent : 'center',
    fontSize : 20,
    fontWeight : 'bold',
    fontFamily : 'Roboto',
    textDecorationLine : 'underline',
    textDecorationStyle : 'solid',
    textDecorationColor : 'black',
  },
  generateButton : {
    width : '90%',
    height : 50,
    backgroundColor : 'white',
    alignSelf : 'center',
    top : '23%',
    backgroundColor : '#3B3B98',
    borderRadius : 10,
    color : 'white',
    textAlign : 'center',
    justifyContent : 'center',
    fontWeight : 'bold',
    fontSize : 20,
  },
});

export default Screen3;
