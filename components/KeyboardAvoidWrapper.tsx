import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet,View} from "react-native";
import { IProps } from "../auth-app";

const KeyboardAvoidWrapper: React.FC<IProps> = ({ children }) => {
  return (
    <KeyboardAvoidingView
      style={styles.settheKeyboardView}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <ScrollView style={styles.setScrollView} showsVerticalScrollIndicator={false}>
        <View>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  settheKeyboardView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  setScrollView: {
    flex: 1,

    // backgroundColor:"red"
  }
})

export default KeyboardAvoidWrapper;
