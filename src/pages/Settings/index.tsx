import React from "react";
import { View } from "react-native";
import Option from "../../components/Option";
import Feather from "@expo/vector-icons/build/Feather";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type SettingsProps = NativeStackScreenProps<RootStackParamList, "Settings">;

export default function Settings({ navigation }: SettingsProps): React.ReactElement {
    return (
        <View style={styles.container}>
            <Option
                titleIcon={<Feather name="info" size={24} />}
                title="Sobre"
                subTitle="Saiba mais sobre o app"
                actionIcon={<Feather name="chevron-right" size={24} />}
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}
