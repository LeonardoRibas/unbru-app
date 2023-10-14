import styles from "./styles";
import { Colors, Sizing } from "../../styles";
import Modal from "react-native-modal";
import { Pressable, Platform } from "react-native";
import React, { useContext } from "react";
import ShareMealCard from "../ShareMealCard";
import Feather from "@expo/vector-icons/build/Feather";
import { View, Text, TouchableOpacity } from "react-native";
import { GeneralContext } from "../../context/GeneralContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type SubHeaderProps = {
    mealType: string;
    time: string;
};

export default function SubHeader({ mealType, time }: SubHeaderProps): React.ReactElement {
    const { isShareModalOpen, setIsShareModalOpen } = useContext(GeneralContext);

    const insets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <View style={styles.hourInfoWrapper}>
                <Feather name="clock" size={15} color="#969696" />
                <Text style={styles.hourInfoText}>{time}</Text>
            </View>
            <Text style={styles.title}>{mealType}</Text>
            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => setIsShareModalOpen(true)}
            >
                {Platform.OS === "web" ? null : (
                    <Feather name="share" size={24} color={Colors.neutral.s900} />
                )}
            </TouchableOpacity>
            <Modal
                style={{ margin: 0, justifyContent: "flex-start", paddingTop: insets.top + 16 }}
                isVisible={isShareModalOpen}
                swipeDirection={"down"}
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
                        onPress={() => setIsShareModalOpen(false)}
                    />
                }
            >
                <ShareMealCard />
            </Modal>
        </View>
    );
}
