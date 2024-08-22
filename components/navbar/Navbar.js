import {Link} from '@react-navigation/native';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');
const Navbar = ({title, linkTxt}) => {
  return (
    <>
      <View style={styles.header}>
        <Link to={linkTxt}>
          <Icon name="angle-left" size={24} color="#333333" />
        </Link>
        <Text style={styles.headerTitle}>{title}</Text>
        <Icon name="search" size={18} color="#333333" />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Math.min(width, height) * 0.04,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  headerTitle: {
    fontSize: Math.min(width, height) * 0.05,
    fontWeight: 'bold',
    color: '#333333',
  },
});
export default Navbar;
