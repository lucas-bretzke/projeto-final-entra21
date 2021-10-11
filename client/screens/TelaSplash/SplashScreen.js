import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import splash from "../../../assets/splash.gif";
import { styles } from "./Style"

export function SplashScreen() {
   const [status, setStatus] = React.useState({});
    return (
      <View style={styles.container}>
        <Image source={splash} />
      </View>
    );
  }

  