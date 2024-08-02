import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  Linking,
} from 'react-native';

const {width} = Dimensions.get('window');

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    console.log('Signup attempt with:', {
      fullName,
      email,
      password,
      confirmPassword,
    });
    // Implement your signup logic here
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="#3F51B5" barStyle="light-content" />
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create Account</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#757575"
          value={fullName}
          onChangeText={text => setFullName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#757575"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#757575"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#757575"
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
        <View style={styles.loginPrompt}>
          <Text style={styles.loginPromptText}>Already have an account?</Text>
          <TouchableOpacity>
            <Text
              style={styles.loginLink}
              onPress={() => Linking.openURL('./App.js')}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  formContainer: {
    width: width * 0.9,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#3F51B5',
  },
  input: {
    height: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 12,
    borderRadius: 4,
    fontSize: 16,
    color: '#212121',
  },
  button: {
    backgroundColor: '#3F51B5',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    elevation: 2,
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginPrompt: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginPromptText: {
    color: '#757575',
    fontSize: 14,
  },
  loginLink: {
    color: '#3F51B5',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

export default SignupPage;
