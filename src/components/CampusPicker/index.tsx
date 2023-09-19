import styles from "./styles";
import Button from "../Button";
import { Colors } from "../../styles";
import { Sizing } from "../../styles";
import React, { useContext } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { setCampus } from "../../redux/features/campusSlice";
import { GeneralContext } from "../../context/GeneralContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CalendarPicker({ onConfirm }): React.ReactElement {
    const insets = useSafeAreaInsets();
    const { setIsCampusSelectModalOpen } = useContext(GeneralContext);

    const campus = useSelector((state) => state.campus);

    const dispatch = useDispatch();

    return (
        <View
            style={{
                paddingBottom: insets.bottom,
                borderTopStartRadius: Sizing.layout.x20,
                borderTopEndRadius: Sizing.layout.x20,
            }}
        >
            <View style={styles.container}>
                <View style={styles.handle} />
                <TouchableOpacity
                    style={styles.campusOptionContainer}
                    onPress={() => dispatch(setCampus("Darcy Ribeiro"))}
                >
                    {campus === "Darcy Ribeiro" ? (
                        <MaterialIcons
                            name="radio-button-on"
                            size={24}
                            color={Colors.primary.base}
                        />
                    ) : (
                        <MaterialIcons
                            name="radio-button-off"
                            size={24}
                            color={Colors.neutral.s500}
                        />
                    )}
                    <Text
                        style={[
                            styles.campusText,
                            campus === "Darcy Ribeiro" && styles.campusSelectedText,
                        ]}
                    >
                        Darcy Ribeiro
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.campusOptionContainer}
                    onPress={() => dispatch(setCampus("Ceilândia"))}
                >
                    {campus === "Ceilândia" ? (
                        <MaterialIcons
                            name="radio-button-on"
                            size={24}
                            color={Colors.primary.base}
                        />
                    ) : (
                        <MaterialIcons
                            name="radio-button-off"
                            size={24}
                            color={Colors.neutral.s500}
                        />
                    )}
                    <Text
                        style={[
                            styles.campusText,
                            campus === "Ceilândia" && styles.campusSelectedText,
                        ]}
                    >
                        Ceilândia
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.campusOptionContainer}
                    onPress={() => dispatch(setCampus("Gama"))}
                >
                    {campus === "Gama" ? (
                        <MaterialIcons
                            name="radio-button-on"
                            size={24}
                            color={Colors.primary.base}
                        />
                    ) : (
                        <MaterialIcons
                            name="radio-button-off"
                            size={24}
                            color={Colors.neutral.s500}
                        />
                    )}
                    <Text
                        style={[styles.campusText, campus === "Gama" && styles.campusSelectedText]}
                    >
                        Gama
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.campusOptionContainer}
                    onPress={() => dispatch(setCampus("Planaltina"))}
                >
                    {campus === "Planaltina" ? (
                        <MaterialIcons
                            name="radio-button-on"
                            size={24}
                            color={Colors.primary.base}
                        />
                    ) : (
                        <MaterialIcons
                            name="radio-button-off"
                            size={24}
                            color={Colors.neutral.s500}
                        />
                    )}
                    <Text
                        style={[
                            styles.campusText,
                            campus === "Planaltina" && styles.campusSelectedText,
                        ]}
                    >
                        Planaltina
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.campusOptionContainer}
                    onPress={() => dispatch(setCampus("Fazenda"))}
                >
                    {campus === "Fazenda" ? (
                        <MaterialIcons
                            name="radio-button-on"
                            size={24}
                            color={Colors.primary.base}
                        />
                    ) : (
                        <MaterialIcons
                            name="radio-button-off"
                            size={24}
                            color={Colors.neutral.s500}
                        />
                    )}
                    <Text
                        style={[
                            styles.campusText,
                            campus === "Fazenda" && styles.campusSelectedText,
                        ]}
                    >
                        Fazenda
                    </Text>
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <Button text="Confirmar" onPress={onConfirm} />
                </View>
            </View>
        </View>
    );
}
