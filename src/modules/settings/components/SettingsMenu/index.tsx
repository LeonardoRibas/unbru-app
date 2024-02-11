import React from "react";
import { View, Switch } from "react-native";
import Option from "@modules/settings/components/Option";
import Feather from "@expo/vector-icons/build/Feather";
import MaterialIcons from "@expo/vector-icons/build/MaterialCommunityIcons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import useAppSelector from "@modules/common/hooks/useAppSelector";
import useAppDispatch from "@modules/common/hooks/useAppDispatch";
import { setTheme } from "src/redux/features/themeSlice";
import { Theme } from "src/styles";
import styles from "./styles";

type SettingsMenuProps = NativeStackScreenProps<SettingsStackParamList, "SettingsMenu">;

const SettingsMenu = ({ navigation }: SettingsMenuProps): React.ReactElement => {
    const campus = useAppSelector((state) => state.campus);
    const dispatch = useAppDispatch();
    const theme = useAppSelector((state) => state.theme);

    return (
        <View style={[styles.container, { backgroundColor: Theme[theme].background_default }]}>
            <Option
                titleIcon={
                    <MaterialIcons
                        name="school-outline"
                        size={24}
                        color={Theme[theme].text_primary}
                    />
                }
                title={`Campus: ${campus}`}
                subTitle="Troque o campus"
                actionIcon={
                    <Feather name="chevron-right" size={24} color={Theme[theme].color_primary} />
                }
                onPress={() => navigation.navigate("CampusPickerModal")}
            />
            <Option
                titleIcon={<Feather name="moon" size={24} color={Theme[theme].text_primary} />}
                title="Modo escuro"
                subTitle="Alterne entre modo claro e escuro"
                actionIcon={
                    <Switch
                        value={theme === "dark"}
                        onChange={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))}
                        thumbColor={theme === "dark" ? Theme[theme].color_primary : undefined}
                    />
                }
                onPress={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))}
            />
            <Option
                titleIcon={
                    <Feather name="smartphone" size={24} color={Theme[theme].text_primary} />
                }
                title="Tela inicial"
                subTitle="Adicione o app à sua tela inicial"
                actionIcon={
                    <Feather name="chevron-right" size={24} color={Theme[theme].color_primary} />
                }
                onPress={() => navigation.navigate("A2HSTutorial")}
            />
            <Option
                titleIcon={<Feather name="life-buoy" size={24} color={Theme[theme].text_primary} />}
                title="Ajude o App"
                subTitle="Contribua com o app"
                actionIcon={
                    <Feather name="chevron-right" size={24} color={Theme[theme].color_primary} />
                }
                onPress={() => navigation.navigate("About")}
            />
        </View>
    );
};

export default SettingsMenu;
