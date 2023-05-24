import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
const Header = () => {
  return (
    <View style={styles.topHeader}>
      <Image source={require('../images/menu.jpg')} style={styles.menu} />
      <Image source={require('../images/user.jpeg')} style={styles.menu} />
    </View>
  );
};

const styles = StyleSheet.create({
  topHeader: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  menu: {
    resizeMode: 'cover',
    height: 24,
    width: 24,
  },
});
export default Header;
