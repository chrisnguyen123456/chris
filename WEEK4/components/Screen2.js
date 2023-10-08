import { View, Text, StyleSheet,Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Screen2() {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <View style={styles.productImage}>
          <Image style={styles.image} source={require('../assets/usb.png')}></Image>
        </View>
        <View style={styles.productDescription}>
          <Text style={styles.description}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
        </View>
      </View>
      <View style={styles.titleVote}>Cực kỳ hài lòng</View>
      <View style={styles.stars}>
        <Image style={styles.star} source={require('../assets/Star.png')}></Image>
        <Image style={styles.star} source={require('../assets/Star.png')}></Image>
        <Image style={styles.star} source={require('../assets/Star.png')}></Image>
        <Image style={styles.star} source={require('../assets/Star.png')}></Image>
        <Image style={styles.star} source={require('../assets/Star.png')}></Image>
      </View>
      <View style={styles.addImage}>
        <TouchableOpacity style={styles.add}>Thêm hình ảnh</TouchableOpacity>
        <View style={styles.imageCamera}>
          <Image style={styles.camera} source={require('../assets/camera.png')}></Image>
        </View>
      </View>
      <View style={styles.comment}>
        <TextInput style={styles.inputComment} 
          multiline={true} 
          placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
          placeholderTextColor="rgba(196, 196, 196, 1)"
        ></TextInput>
        <TouchableOpacity style={styles.link}>
          https://meet.google.com/nsj-ojwi-xpp
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.send}>Gửi</TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
    },
    productContainer : {
        width : '100%',
        height : 140,
        top : '1%',
        flexDirection : 'row',
        alignItems : 'center',
    },
    productImage : {
        width : 110,
        height : 110,
        marginLeft : '1%',
    }, 
    image : {
        width : 110,
        height : 110,
    },
    productDescription : {
        width : '70%',
        height : 110,
        marginLeft : '1%',
    },
    description : {
        width : '100%',
        height : '100%',
        fontSize : 20,
        fontWeight : 'bold',
        paddingLeft : 10,
    },
    titleVote : {
        width : '100%',
        height : 50,
        top : '5%',
        fontSize : 20,
        textAlign : 'center',
        justifyContent : 'center',
        fontWeight : 'bold',
    },
    stars : {
        display : 'flex',
        width : '100%',
        height : 50,
        top : '6%',
        flexDirection : 'row',
        justifyContent : 'center',
       
    },
    star : {
        width : 50,
        height : 50,
        backgroundColor : 'white',
        marginLeft : 5 ,
        marginRight : 5,
    },
    addImage : {
        width : '100%',
        height : 100,
        top : '10%',
        alignItems : 'center',
        
    }, 
    add : {
      width : '80%',
      height : '100%',
      backgroundColor : 'white',
      textAlign : 'center',
      justifyContent : 'center',
      fontSize : 20,
      fontWeight : 'bold',
      borderRadius : 10,
      borderWidth : 1,
    },
    imageCamera : {
      position : 'absolute',
      width : 50,
      height : 50,
      left : '20%',
      top : '25%',
    },
    camera : {
      width : '100%',
      height : '80%',
    },
    comment : {
        width : '100%',
        height : 300,
        backgroundColor : 'brown',
        top : '12%',
    }, 
    inputComment : {  
        width : '100%',
        height : 300,
        backgroundColor : 'white',
        top : '5%',
        fontSize : 20,
        borderRadius : 10,
        borderWidth : 1,
    },
    link : {
        width : '100%',
        height : 20,
        bottom : '0%',
        position : 'absolute',
        textAlign : 'right',
        paddingRight : 10,
    }, 
    send : {
        width : '90%',
        height : 70,
        backgroundColor : 'rgba(13, 93, 182, 1)',
        top : '15%',
        borderRadius : 10,
        alignSelf : 'center',
        textAlign : 'center',
        justifyContent : 'center',
        color : 'white',
        fontWeight : 'bold',
        fontSize : 30,
    }, 
    
})
