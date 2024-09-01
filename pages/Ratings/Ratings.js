import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Font6Icon from 'react-native-vector-icons/FontAwesome6';
import {Link, useNavigation, useRoute} from '@react-navigation/native';
import axios from 'axios';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import FooterButton from '../../components/button/Button';
const {width, height} = Dimensions.get('window');

const RatingBar = ({rating}) => {
  return (
    <View style={styles.ratingBar}>
      {[1, 2, 3, 4, 5].map(star => (
        <Icon
          key={star}
          name="star"
          size={20}
          color={star <= rating ? '#FFD700' : '#E0E0E0'}
        />
      ))}
    </View>
  );
};

const RatingLineBar = ({count, total}) => {
  const percentage = (count / total) * 100;

  return (
    <View style={styles.ratingLineBarContainer}>
      <View style={[styles.ratingLineBar, {width: `${percentage}%`}]} />
    </View>
  );
};

const ReviewItem = ({review}) => {
  return (
    <View style={styles.reviewItem}>
      <Image
        source={require('../../public/images/profile.jpg')}
        style={styles.userImage}
      />
      <View style={styles.reviewContent}>
        <Text style={styles.userName}>{review.userName}</Text>
        <RatingBar rating={review.rating} />
        <Text style={styles.reviewDate}>{review.date}</Text>
        <Text style={styles.reviewText}>{review.text}</Text>
      </View>
    </View>
  );
};

const calculateAverageRating = ratings => {
  const totalScore = ratings.reduce(
    (sum, count, index) => sum + count * (5 - index),
    0,
  );
  const totalRatings = ratings.reduce((sum, count) => sum + count, 0);
  return totalRatings > 0 ? (totalScore / totalRatings).toFixed(1) : '0.0';
};

const ReviewPage = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);

  const handleImageUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    // Add your submit logic here
    Alert.alert('Review Submitted', `Rating: ${rating}, Review: ${reviewText}`);
    setModalVisible(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/`);
        setData(filteredData);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const reviews = [
    {
      id: '1',
      userName: 'Helene Moore',
      //   userImage: require('../../public/images/profile.jpg'),
      rating: 4,
      date: 'June 5, 2019',
      text: 'The dress is great! Very classy and comfortable. It fit perfectly! and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldt recommend it for those who are much shorter than  as it would be too long all over. The dress was made well.',
    },
    {
      id: '2',
      userName: 'Helene Moore',
      //   userImage: require('../../public/images/profile.jpg'),
      rating: 3,
      date: 'June 5, 2019',
      text: 'The dress is great! Very classy and comfortable. It fit perfectly! and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldt recommend it for those who are much shorter than  as it would be too long all over. The dress was made well.',
    },
    {
      id: '3',
      userName: 'Helene Moore',
      //   userImage: require('../../public/images/profile.jpg'),
      rating: 5,
      date: 'June 5, 2019',
      text: 'The dress is great! Very classy and comfortable. It fit perfectly! and 130 pounds. I am a 34B chest. This dress would be too long for those who are shorter but could be hemmed. I wouldt recommend it for those who are much shorter than  as it would be too long all over. The dress was made well.',
    },
  ];

  const images = {
    id: '1',
    image: require('../../public/images/apple.jpg'),
    // image: require('../../public/images/image.jpg'),
  };

  const ratings = [100, 40, 19, 50, 50];
  const totalRatings = ratings.reduce((sum, rating) => sum + rating, 0);
  const averageRating = calculateAverageRating(ratings);

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon name="angle-left" style={styles.menuicon} />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Rating & Reviews</Text>
        <View style={styles.ratingOverview}>
          <View>
            <Text style={styles.overallRating}>4.3</Text>
            <Text style={styles.reviewCount}>112 ratings</Text>
          </View>
          <View style={styles.ratingDistribution}>
            {[5, 4, 3, 2, 1].map(stars => (
              <View key={stars} style={styles.ratingRow}>
                <Text style={styles.starCount}>{stars}</Text>
                <RatingLineBar
                  count={ratings[5 - stars]}
                  total={totalRatings}
                />
              </View>
            ))}
          </View>
        </View>
      </View>

      <FlatList
        data={reviews}
        renderItem={({item}) => <ReviewItem review={item} />}
        keyExtractor={item => item.id}
      />

      <View>
        <TouchableOpacity
          style={styles.writeReviewBtn}
          onPress={handleOpenModal}>
          <Icon name={'pencil-square-o'} style={styles.writeReviewBtnIcon} />
          <Text style={styles.writeReviewBtnTxt}>Write a review</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(false);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Write a review</Text>

            <View style={styles.ratingContainer}>
              {[1, 2, 3, 4, 5].map(star => (
                <TouchableOpacity
                  key={star}
                  style={styles.ratingBtn}
                  onPress={() => setRating(star)}>
                  <Icon
                    name={star <= rating ? 'star' : 'star-o'}
                    size={30}
                    color={star <= rating ? '#FFD700' : '#E0E0E0'}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <TextInput
              style={styles.modalInput}
              placeholder="Review Text"
              multiline={true}
              onChangeText={text => setReviewText(text)}
              value={reviewText}
            />
            <TouchableOpacity
              style={styles.crossModalIconBtn}
              onPress={handleCloseModal}>
              <Text>
                <Font6Icon name={'xmark'} style={styles.crossModalIcon} />
              </Text>
            </TouchableOpacity>
            <View style={styles.imageUploadBtnContainer}>
              <TouchableOpacity
                style={styles.imageUploadBtn}
                onPress={handleImageUpload}>
                <Text>
                  <Icon name={'image'} style={styles.imageUploadBtnIconText} />
                </Text>
              </TouchableOpacity>
              <Text style={styles.addYouPhotoText}>Add your Photos</Text>
            </View>
            <View style={styles.ModalImageContainer}>
              <Image source={images.image} style={styles.uploadedImage} />
              <Image source={images.image} style={styles.uploadedImage} />
            </View>
          </View>
        </View>
        <View>
          <FooterButton
            title={'Submit Button'}
            onPress={() => handleSubmit()}
            color={'#0975b0'}
            textColor={'white'}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    marginHorizontal: width * 0.05,
    marginVertical: height * 0.03,
  },
  menuicon: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#666666',
  },
  userIcon: {
    fontSize: 25,
    padding: 6,
    borderRadius: 100,
    color: '#666666',
  },
  header: {
    padding: 16,
    marginTop: height * 0.02,
  },
  headerTitle: {
    color: '#333333',
    fontSize: 30,
    fontWeight: 'bold',
  },
  ratingOverview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.05,
  },
  overallRating: {
    fontSize: 36,
    color: '#333333',
    fontWeight: 'bold',
  },
  ratingDistribution: {
    flex: 1,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starCount: {
    width: 20,
    textAlign: 'right',
    marginRight: 8,
  },
  ratingLineBarContainer: {
    flex: 1,
    height: height * 0.012,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
  },
  ratingLineBar: {
    height: '100%',
    backgroundColor: '#FFD700',
    borderRadius: 4,
  },
  reviewCount: {
    marginTop: 8,
    color: '#666666',
  },
  reviewItem: {
    flexDirection: 'row',
    padding: Math.min(width, height) * 0.03,
    borderBottomWidth: 1,
    borderBottomColor: '#666666',
  },
  userImage: {
    width: width * 0.11,
    height: height * 0.06,
    borderRadius: 20,
    marginRight: 12,
  },
  reviewContent: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#666666',
  },
  ratingBar: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  reviewDate: {
    color: '#888',
    fontSize: 12,
    marginBottom: 4,
  },
  reviewText: {
    fontSize: 14,
    color: '#666666',
  },
  writeReviewBtn: {
    position: 'absolute',
    bottom: height * 0.05,
    right: width * 0.05,
    backgroundColor: '#0975b0',
    padding: Math.min(width, height) * 0.035,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  writeReviewBtnIcon: {
    color: '#fff',
    fontWeight: 'semiBold',
    fontSize: 13,
    marginRight: width * 0.01,
  },
  writeReviewBtnTxt: {
    color: '#fff',
    fontWeight: 'semiBold',
    fontSize: 13,
    textTransform: 'uppercase',
  },

  // modal css
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '100%',
    position: 'absolute',
    bottom: height * 0,
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: height * 0.02,
    color: '#333333',
  },
  modalInput: {
    height: height * 0.2,
    width: width * 0.9,
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 1,
    padding: Math.min(width, height) * 0.02,
    marginBottom: height * 0.02,
    textAlignVertical: 'top',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: height * 0.02,
  },
  ratingBtn: {
    padding: Math.min(width, height) * 0.02,
  },
  imageUploadBtnContainer: {
    marginBottom: height * 0.02,
    elevation: 1,
    padding: Math.min(width, height) * 0.03,
    borderRadius: Math.min(width, height) * 0.04,
    alignItems: 'center',
    position: 'relative',
    right: width * 0.3,
  },
  imageUploadBtn: {
    borderRadius: 100,
    padding: Math.min(width, height) * 0.04,
    elevation: 2,
    alignSelf: 'center',
    backgroundColor: '#0975b0',
  },
  imageUploadBtnIconText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: Math.min(width, height) * 0.05,
    textAlign: 'center',
  },
  addYouPhotoText: {
    fontSize: Math.min(width, height) * 0.03,
    fontWeight: 'bold',
    color: '#666666',
    marginTop: height * 0.01,
  },
  crossModalIconBtn: {
    position: 'absolute',
    right: width * 0.05,
    top: height * 0.06,
    borderRadius: 100,
  },
  crossModalIcon: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: Math.min(width, height) * 0.06,
    textAlign: 'center',
  },
  ModalImageContainer: {
    flexDirection: 'row',
    position: 'relative',
    right: width * 0.17,
  },
  uploadedImage: {
    width: Math.min(width, height) * 0.25,
    height: Math.min(width, height) * 0.25,
    resizeMode: 'cover',
    borderRadius: 10,
    marginHorizontal: width * 0.02,
  },
});

export default ReviewPage;
