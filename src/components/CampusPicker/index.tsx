import styles from "./styles";
import { Colors } from "../../styles";
import { Sizing } from "../../styles";
import { useSelector, useDispatch } from "react-redux";
import React, { useRef, useContext, useEffect } from "react";
import { GeneralContext } from "../../context/GeneralContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity } from "react-native";
import Button from "../Button";

export default function CalendarPicker(): React.ReactElement {
    const insets = useSafeAreaInsets();
    const { setIsCampusSelectModalOpen } = useContext(GeneralContext);

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
                <View style={styles.campusOptionContainer}>
                    <Text style={styles.campusText}>Darcy Ribeiro</Text>
                </View>
                <View style={styles.campusOptionContainer}>
                    <Text style={styles.campusText}>Ceilândia</Text>
                </View>
                <View style={styles.campusOptionContainer}>
                    <Text style={styles.campusText}>Gama</Text>
                </View>
                <View style={styles.campusOptionContainer}>
                    <Text style={styles.campusText}>Planaltina</Text>
                </View>
                <View style={styles.campusOptionContainer}>
                    <Text style={styles.campusText}>Fazenda</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button text="Confirmar" />
                </View>
            </View>
        </View>
    );
}
