import React from "react";
import { View } from "react-native";
import Option from "src/components/Option";
import Feather from "@expo/vector-icons/build/Feather";
import MaterialIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import styles from "./styles";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import useAppSelector from "src/hooks/useAppSelector";

type SettingsMenuProps = NativeStackScreenProps<SettingsStackParamList, "Settings">;

const SettingsMenu = ({ navigation }: SettingsMenuProps): React.ReactElement => {
    const campus = useAppSelector((state) => state.campus);

    return (
        <View style={styles.container}>
            <Option
                titleIcon={<MaterialIcons name="school-outline" size={24} />}
                title={`Campus: ${campus}`}
                subTitle="Troque o campus"
                actionIcon={<Feather name="chevron-right" size={24} />}
                onPress={() => navigation.navigate("CampusPickerModal")}
            />
            <Option
                titleIcon={<Feather name="info" size={24} />}
                title="Sobre"
                subTitle="Saiba mais sobre o app"
                actionIcon={<Feather name="chevron-right" size={24} />}
                onPress={() => navigation.navigate("About")}
            />
            <Option
                titleIcon={<Feather name="smartphone" size={24} />}
                title="Tela inicial"
                subTitle="Adicione o app à sua tela inicial"
                actionIcon={<Feather name="chevron-right" size={24} />}
                onPress={() => navigation.navigate("A2HSTutorial")}
            />
        </View>
    );
};

export default SettingsMenu;
