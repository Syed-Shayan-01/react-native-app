import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.topText}>
        <Text style={styles.mainText}>Login</Text>
        <Text style={styles.subText}>Sign in to continue</Text>
      </View>
      <View style={styles.inputMain}>
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
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.pageNavigateText}>
          <Text style={styles.AccountOrNot}>Don't have an account?</Text>
          <TouchableOpacity style={styles.SignupPageNavigateBtn}>
            <Text
              style={styles.SignupPageNavigateTxt}
              onPress={() => {
                navigation.navigate('Signup');
              }}
            >
              Sign Up
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
    paddingHorizontal: width * 0.05, // Adjust horizontal padding
  },
  topText: {
    marginTop: height * 0.1, // Use percentage of screen height
    marginBottom: height * 0.05,
  },
  mainText: {
    fontSize: width * 0.08, // Use percentage of screen width
    fontWeight: 'bold',
    color: '#4058e3',
  },
  subText: {
    fontSize: width * 0.05,
    fontWeight: '600',
    letterSpacing: 1.5,
  },
  inputMain: {
    marginVertical: height * 0.05,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: width * 0.04, // Use percentage of screen width
    marginVertical: height * 0.02,
    fontSize: width * 0.04,
    borderRadius: 12,
    color: '#6b6a6a',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: height * 0.01,
  },
  btnText: {
    borderRadius: 30,
    paddingVertical: height * 0.015,
    paddingHorizontal: width * 0.1,
    backgroundColor: '#4058e3',
    fontSize: width * 0.05,
    color: 'white',
    borderColor: 'blue',
    borderWidth: 1,
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginVertical: height * 0.02,
  },
  forgotPasswordText: {
    color: '#4058e3',
    fontSize: width * 0.04,
  },
  pageNavigateText: {
    marginTop: height * 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  AccountOrNot: {
    fontSize: width * 0.04,
    color: '#6b6a6a',
  },
  SignupPageNavigateTxt: {
    fontSize: width * 0.04,
    marginHorizontal: 3,
    color: '#4058e3',
    fontWeight: '700',
  },
});

export default Login;
