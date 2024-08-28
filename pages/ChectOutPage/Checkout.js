import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import Navbar from '../../components/navbar/Navbar';
import {Link} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
const {width, height} = Dimensions.get('window');
export default function CheckoutScreen() {
  return (
    <>
      <View>
        <Navbar titleName={'Check Out'} LinkText={`/Cart`} />
      </View>

      <View style={styles.containerShipping}>
        <View>
          <Text style={styles.headingTxt}>Shipping Address</Text>
        </View>

        <View style={styles.addressContainer}>
          <Text style={styles.authorName}>Syed Shayan</Text>
          <View style={styles.homeAddressContainer}>
            <Icon
              name={'home'}
              size={17}
              style={{
                color: '#0975b0',
                fontSize: Math.min(width, height) * 0.05,
              }}
            />

            <Text style={styles.homeAddress}>House No. 117, Sector 13 A</Text>
          </View>

          <Text style={styles.nearestAddress}>
            fujljaofjjsjfajlajuohuoguosogfjjhghkhjghkghfkhgfhdhghdkhfghkhdjkgsjhjhdgfjhkdfkghdkfk
          </Text>
          <Link to={''} style={styles.changeTxt}>
            Change
          </Link>
        </View>
      </View>
      <View>
        <View style={styles.containerShipping}>
          <Text style={styles.headingTxt}>Payment</Text>
        </View>

        <View style={styles.addressContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFZtsFJjL4jN9mdptS_gggmHxmEtrv_uVWHQ&s',
                }}
                style={{
                  width: width * 0.08,
                  height: height * 0.04,
                  resizeMode: 'cover',
                  marginRight: 10
                }}
              />
            </View>

            <Text style={styles.nearestAddress}>479283*********</Text>
          </View>
          
          <Link to={''} style={styles.changeTxt}>
            Change
          </Link>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerShipping: {
    padding: Math.min(width, height) * 0.04,
  },
  headingTxt: {
    fontSize: Math.min(width, height) * 0.045,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  addressContainer: {
    elevation: 3,
    backgroundColor: 'white',
    marginHorizontal: width * 0.04,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
    borderRadius: Math.min(width, height) * 0.02,
  },
  authorName: {
    fontSize: Math.min(width, height) * 0.04,
    fontWeight: 'bold',
    marginBottom: height * 0.004,
    color: '#666666',
  },
  homeAddressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  homeAddress: {
    fontSize: Math.min(width, height) * 0.035,
    color: '#666',
    marginLeft: width * 0.02,
    textAlign: 'justify',
  },
  nearestAddress: {
    fontSize: Math.min(width, height) * 0.035,
    color: '#666',
    marginTop: height * 0.005,
    lineHeight: Math.min(width, height) * 0.045,
  },
  changeTxt: {
    position: 'absolute',
    right: width * 0.04,
    top: height * 0.02,
    fontSize: Math.min(width, height) * 0.032,
    fontWeight: '800',
    color: '#0975b0',
    letterSpacing: 0.3,
  },
});
