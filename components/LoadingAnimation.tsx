import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

interface LoadingAnimationProps {}

const LoadingAnimation: React.FC<LoadingAnimationProps> = () => {
  return (
    <View style={styles.EmptyCartContainer}>
      <LottieView
        style={styles.LottieStyle}
        source={require('../assets/Loading.json')}
        autoPlay
        loop
      />
      <Text style={styles.LottieText}>{"Loading..."}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  EmptyCartContainer: {
    flex: 1,
    alignSelf: "center",
    marginVertical: 30,
    // backgroundColor:"black"
  },
  LottieStyle: {
    height: 400,
    width: Dimensions.get("screen").width,
  },
  LottieText: {
    fontSize: 20,
    color: "#252A32",
    fontWeight: "bold",
    textAlign: 'center',
  },
});

export default LoadingAnimation;
