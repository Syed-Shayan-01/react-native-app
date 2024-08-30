import React, {useState} from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const ShippingAddressModal = ({isVisible, onClose, onSave, currentAddress}) => {
  const [name, setName] = useState(currentAddress?.name || '');
  const [street, setStreet] = useState(currentAddress?.street || '');
  const [city, setCity] = useState(currentAddress?.city || '');
  const [state, setState] = useState(currentAddress?.state || '');
  const [zipCode, setZipCode] = useState(currentAddress?.zipCode || '');

  const handleSave = () => {
    onSave({name, street, city, state, zipCode});
    name || street || city || state || zipCode === '';
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Edit Shipping Address</Text>

          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder="Street Address"
            value={street}
            onChangeText={setStreet}
          />

          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />

          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.halfWidth]}
              placeholder="State"
              value={state}
              onChangeText={setState}
            />

            <TextInput
              style={[styles.input, styles.halfWidth]}
              placeholder="Zip Code"
              value={zipCode}
              onChangeText={setZipCode}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.saveButton]}
              onPress={handleSave}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderTopStartRadius: Math.min(width, height) * 0.04,
    borderTopEndRadius: Math.min(width, height) * 0.04,
    padding: Math.min(width, height) * 0.09,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: width,
  },
  modalTitle: {
    fontSize: Math.min(width, height) * 0.06,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    height: Math.min(width, height) * 0.15,
    elevation: 1,
    textAlignVertical: 'center',
    paddingHorizontal: width * 0.04,
    marginBottom: height * 0.02,
    width: '100%',
    borderRadius: Math.min(width, height) * 0.03,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  halfWidth: {
    width: '48%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: height * 0.03,
  },
  button: {
    borderRadius: Math.min(width, height) * 0.02,
    padding: Math.min(width, height) * 0.03,
    elevation: 2,
    width: '48%',
  },
  cancelButton: {
    backgroundColor: '#666',
  },
  saveButton: {
    backgroundColor: '#0975b0',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ShippingAddressModal;
