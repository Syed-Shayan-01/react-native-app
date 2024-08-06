import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
  FlatList,
} from 'react-native';

const {width, height} = Dimensions.get('window');

const BuyPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const Data = [
    {
      imageUrl: 'https://m.media-amazon.com/images/I/813aV273-rL._SY466_.jpg',
      title: 'Item Name',
      description: 'This is a detailed description of the item.',
      price: 99.99,
    },
  ];

  //   const renderItem = ({item}) => (
  //     <>
  //       <Image source={{uri: item.imageUrl}} style={styles.itemsImage} />

  //       {/* <TouchableOpacity
  //         style={styles.detailsButton}
  //         onPress={() => {
  //           setSelectedItem(item);
  //           setModalVisible(true);
  //         }}> */}
  //         <Text style={styles.detailsButtonText}>View Details</Text>
  //       </TouchableOpacity>
  //     </>
  //   );

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: 'https://m.media-amazon.com/images/I/813aV273-rL._SY466_.jpg'}} style={styles.modalImage} />
      <FlatList
        data={Data}
        renderItem={({item}) => {
          return (
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>{item.title}</Text>
                <Text style={styles.modalDescription}>{item.description}</Text>
                <Text style={styles.modalPrice}>${item.price}</Text>

                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.buyButton}>
                    <Text style={styles.buttonText}>Buy Now</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.addToCartButton}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Image
                source={{uri: selectedItem.imageUrl}}
                style={styles.modalImage}
              />
              <Text style={styles.modalTitle}>{selectedItem.title}</Text>
              <Text style={styles.modalDescription}>
                {selectedItem.description}
              </Text>
              <Text style={styles.modalPrice}>${selectedItem.price}</Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buyButton}>
                  <Text style={styles.buttonText}>Buy Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addToCartButton}>
                  <Text style={styles.buttonText}>Add to Cart</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
//   itemsImage: {
//     width: '100%',
//     height: 300,
//     resizeMode: 'cover',
//   },
//   detailsButton: {
//     backgroundColor: '#3498db',
//     padding: 15,
//     margin: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   detailsButtonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    zIndex: 1,
    alignItems: 'center',
  },
  modalImage: {
    width: 180, // Fixed width
    height: 250, // Fixed height
    resizeMode: 'cover',
    zIndex: -111,
    alignSelf: 'center'
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  modalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  buyButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  addToCartButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: '#7f8c8d',
    fontSize: 16,
  },
});

export default BuyPage;
