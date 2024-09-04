import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

const Signup = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F0F4F8" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidingView}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Text style={styles.mainText}>Create Account</Text>
            <Text style={styles.subText}>Join our community today</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <Icon name="user" size={20} color="#4A90E2" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#757575"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon name="envelope" size={20} color="#4A90E2" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#757575"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon name="lock" size={20} color="#4A90E2" style={styles.inputIcon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#757575"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.passwordToggle}>
                <Icon name={showPassword ? "eye-slash" : "eye"} size={20} color="#4A90E2" />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.socialSignupContainer}>
            <Text style={styles.socialSignupText}>Or sign up with</Text>
            <View style={styles.socialButtons}>
              <TouchableOpacity style={styles.socialButton}>
                <Icon name="google" size={20} color="#DB4437" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Icon name="facebook" size={20} color="#4267B2" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <Icon name="apple" size={20} color="#000000" />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: width * 0.05,
    paddingBottom: height * 0.05,
  },
  header: {
    marginTop: height * 0.08,
    marginBottom: height * 0.05,
  },
  mainText: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: height * 0.01,
  },
  subText: {
    fontSize: width * 0.04,
    color: '#666666',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: width * 0.05,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    borderRadius: 12,
    marginBottom: height * 0.02,
    paddingHorizontal: width * 0.03,
  },
  inputIcon: {
    marginRight: width * 0.02,
  },
  input: {
    flex: 1,
    paddingVertical: height * 0.015,
    fontSize: width * 0.04,
    color: '#333333',
  },
  passwordToggle: {
    padding: width * 0.02,
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    paddingVertical: height * 0.02,
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: width * 0.045,
    fontWeight: 'bold',
  },
  socialSignupContainer: {
    marginTop: height * 0.04,
    alignItems: 'center',
  },
  socialSignupText: {
    fontSize: width * 0.035,
    color: '#666666',
    marginBottom: height * 0.02,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.06,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: height * 0.04,
  },
  loginText: {
    fontSize: width * 0.035,
    color: '#666666',
  },
  loginLink: {
    fontSize: width * 0.035,
    color: '#4A90E2',
    fontWeight: 'bold',
  },
});

export default Signup;