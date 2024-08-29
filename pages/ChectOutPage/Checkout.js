import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Navbar from '../../components/navbar/Navbar';
import {Link} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FooterButton from '../../components/button/Button';
const {width, height} = Dimensions.get('window');
export default function CheckoutScreen() {
  return (
    <View style={{flex : 1}}>
      <ScrollView>
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

        <View style={styles.containerPayment}>
          <View>
            <Text style={styles.headingTxt}>Payment</Text>
          </View>

          <View style={styles.CardNumsContainer}>
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
                    marginRight: 10,
                  }}
                />
              </View>
              <View>
                <Text style={styles.cardAddress}>479283*********</Text>
              </View>
            </View>

            <Link to={''} style={styles.changeTxt}>
              Change
            </Link>
          </View>
        </View>

        <View style={styles.containerDeliveryMethod}>
          <View>
            <Text style={styles.headingTxt}>Delivery Method</Text>
          </View>

          <View style={styles.deliveryMethodContainer}>
            <View
              style={{
                backgroundColor: 'white',
                elevation: 2,
                paddingHorizontal: width * 0.022,
                borderRadius: Math.min(width, height) * 0.02,
              }}>
              <View>
                <Image
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/LeopardsLogo.png/1200px-LeopardsLogo.png',
                  }}
                  style={{
                    width: width * 0.2,
                    height: height * 0.1,
                    resizeMode: 'cover',
                    margin: 'auto',
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    marginBottom: height * 0.015,
                    fontSize: Math.min(width, height) * 0.03,
                    color: '#666',
                  }}>
                  3-5 days
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: 'white',
                elevation: 2,
                paddingHorizontal: width * 0.022,
                borderRadius: Math.min(width, height) * 0.02,
              }}>
              <View>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-ob1iXW7B4y9gCA3CsbC5GM-jemAk0d78A&s',
                  }}
                  style={{
                    width: width * 0.2,
                    height: height * 0.1,
                    resizeMode: 'cover',
                    margin: 'auto',
                    // marginRight: 10,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    marginBottom: height * 0.015,
                    fontSize: Math.min(width, height) * 0.03,
                    color: '#666',
                  }}>
                  3-5 days
                </Text>
              </View>
            </View>

            <View
              style={{
                backgroundColor: 'white',
                elevation: 2,
                paddingHorizontal: width * 0.022,
                borderRadius: Math.min(width, height) * 0.02,
              }}>
              <View>
                <Image
                  source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTolLJuanpOVjw2buRubhmBAXW4TltITLloDW9czG-JMr_AnW6AcRx57N4gRItakoPR8iU&usqp=CAU',
                  }}
                  style={{
                    width: width * 0.2,
                    height: height * 0.1,
                    resizeMode: 'cover',
                    margin: 'auto',
                    // marginRight: 10,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    marginBottom: height * 0.015,
                    fontSize: Math.min(width, height) * 0.03,
                    color: '#666',
                  }}>
                  3-5 days
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.containerSummary}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.orderTxt}>Order:</Text>
            <Text style={styles.priceTxt}>112$</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.deliveryTxt}>Delivery:</Text>
            <Text style={styles.priceTxt}>28$</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.summaryTxt}>Summary:</Text>
            <Text style={styles.priceTxt}>{112 + 28}$</Text>
          </View>
        </View>
      </ScrollView>
      <FooterButton
        title="SUBMIT ORDER"
        onPress={() => handleSubmitOrder()}
        // Optionally, you can customize colors:
        color="#0975b0"
        textColor="white"
      />
    </View>
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

  // Payment

  containerPayment: {
    padding: Math.min(width, height) * 0.04,
  },
  CardNumsContainer: {
    elevation: 3,
    backgroundColor: 'white',
    marginHorizontal: width * 0.04,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
    borderRadius: Math.min(width, height) * 0.02,
  },
  cardAddress: {
    fontSize: Math.min(width, height) * 0.035,
    fontWeight: 'bold',
    color: '#666666',
    marginLeft: width * 0.02,
    lineHeight: Math.min(width, height) * 0.045,
    textAlign: 'justify',
  },

  // Delivery Method
  containerDeliveryMethod: {
    padding: Math.min(width, height) * 0.04,
  },
  deliveryMethodContainer: {
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
    borderRadius: Math.min(width, height) * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Summary
  containerSummary: {
    marginHorizontal: width * 0.08,
    paddingHorizontal: width * 0.04,
    paddingVertical: height * 0.015,
    borderRadius: Math.min(width, height) * 0.02,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    marginBottom: height * 0.04,
    paddingBottom: height * 0.015,
    elevation: 3,
  },

  orderTxt: {
    fontSize: Math.min(width, height) * 0.032,
    color: '#666',
    // marginBottom: height * 0.005,
    fontWeight: '700',
  },
  deliveryTxt: {
    fontSize: Math.min(width, height) * 0.035,
    color: '#666',
    fontWeight: '900',
  },

  summaryTxt: {
    fontSize: Math.min(width, height) * 0.039,
    color: '#666',
    fontWeight: 'bold',
  },
  priceTxt: {
    fontSize: Math.min(width, height) * 0.04,
    fontWeight: 'bold',
    color: '#333333',
  },
});
