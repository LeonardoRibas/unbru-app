import React from "react";
import styles from "./styles";
import { View, Modal, ModalProps, TouchableWithoutFeedback } from "react-native";

type ModalBottomSheetProps = ModalProps & {
    children?: React.ReactNode;
};

const ModalBottomSheet = ({ children, ...props }: ModalBottomSheetProps): React.ReactElement => {
    return (
        <Modal {...props}>
            <TouchableWithoutFeedback onPress={props.onRequestClose}>
                <View style={styles.backdropContainer}>{children}</View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};

export default ModalBottomSheet;
