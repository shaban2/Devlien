// import React, { Component } from 'react'
// import {
//   StyleSheet,
//   SafeAreaView,
//   TouchableOpacity,
//   View,
//   Text,
//   TextInput
// } from 'react-native'
// import firebase from 'react-native-firebase'

// class PhoneAuthScreen extends Component {
//   state = {
//     phone: '',
//     confirmResult: null,
//     verificationCode: '',
//     userId: ''
//   }
//   validatePhoneNumber = () => {
//     var regexp = /^\+[0-9]?()[0-9](\s|\S)(\d[0-9]{8,16})$/
//     return regexp.test(this.state.phone)
//   }

//   handleSendCode = () => {
//     // Request to send OTP
//     if (this.validatePhoneNumber()) {
//       firebase
//         .auth()
//         .signInWithPhoneNumber(this.state.phone)
//         .then(confirmResult => {
//           this.setState({ confirmResult })
//         })
//         .catch(error => {
//           alert(error.message)

//           console.log(error)
//         })
//     } else {
//       alert('Invalid Phone Number')
//     }
//   }

//   changePhoneNumber = () => {
//     this.setState({ confirmResult: null, verificationCode: '' })
//   }

//   handleVerifyCode = () => {
//     // Request for OTP verification
//     const { confirmResult, verificationCode } = this.state
//     if (verificationCode.length == 6) {
//       confirmResult
//         .confirm(verificationCode)
//         .then(user => {
//           this.setState({ userId: user.uid })
//           alert(`Verified! ${user.uid}`)
//         })
//         .catch(error => {
//           alert(error.message)
//           console.log(error)
//         })
//     } else {
//       alert('Please enter a 6 digit OTP code.')
//     }
//   }

//   renderConfirmationCodeView = () => {
//     return (
//       <View style={styles.verificationView}>
//         <TextInput
//           style={styles.textInput}
//           placeholder='Verification code'
//           placeholderTextColor='#eee'
//           value={this.state.verificationCode}
//           keyboardType='numeric'
//           onChangeText={verificationCode => {
//             this.setState({ verificationCode })
//           }}
//           maxLength={6}
//         />
//         <TouchableOpacity
//           style={[styles.themeButton, { marginTop: 20 }]}
//           onPress={this.handleVerifyCode}>
//           <Text style={styles.themeButtonTitle}>Verify Code</Text>
//         </TouchableOpacity>
//       </View>
//     )
//   }

//   render() {
//     return (
//       <SafeAreaView style={[styles.container, { backgroundColor: '#333' }]}>
//         <View style={styles.page}>
//           <TextInput
//             style={styles.textInput}
//             placeholder='Phone Number with country code'
//             placeholderTextColor='#eee'
//             keyboardType='phone-pad'
//             value={this.state.phone}
//             onChangeText={phone => {
//               this.setState({ phone })
//             }}
//             maxLength={15}
//             editable={this.state.confirmResult ? false : true}
//           />

//           <TouchableOpacity
//             style={[styles.themeButton, { marginTop: 20 }]}
//             onPress={
//               this.state.confirmResult
//                 ? this.changePhoneNumber
//                 : this.handleSendCode
//             }>
//             <Text style={styles.themeButtonTitle}>
//               {this.state.confirmResult ? 'Change Phone Number' : 'Send Code'}
//             </Text>
//           </TouchableOpacity>

//           {this.state.confirmResult ? this.renderConfirmationCodeView() : null}
//         </View>
//       </SafeAreaView>
//     )
//   }
// }


import firebase from "firebase"


const config={

    apiKey: "AIzaSyAGizeEBihrJ2RNp1PCQ2Cau9WrPOsODsQ",
    authDomain: "devlien.firebaseapp.com",
    databaseURL: "https://devlien.firebaseio.com",
    projectId: "devlien",
    storageBucket: "devlien.appspot.com",
    messagingSenderId: "303177444112",
    appId: "1:303177444112:web:af03168291d448d0a4d395"


}


firebase.initializeApp(config)

export default firebase;