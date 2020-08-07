import React, { useCallback } from "react";
import { View, ImageBackground, Text } from "react-native";

import giveClassesBgImage from "../../assets/images/give-classes-background.png";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  const handleNavogateBack = useCallback(() => {
    goBack();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImage}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy</Text>
        <Text style={styles.description}>
          Para começar, voce precisa se cadastrar na nossa plataforma web.
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavogateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
};

export default GiveClasses;
