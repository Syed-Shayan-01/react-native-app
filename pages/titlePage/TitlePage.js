import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const TitlePage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Educate</Text>
          <Text style={styles.titleTwo}>Hub</Text>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <IonIcon name="arrow-forward-outline" style={styles.btnTxt} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0975b0',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
  },
  logoContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: width * 0.13,
    paddingVertical: height * 0.03,
    borderRadius: Math.min(width, height) * 0.04,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: {
    fontSize: Math.min(width, height) * 0.09,
    fontWeight: 'bold',
    color: '#0975b0',
    textAlign: 'center',
  },
  titleTwo: {
    fontSize: Math.min(width, height) * 0.07,
    fontWeight: '600',
    color: '#0975b0',
    textAlign: 'center',
    marginTop: -height * 0.01,
  },
  btn: {
    backgroundColor: 'white',
    width: Math.min(width, height) * 0.15,
    height: Math.min(width, height) * 0.15,
    borderRadius: Math.min(width, height) * 0.075,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height * 0.05,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  btnTxt: {
    fontSize: Math.min(width, height) * 0.08,
    color: '#0975b0',
  },
});

export default TitlePage;
