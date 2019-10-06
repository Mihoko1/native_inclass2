import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    getStar () {
        switch (this.props.star) {
            case 1: 
                return  <React.Fragment><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/></ React.Fragment> ;
            case 1.5: 
                return  <React.Fragment><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star-half-empty" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/></ React.Fragment> ; 
            case 2: 
                return  <React.Fragment><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/></ React.Fragment> ; 
            case 2.5: 
                return  <React.Fragment><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star-half-empty" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/> </React.Fragment>; 
            case 3: 
                return  <React.Fragment><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/> </React.Fragment>; 
            case 3.5: 
                return  <React.Fragment><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star-half-empty" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/> </React.Fragment>; 
            case 4: 
                return  <React.Fragment><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/> </React.Fragment>; 
            case 4.5: 
                return  <React.Fragment><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star-half-empty" size={16}/> </React.Fragment>;  
            case 5: 
                return  <React.Fragment><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/><Icon style={styles.iconStyling} name="star" size={16}/> </React.Fragment>;   
            default: 
                return  <React.Fragment><Icon style={styles.iconStyling} name="star-o" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/><Icon style={styles.iconStyling} name="star-o" size={16}/> </React.Fragment>; 
        }
    }

    render(){
        return (
        
            <View style={styles.cardContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.image} 
                            source={{ uri: this.props.image }}
                        />
                    </View>
                        <Text style={styles.name}>{this.props.name}</Text>
                        <View style={styles.star}><Text>{ this.getStar() }</Text></View>
                        <Text style={styles.category}>{this.props.category}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        width: 300,
        height: 300,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        
        backgroundColor: "white",
        borderRadius: 5,
        marginBottom: 30,
     
    },
    imageContainer: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        overflow: 'hidden', 
        
    },
    image: {
        width: 300, 
        height: 200, 
        resizeMode: 'cover',
    },
    name:{
        marginHorizontal:15,
        marginVertical: 10,
        fontSize: 21,
        fontWeight: "bold",
    },
    category:{
        marginHorizontal:15,
        marginVertical: 10,
        fontSize: 16,
    },
    star:{
        marginHorizontal:15, 
        flexDirection: 'row',
    },
    iconStyling:{
        paddingRight: 5,
        color: '#e53935',
    }, 
  });
  