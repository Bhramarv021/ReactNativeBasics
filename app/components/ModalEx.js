import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import { Modal } from "react-native";

const ModalEx = () => {
    const [visible, setVisible] = useState(false)
    return (
        <SafeAreaView>
            <View>
                <Button title="open Modal" onPress={()=>setVisible(true)}/>
            </View>
            <Modal visible={visible}>
                <View style={styles.modalContainerStyle}>
                    <Text>Hello Modal</Text>
                </View>
                <Button title="Close Modal" onPress={()=>setVisible(false)}/>
            </Modal>
        </SafeAreaView>
    )
}

export default ModalEx;

const styles = StyleSheet.create({
    modalContainerStyle: {
        height: 500,
        width: '90%',
        backgroundColor: 'grey'
    }
})