import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Score from './Components/Score';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header />
        <Text style={styles.greet}>Hello!</Text>
        <Profile />
        <Score />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    color: '#FFFFFF',
  },
  greet: {
    color: '#374151',
    marginStart: 20,
    marginTop: 24,
    fontWeight: 700,
    fontSize: 16,
  },
});

export default App;
