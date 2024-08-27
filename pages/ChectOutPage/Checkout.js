import React, {memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

const SectionTitle = memo(({title}) => (
  <Text style={styles.sectionTitle}>{title}</Text>
));

const ChangeLink = memo(() => (
  <TouchableOpacity>
    <Text style={styles.changeLink}>Change</Text>
  </TouchableOpacity>
));

const AddressSection = memo(() => (
  <View style={styles.section}>
    <SectionTitle title="Shipping address" />
    <View style={{elevation: 30, shadowColor: '#333', marginHorizontal: 20 
     }}>
      <Text style={styles.addressText}>Jane Doe</Text>
      <Text style={styles.addressText}>3 Newbridge Court</Text>
      <Text style={styles.addressText}>
        Chino Hills, CA 91709, United States
      </Text>
      <ChangeLink />
    </View>
  </View>
));

const PaymentSection = memo(() => (
  <View style={styles.section}>
    <SectionTitle title="Payment" />
    <View style={styles.paymentRow}>
      <Image
        source={{
          uri: 'https://w7.pngwing.com/pngs/648/903/png-transparent-mastercard-logo-logo-payment-visa-mastercard-paypal-mastercard-icon-text-service-mobile-payment-thumbnail.png',
        }}
        style={styles.cardLogo}
      />
      <Text style={styles.cardNumber}>**** **** **** 3947</Text>
    </View>
    <ChangeLink />
  </View>
));

const DeliverySection = memo(() => (
  <View style={styles.section}>
    <SectionTitle title="Delivery method" />
    <View style={styles.deliveryOptions}>
      {/* <Image
        source={require('./assets/fedex-logo.png')}
        style={styles.deliveryLogo}
      />
      <Image
        source={require('./assets/usps-logo.png')}
        style={styles.deliveryLogo}
      />
      <Image
        source={require('./assets/dhl-logo.png')}
        style={styles.deliveryLogo}
      /> */}
    </View>
    <Text style={styles.deliveryTime}>2-3 days</Text>
  </View>
));

const SummaryRow = memo(({label, value, bold}) => (
  <View style={styles.summaryRow}>
    <Text style={bold ? styles.summaryTextBold : styles.summaryText}>
      {label}
    </Text>
    <Text style={bold ? styles.summaryValueBold : styles.summaryValue}>
      {value}
    </Text>
  </View>
));

const OrderSummary = memo(() => (
  <View style={styles.orderSummary}>
    <SummaryRow label="Order:" value="112$" />
    <SummaryRow label="Delivery:" value="15$" />
    <SummaryRow label="Summary:" value="127$" bold />
  </View>
));

const SubmitButton = memo(() => (
  <TouchableOpacity style={styles.submitButton}>
    <Text style={styles.submitButtonText}>SUBMIT ORDER</Text>
  </TouchableOpacity>
));

const CheckoutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Checkout</Text>
      <AddressSection />
      <PaymentSection />
      <DeliverySection />
      <OrderSummary />
      <SubmitButton />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addressText: {
    fontSize: 16,
    marginBottom: 2,
  },
  changeLink: {
    color: 'red',
    marginTop: 5,
  },
  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardLogo: {
    width: 40,
    height: 25,
    marginRight: 10,
  },
  cardNumber: {
    fontSize: 16,
  },
  deliveryOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  deliveryLogo: {
    width: 60,
    height: 30,
    resizeMode: 'contain',
  },
  deliveryTime: {
    fontSize: 14,
    color: '#888',
  },
  orderSummary: {
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  summaryText: {
    fontSize: 16,
  },
  summaryValue: {
    fontSize: 16,
  },
  summaryTextBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  summaryValueBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default memo(CheckoutScreen);
