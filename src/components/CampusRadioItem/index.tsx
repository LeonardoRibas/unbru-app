import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Theme } from "src/styles";
import styles from "./styles";

import useAppDispatch from "src/hooks/useAppDispatch";
import useAppSelector from "src/hooks/useAppSelector";
import { setCampus } from "src/redux/features/campusSlice";
import { MaterialIcons } from "@expo/vector-icons";

type CampusRadioItemProps = {
    title: Campus;
};

const CampusRadioItem = ({ title }: CampusRadioItemProps): React.ReactElement => {
    const dispatch = useAppDispatch();
    const campus = useAppSelector((state) => state.campus);
    const theme = useAppSelector((state) => state.theme);

    return (
        <TouchableOpacity style={styles.container} onPress={() => dispatch(setCampus(title))}>
            {campus === title ? (
                <MaterialIcons
                    name="radio-button-on"
                    size={24}
                    color={Theme[theme].color_primary}
                />
            ) : (
                <MaterialIcons
                    name="radio-button-off"
                    size={24}
                    color={Theme[theme].text_primary}
                />
            )}
            <Text
                style={[
                    [styles.title, { color: Theme[theme].text_primary }],
                    campus === title && styles.campusSelectedText,
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CampusRadioItem;
