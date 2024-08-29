// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native';

// const {width, height} = Dimensions.get('window');
// export default function FooterButton({btnTxt, onPress}) {
//   return (
//     <View style={styles.footer}>
//       <TouchableOpacity style={styles.addToCartButton} onPress={onPress}>
//         <Text style={styles.buttonText}>{btnTxt}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   footer: {
//     flexDirection: 'row',
//     // justifyContent: 'center',
//     alignItems: 'center',
//     // padding: 15,
//     backgroundColor: 'white',
//     borderTopWidth: 1,
//     borderTopColor: '#e0e0e0',
//     // elevation: 50,
//     position: 'relative',
//     bottom: -height * 0.02,
//   },
//   addToCartButton: {
//     backgroundColor: '#0975b0',
//     padding: 15,
//     borderRadius: 5,
//     width: width * 0.9,
//   },
//   buttonText: {
//     fontSize: 16,
//     textAlign: 'center',

//     fontWeight: 'bold',
//     color: 'white',
//   },
// });

import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const FooterButton = ({title, onPress, color, textColor}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: color}]}
          onPress={onPress}>
          <Text style={[styles.buttonText, {color: textColor}]}>{title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
  },
  container: {
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FooterButton;
