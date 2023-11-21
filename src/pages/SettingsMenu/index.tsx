import React from "react";
import { View, Switch } from "react-native";
import Option from "src/components/Option";
import Feather from "@expo/vector-icons/build/Feather";
import MaterialIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import useAppSelector from "src/hooks/useAppSelector";
import useAppDispatch from "src/hooks/useAppDispatch";
import { setTheme } from "src/redux/features/themeSlice";
import { Colors, Theme } from "src/styles";
import styles from "./styles";

type SettingsMenuProps = NativeStackScreenProps<SettingsStackParamList, "SettingsMenu">;

const SettingsMenu = ({ navigation }: SettingsMenuProps): React.ReactElement => {
    const campus = useAppSelector((state) => state.campus);
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme);

    return (
        <View style={styles.container}>
            <Option
                titleIcon={
                    <MaterialIcons
                        name="school-outline"
                        size={24}
                        color={Theme.light.text_primary}
                    />
                }
                title={`Campus: ${campus}`}
                subTitle="Troque o campus"
                actionIcon={
                    <Feather name="chevron-right" size={24} color={Theme.light.color_primary} />
                }
                onPress={() => navigation.navigate("CampusPickerModal")}
            />
            {/* <Option
                titleIcon={<Feather name="moon" size={24} color={Theme.light.text_primary} />}
                title="Modo escuro"
                subTitle="Alterne entre modo claro e escuro"
                actionIcon={
                    <Switch
                        value={theme === "dark"}
                        onChange={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))}
                        thumbColor={theme === "dark" ? Colors.primary.base : undefined}
                    />
                }
                onPress={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))}
            /> */}
            <Option
                titleIcon={<Feather name="smartphone" size={24} color={Theme.light.text_primary} />}
                title="Tela inicial"
                subTitle="Adicione o app à sua tela inicial"
                actionIcon={
                    <Feather name="chevron-right" size={24} color={Theme.light.color_primary} />
                }
                onPress={() => navigation.navigate("A2HSTutorial")}
            />
            <Option
                titleIcon={<Feather name="info" size={24} color={Theme.light.text_primary} />}
                title="Sobre"
                subTitle="Saiba mais sobre o app"
                actionIcon={
                    <Feather name="chevron-right" size={24} color={Theme.light.color_primary} />
                }
                onPress={() => navigation.navigate("About")}
            />
        </View>
    );
};

export default SettingsMenu;
