import React, { useCallback, useMemo } from "react";
import { View, Text, Pressable } from "react-native";
import { Sizing } from "src/styles";
import styles from "./style";

import Modal from "react-native-modal";
import * as Sharing from "expo-sharing";
import ViewShot from "react-native-view-shot";
import useAppSelector from "src/hooks/useAppSelector";
import { partition } from "src/utils/partition";
import { getFormatedDate } from "src/utils/date";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DishItem from "src/components/DishItem";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { LogoType } from "../../../assets/logotype";

type ShareMealModalProps = NativeStackScreenProps<RootStackParamList, "ShareMealModal">;

export default function ShareMealModal({
    route,
    navigation,
}: ShareMealModalProps): React.ReactElement {
    const { mealType } = route.params;
    const menu = useAppSelector((state) => state.menu);
    const dayIndex = useAppSelector((state) => state.dayIndex);
    const dayMenu = menu[dayIndex][mealType.toLowerCase().replace("ç", "c")];
    const insets = useSafeAreaInsets();

    const onCapture = useCallback(async (uri: string) => {
        const isSharingAvailable = await Sharing.isAvailableAsync();
        if (isSharingAvailable) {
            Sharing.shareAsync(uri, { dialogTitle: `Compartilhar ${mealType}` });
        }
    }, []);

    const [items, extras] = useMemo(
        () =>
            partition(
                Object.entries(dayMenu).filter(([, value]) => value !== ""),
                ([key]) => key.includes("principal") || key.includes("Complemento")
            ),
        [dayMenu]
    );

    return (
        <Modal
            style={{ margin: 0, justifyContent: "flex-start", paddingTop: insets.top + 16 }}
            isVisible={true}
            swipeDirection={"down"}
            onSwipeComplete={() => navigation.goBack()}
            hideModalContentWhileAnimating
            useNativeDriverForBackdrop
            statusBarTranslucent
            propagateSwipe
            customBackdrop={
                <Pressable
                    style={{
                        position: "absolute",
                        height: Sizing.screen.height,
                        width: Sizing.screen.width,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                    onPress={() => navigation.goBack()}
                />
            }
        >
            <ViewShot style={styles.container} onCapture={onCapture} captureMode="mount">
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>{getFormatedDate(dayIndex)}</Text>
                </View>
                <View style={styles.subHeaderContainer}>
                    <Text style={styles.subtitle}>{mealType}</Text>
                </View>
                <View>
                    {items.map((item) => (
                        <DishItem label={item[0]} dish={item[1]} key={item[0]} />
                    ))}
                </View>
                <View style={styles.logotypeContainer}>
                    <LogoType />
                </View>
            </ViewShot>
        </Modal>
    );
}
