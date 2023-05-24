import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
const Separator = () => <View style={styles.line} />;
const Score = () => {
  return (
    <View style={styles.scoreBox}>
      <View style={styles.ycsInfo}>
        <Text style={styles.ycs}>Your Credit Score</Text>
        <Image source={require('../images/info.jpg')} style={styles.icon} />
      </View>

      <Separator />
      <View>
        <Image source={require('../images/Vector.jpg')} style={styles.vector} />
        <View style={styles.textContainer}>
          <Text style={styles.low}>Low</Text>
          <Text style={styles.score}>600</Text>
        </View>
      </View>
      <View style={styles.reading}>
        <Text style={styles.textReading}>300</Text>
        <Text style={styles.textReading}>Last Updated 23 Jan 2023</Text>
        <Text style={styles.textReading}>900</Text>
      </View>
      <Separator />

      <View style={styles.infoBox}>
        <Image source={require('../images/bulb.jpeg')} style={styles.bulb} />
        <Text style={styles.bulbText}>
          Higher score makes you eligible for loans
        </Text>
      </View>
      <View style={styles.infoBox}>
        <Image source={require('../images/bulb.jpeg')} style={styles.bulb} />
        <Text style={styles.bulbText}>
          Improve your score by paying your dues
        </Text>
      </View>
      <Text style={styles.power}>Powered by CIBIL</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    width: '100%',
    borderBottomColor: '#D1D5DB',
    borderBottomWidth: 1,
    marginVertical: 16,
  },
  scoreBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginHorizontal: 20,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  ycsInfo: {
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
    marginBottom: -4,
  },
  ycs: {
    color: '#374151',
    fontWeight: 700,
    fontSize: 16,
  },
  icon: {resizeMode: 'cover', height: 20, width: 20},
  vector: {
    height: 145.19,
    resizeMode: 'cover',
    marginHorizontal: 32,
  },
  textContainer: {
    position: 'absolute',
    alignItems: 'center',
    marginHorizontal: 108,
    marginVertical: 28,
  },
  low: {
    color: '#374151',
    fontSize: 18,
    fontWeight: 500,
  },
  score: {
    color: '#374151',
    fontSize: 60,
    fontWeight: 500,
  },
  reading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  infoBox: {
    flexDirection: 'row',
    marginVertical: 14,
  },
  textReading: {
    color: '#374151',
    fontSize: 10,
    fontWeight: 400,
  },
  bulb: {
    width: 14,
    height: 14,
    resizeMode: 'cover',
  },
  bulbText: {
    color: '#374151',
    fontSize: 12,
    fontWeight: 400,
    marginStart: 24,
  },
  power: {
    color: '#9CA3AF',
    fontWeight: 400,
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 12,
  },
});
export default Score;
