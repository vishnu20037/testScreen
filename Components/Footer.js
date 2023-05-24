import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
const Footer = () => {
  return (
    <View style={styles.Footer}>
      <View style={styles.footerElement}>
        <Image source={require('../images/home.jpg')} style={styles.icon} />
        <Text style={styles.textFooter}>Home</Text>
      </View>
      <View style={styles.footerElement}>
        <Image source={require('../images/shield.jpeg')} style={styles.icon} />
        <Text style={styles.textReading}>Security</Text>
      </View>
      <View style={styles.footerElement}>
        <Image source={require('../images/alarm.jpeg')} style={styles.icon} />
        <Text style={styles.textFooter}>Incidents</Text>
      </View>
      <View style={styles.footerElement}>
        <Image source={require('../images/clip.jpeg')} style={styles.icon} />
        <Text style={styles.textFooter}>Audits</Text>
      </View>
      <View style={styles.footerElement}>
        <Image source={require('../images/book.jpeg')} style={styles.icon} />
        <Text style={styles.textFooter}>Requests</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Footer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 4,
  },
  footerElement: {
    marginVertical: 4,
    alignItems: 'center',
  },
  icon: {resizeMode: 'cover', height: 20, width: 20},
  textReading: {
    color: '#374151',
    fontSize: 10,
    fontWeight: 400,
  },
  textFooter: {
    color: '#9CA3AF',
    fontSize: 10,
    fontWeight: 400,
  },
});

export default Footer;
