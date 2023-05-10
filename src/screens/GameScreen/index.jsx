import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from "./styles"

const GameScreen = ({handleResult}) => {
    const [currentGuess, setCurrentGuess] = useState();
    useEffect(() => {
      setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1))
    }, [])
    
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>The opponent's assumption is</Text>
      <Text style={styles.textColor}>{currentGuess}</Text>
      <Card style={styles.buttonContainer}>
        <Button title='lower' onPress={() => handleResult("lower", currentGuess)}/>
        <Button title='higher' onPress={() => handleResult("higher", currentGuess)}/>
      </Card>
    </View>
  )
}

export default GameScreen