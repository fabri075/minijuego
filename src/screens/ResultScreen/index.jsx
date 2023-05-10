import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from "../../components/Card";
import win from "../../assets/images/win.png";
import lost from "../../assets/images/gameover.jpg";
import styles from "./styles"
const ResultScreen = ({result}) => {
    const [image, setImage] = useState();
    useEffect(() => {
      handleImage();
    }, [])
    

    const handleImage = () => {
        if(result === "win"){
            setImage(win);
            return;
        }
        setImage(lost);
    }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Card>
            <Text>{`You ${result}`}</Text>
        </Card>
        <Image style={styles.imageContainer} source={image} />
      </View>
    </SafeAreaView>
  )
}

export default ResultScreen