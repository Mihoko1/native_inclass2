import  React from 'react';
import { Animated, Easing, StyleSheet, View } from 'react-native';
import LottieView from "lottie-react-native";

export default class SplashScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          progress: new Animated.Value(0),
        };
      }

    componentDidMount() {
    //     this.animation.play();
    //   

    Animated.timing(this.state.progress, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
      }).start();
    }
    
    render() {
      return (
        <View style={styles.container}>
           <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
            backgroundColor: 'white',
          }}
          source={require('../assets/eat.json') }
          progress={this.state.progress}
           />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    
    container: {
        // backgroundColor: 'orange',
         width: '100%',
         height:'100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    textStyles:{
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    }

  });
  