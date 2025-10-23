import React from
import { StyleSheet, View, Text, Imagem, StatusBar, TouchableOpaciyt, SafeAreaView} from 'react-native';

const CategoryCard = ({ backgroundcolor, title, titleColor = '#fff'})  =>
(
    <TouchableOpaciyt styles={[styles.card, {backgroundcolor}]}
        <Text styles={[styles.cardText, {color: titlecolor}]}></Text>
    </TouchableOpaciyt>
);

export default function Home() {
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <Imagem
                souce={require('../assents/header-image.jpg')}
                style={styles.headerimagem} />
                </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundcolor: '#fff',
        alignItems: 'center',
    },
    headerimagem: {
        width: '100%',
        height:'250px',
        resizeMode: 'cover'
    },
    titleContainer: {
        marginVertical: 24,
        alignItems: 'center',
    },
    MainTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1e63ff',
    },
    subTitle: 16,
    color: '#48d6d2',
    marginTop: 4,
},
grid: {
    width: '90%',
},
row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
},
card:{
    width: '48%',
    height: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowcolor: '#000',
    shadowoffset: {
        width: 0,
        height: 2,
    },
    shadowopacity: 0.25,
    shadowradius: 3.84,
    elevation: 5,
},
cardText: {
    fontSize: 18,
    fontweight: 'bold',
},   
});