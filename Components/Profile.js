import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
const Profile = () => {
  return (
    <View style={styles.profileBox}>
      <Image source={require('../images/dp.jpeg')} style={styles.dp} />
      <View style={styles.textBox}>
        <Text style={styles.name}>Name</Text>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.desc}>Description</Text>
        <Text style={styles.userName}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileBox: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginHorizontal: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  dp: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    marginTop: 16,
  },
  textBox: {
    backgroundColor: 'white',
    marginStart: 24,
    paddingEnd: 16,
    marginVertical: 16,
  },
  name: {
    color: '#111928',
    fontWeight: 600,
    fontSize: 10,
  },
  desc: {
    color: '#111928',
    fontWeight: 600,
    fontSize: 10,
    marginTop: 24,
  },
  userName: {
    color: '#374151',
    fontWeight: 400,
    fontSize: 12,
    marginTop: 8,
    marginEnd: 16,
    paddingEnd: 16,
  },
});
export default Profile;
