import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');
const HomePage = () => {
  return (
    <View>
      <View style={styles.navbar}>
        <Text>
          <IonIcon name="menu-outline" style={styles.menuicon} />
        </Text>
        <Text style={styles.homeTxt}>Home Page</Text>
        <Text style={styles.userIcon}>
          <FeatherIcon name="user" style={styles.userIcon} />
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <SafeAreaView>
          <View style={styles.inputWrapper}>
            <Icon name="search" size={20} color="#a0a0a0" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Search..."
              placeholderTextColor="#a0a0a0"
            />
          </View>
        </SafeAreaView>
      </View>
      <View >
        <Text style={styles.textRecommend}>
          Recomended for You
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
  },
  menuicon: {
    fontSize: 30,
    color: 'black',
  },
  homeTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5e5e5e',
  },
  userIcon: {
    fontSize: 25,
    backgroundColor: '#0975b0',
    padding: 6,
    borderRadius: 100,
    color: 'white',
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 1,
    paddingVertical: height * 0.05,
    paddingHorizontal: width * 0.05,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#0975b0',
    borderWidth: 1.2,
    borderRadius: 7,
    paddingHorizontal: width * 0.03,
  },
  icon: {
    position: 'absolute',
    right: 10,
    fontSize: 22,
    fontStyle: 'normal',

  },
  textRecommend:{
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: width * 0.06,
    marginVertical: height * 0.03,
    color: '#5e5e5e',
  }
});

export default HomePage;
