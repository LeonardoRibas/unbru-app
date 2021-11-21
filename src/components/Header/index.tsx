import React from "react";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'
import styles from "./styles";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";

type HeaderProps = MaterialTopTabBarProps & {
    title: string;
};

export default function Header({ navigation, title }: HeaderProps): React.ReactElement {
    const date = dayjs().locale('pt-br').format('dddd DD/MM');

    return (
        <>
          <View style={styles.safeAreaContainer}>
          </View>
          <View style={styles.container}>
              <Feather name="settings" color="white" size={22}/>
              <Text style={styles.title}>
                { date }
              </Text>
              <Feather name="calendar" color="white" size={22}/>
          </View>
        </>
    );
}
