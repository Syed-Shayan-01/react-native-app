import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Link} from '@react-navigation/native';
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

  const ratings = [80, 10, 2, 20, 0];
  const totalRatings = ratings.reduce((sum, rating) => sum + rating, 0);
  const averageRating = calculateAverageRating(ratings);

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Link to={'/Home'}>
          <Icon name="angle-left" style={styles.menuicon} />
        </Link>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Rating & Reviews</Text>
        <View style={styles.ratingOverview}>
          <View>
            <Text style={styles.overallRating}>{averageRating}</Text>
            <Text style={styles.reviewCount}>{totalRatings} ratings</Text>
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
  },
});

export default ReviewPage;
