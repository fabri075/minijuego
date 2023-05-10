import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Button, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./styles"
import { TouchableOpacity } from 'react-native'
import Card from '../../components/Card'
import Input from '../../components/Input'

const obj = {
    s: 200,
    m: 600,
    l: 1000
}
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const StartGame = ({onStartGame}) => {
    const [value, setValue] = useState("");
    const [confirm, setConfirm] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState("")
    
useEffect(() => {
    console.log(width, height);
}, [])
    const handleInput = text => {
        setValue(text.replace(/[^0-9]/g, ""));
    }
    const handleResetInput = () => {
        setValue("");
        setConfirm(false);
    }
    const handleConfirmation = () => {
        const newValue = parseInt(value);
        if(isNaN(newValue) || newValue <= 0 || newValue > 99) return;

        setConfirm(true);
        setSelectedNumber(newValue);
        setValue("");
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Card>
                        <Text style={styles.subtitle}>Choose a number</Text>
                        <Input value={value} onChangeText={handleInput} bluronSubmit autoCapitalize="none" autoCorrect={false} keyboardType="numeric" maxLength={2} placeholder="your number" />
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.cleanButton} onPress={handleResetInput}>
                                <Text>Clean</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmation}>
                                <Text>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </Card>
                    {confirm && (
                        <Card otherStyles={styles.selectedCard}>
                            <Text>Your number is: </Text>
                            <Text>{selectedNumber}</Text>
                            <View>
                                <Button title='Start game' color={"blue"} onPress={() => onStartGame(selectedNumber)}></Button>
                            </View>
                        </Card>
                    )}
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default StartGame