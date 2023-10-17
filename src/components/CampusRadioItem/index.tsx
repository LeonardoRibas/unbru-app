import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { Colors } from "src/styles";
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

    return (
        <TouchableOpacity style={styles.container} onPress={() => dispatch(setCampus(title))}>
            {campus === title ? (
                <MaterialIcons name="radio-button-on" size={24} color={Colors.primary.base} />
            ) : (
                <MaterialIcons name="radio-button-off" size={24} color={Colors.neutral.s500} />
            )}
            <Text style={[styles.title, campus === title && styles.campusSelectedText]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CampusRadioItem;
