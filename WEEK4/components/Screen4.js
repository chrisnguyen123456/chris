import { useState } from 'react';
import { View, Text,Dimensions,StyleSheet,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-web';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Screen4() {

    const [number, setNumber] = useState(0);
    const incrementNumber = () => {
      setNumber(number + 1);
    };
    const decrementNumber = () => {
      if (number > 0) {
        setNumber(number - 1);
      }
    };

    const formattedAmount = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(number * 141800);

    const orderComplete = () => {
        setNumber(0);
        alert('Đặt hàng thành công');
        
    }

  return (
    <View style={styles.container}>
        <View style={styles.productContainer}>
            <View style={styles.productInfor}>
                <View style={styles.imageProduct}>
                    <Image style={styles.image} source={require('../assets/book.png')}></Image>
                </View>
                <View style={styles.descriptionContainer}>
                    <View style={styles.description}>Nguyên hàm tích phân và ứng dụng</View>
                    <View style={styles.description}>Cung cấp bởi Tiki Trading</View>
                    <View style={styles.price}>141.800 đ</View>
                    <View style={styles.listedPrice}>141.800 đ</View>
                    <View style={styles.description}>
                        <TouchableOpacity style={styles.button} 
                            onPress={decrementNumber}
                        >-</TouchableOpacity>
                        <TextInput style={styles.quantity} value={0} 
                            onChangeText={setNumber}
                        ></TextInput>
                        <TouchableOpacity style={styles.button} 
                            onPress={incrementNumber}
                        >+</TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.buyLater}>Mua sau</TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.cuponTitle}>
                <View style={styles.titleCup}>Mã giảm giá đã lưu</View>
                <TouchableOpacity style={styles.touchCup}>Xem tại đây</TouchableOpacity>
            </View>
            <View style={styles.voucherContainer}>
                <View style={styles.voucher}>
                    <Image style={styles.yellowBlock} source={require('../assets/yellow_block.png')}></Image>
                    Mã giảm giá</View>
                <TouchableOpacity style={styles.apply}>Áp dụng</TouchableOpacity>
            </View>
        </View>
        <View style={styles.cuponContainer}>
            <View style={styles.code}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</View>
            <View style={styles.enterCode}>Nhập tại đây?</View>
        </View>
        <View style={styles.orderContainer}>
            <View style={styles.tempPrice}>
                <View style={styles.tamtinhTitle}>Tạm tính</View>
                <TextInput style={styles.tienTam} value={formattedAmount}></TextInput>
            </View>
            <View style={styles.payContainer}>
                <View style={styles.thanhtien}>
                    <View style={styles.thanhtienTitle}>Thành tiền</View>
                    <TextInput style={styles.tien} value={formattedAmount}></TextInput>
                </View>
                <TouchableOpacity style={styles.btnThanhToan}
                    onPress={orderComplete}
                >TIẾN HÀNH ĐẶT HÀNG</TouchableOpacity>
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        height: windowHeight,
        flexDirection: 'column',
        justifyContent : 'space-between',
        backgroundColor : '#C4C4C4'
    },
    productContainer : {
        width: '100%',
        height : '43%',
        backgroundColor : 'white'
    },
    cuponContainer : {
        width: '100%',
        height : '10%',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : 'white'
    },
   
    productInfor : {
        alignSelf : 'center',
        width : '95%',
        height : 230,
        backgroundColor : 'white',
        top : '3%',
        flexDirection : 'row',
    },
    imageProduct : {
        width : 150,
        height : '100%',
        justifyContent : 'center',
        alignItems : 'center',
    },
    description : {
        width : '100%',
        height : 15,
        flexDirection : 'row',
    },
    descriptionContainer : {
        width : windowWidth - windowWidth*0.05 - 150,
        height : '70%',
        flexDirection : 'column',
        justifyContent : 'space-around',
        top : '17%'
    },
    image : {
        width : 120,
        height : 140,
    },
    buyLater : {
        position : 'absolute',
        right : 5,
        bottom : 20,
    },
    button : {
        fontWeight : 'bold',
        color : 'black',
        width : 30,
        height : 15,textAlign : 'center',
        backgroundColor : '#C4C4C4',
    }, 
    quantity : {
        width : 30,
        height : 15,
        fontWeight : 'bold',
        textAlign : 'center',
    }, 
    listedPrice : {
        textDecorationLine : 'line-through',
    },
    price : {
        fontWeight : 'bold',
        color : 'red',
        fontFamily : 'Roboto',
        fontSize : 25,
    }, 
    cuponTitle : {
        width : '70%',
        height : 20 ,
        top : '7%',
        left : '2.5%',
        flexDirection : 'row',
    },
    titleCup : {
        width : '50%',
        height : '100%',
        fontWeight : 'bold',
        justifyContent : 'center',
    },
    touchCup : {
        width : '50%',
        height : '100%',
        justifyContent : 'center',
        color : '#134FEC',
    },
    voucherContainer : {
        width : '95%',
        height : 70,
        top : '11%',
        alignSelf : 'center',
        flexDirection : 'row',
        justifyContent : 'space-between',
       
    }, 
    voucher : {
        width : '65%',
        height : '100%',
        fontWeight : 'bold',
        fontSize : 25,
        textAlign : 'center',
        justifyContent : 'space-around',
        alignItems : 'center',
        flexDirection : 'row',
        borderWidth : 3,
        borderColor : 'yellow'
    },
    apply : {
        width : '30%',
        height : '100%',
        fontWeight : 'bold',
        fontSize : 25,
        textAlign : 'center',
        justifyContent  : 'center',
        color : 'white',
        backgroundColor : '#0A5EB7'
    },
    yellowBlock : {
        width : 70,
        height : 30,
    },
    code : {
        width : '70%',
        height : '80%',
        justifyContent : 'center',
        alignContent : 'center',
        alignItems : 'center',
        fontWeight : 'bold',
    },
    enterCode : {
        width : '30%',
        height : '80%',
        justifyContent : 'center',
        alignContent : 'center',
        alignItems : 'center',
        color : '#134FEC'
    },
    orderContainer : {
        width: '100%',
        height : '43%',
        justifyContent : 'space-between',
    },
    tempPrice : {
        width : '100%',
        height : '20%',
        backgroundColor : 'white',
        flexDirection : 'row',
    },
    tamtinhTitle : {
        width : '50%',
        height : '100%',
        justifyContent : 'center',
        fontWeight : 'bold',
        fontSize : 25,
        paddingLeft : 10,
    },
    tienTam : {
        width   : '50%',
        fontSize : 25 ,
        color  : 'red',
        fontWeight : 'bold',
        textAlign : 'center',
    },
    payContainer : {
        width : '100%',
        height : '30%',
        backgroundColor : 'white',
        bottom : '5%',
        justifyContent : 'space-between',
    },
    
    thanhtien : {
        display : 'flex',
        width : '100%',
        height : '50%',
        flexDirection : 'row',
        
    },
    thanhtienTitle : {
        width : '50%',
        height : '100%',
        justifyContent : 'center',
        fontWeight : 'bold',
        fontSize : 25,
        paddingLeft : 25,
        color : '#808080'
    },
    tien : {
        width   : '50%',
        fontSize : 25 ,
        color  : 'red',
        fontWeight : 'bold',
        textAlign : 'right',
        paddingRight : 25,
    },
    btnThanhToan : {
        width : '90%',
        height : '40%',
        backgroundColor : 'red',
        alignSelf : 'center',
        backgroundColor : '#E53935',
        textAlign : 'center',justifyContent : 'center',
        color : 'white',
        fontWeight : 'bold',fontFamily : 'Roboto',
        bottom : '5%',
    },
});
