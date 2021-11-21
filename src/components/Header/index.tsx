import React from "react";
import dayjs from "dayjs";
import styles from "./styles";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";

type HeaderProps = MaterialTopTabBarProps & {
    title: string;
};

export default function Header({ navigation, title }: HeaderProps): React.ReactElement {
    const yesterday = dayjs().subtract(1, "day").format("DD/MM");
    const today = dayjs().format("DD/MM");
    const tomorrow = dayjs().add(1, "day").format("DD/MM");

    return (
        <>
          <View style={styles.safeAreaContainer}>
          </View>
          <View style={styles.container}>
              <Feather name="settings" color="white" size={22}/>
              <Text style={styles.title}>
                  {title === today
                      ? "Hoje"
                      : title === tomorrow
                      ? "Amanhã"
                      : title === yesterday
                      ? "Ontem"
                      : title}
              </Text>
              <Feather name="calendar" color="white" size={22}/>
          </View>
        </>
    );
}
