import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';

// Get the screen dimensions
const {width, height} = Dimensions.get('window');

const Signup = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.topText}>
        <Text style={styles.mainText}>Sign up</Text>
        <Text style={styles.subText}>Welcome to my Website</Text>
      </View>
      <View style={styles.inputMain}>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          placeholderTextColor="#757575"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#757575"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#757575"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Sign up</Text>
        </TouchableOpacity>
        <View style={styles.pageNavigateText}>
          <Text style={styles.AccountOrNot}>Already have an account?</Text>
          <TouchableOpacity style={styles.SignupPageNavigateBtn}>
            <Text
              style={styles.SignupPageNavigateTxt}
              onPress={() => {
                navigation.navigate('Login');
              }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20, // Add some padding to the container
  },
  topText: {
    marginTop: height * 0.1, // Use percentage of screen height
    marginBottom: height * 0.05,
  },
  mainText: {
    fontSize: width * 0.08, // Use percentage of screen width
    fontWeight: 'bold',
    color: '#0975b0',
  },
  subText: {
    fontSize: width * 0.05,
    fontWeight: '600',
    letterSpacing: 1.5,
    color: '#666666',
  },
  inputMain: {
    marginVertical: height * 0.05,
  },
  input: {
    borderColor: '#0b94de',
    borderWidth: 1.6,
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.02,
    fontSize: width * 0.04,
    borderRadius: 12,
    color: '#666666',
  },
  button: {
    alignItems: 'flex-end',
    marginVertical: height * 0.03,
  },
  btnText: {
    borderRadius: 30,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.08,
    backgroundColor: '#0975b0',
    fontSize: width * 0.05,
    color: 'white',
    borderColor: '#0975b0',
    borderWidth: 1,
  },
  pageNavigateText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  AccountOrNot: {
    fontSize: width * 0.04,
    color: '#666666',
  },
  SignupPageNavigateTxt: {
    fontSize: width * 0.04,
    marginHorizontal: 3,
    color: '#0975b0',
    fontWeight: '700',
  },
});

export default Signup;
