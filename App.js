import React , { createElement, Component } from 'react';
import { Platform, NativeModules, Animated, Easing, StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import Card from "./components/Card";
import Header from './components/Header';
import SplashScreen from './components/SplashScreen';
import LottieView from "lottie-react-native";
import * as Animatable from 'react-native-animatable';
import FlipCard from 'react-native-flip-card';
import RestaurantsJSON from './restaurants.json';

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 80;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const { UIManager } = NativeModules;
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export default class App extends React.Component {
  state = { isLoading: true, restaurants: [], animation: new Animated.Value(0), animatedValue: new Animated.Value(0), slideUp: new Animated.Value(0), scrollY: new Animated.Value(0)}

  componentDidMount(){
    this.setState({restaurants: RestaurantsJSON});

    // Set splash screen time
    const loadingTimer = setTimeout( () => {
      clearTimeout(loadingTimer);
      this.setState({isLoading: false});

      }, 5000)
    
      //Slide card
      Animated.timing(this.state.slideUp, {
        toValue: 1,
        duration: 500,
        delay: 8000,
        useNativeDriver: true,
      }).start();
     
  }

  render(){
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
      extrapolate: 'clamp',
    });

    const imageOpacity = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    
    const imageTranslate = this.state.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -50],
      extrapolate: 'clamp',
    });
  
    let { animation } = this.state.animation;
    let { slideUp } = this.state;
    return (
      
      <View style={styles.fill}>
        <ScrollView
            style={styles.fill}
            scrollEventThrottle={16}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
            )}
          >
          <View style={styles.scrollViewContent}>
          </View>

          <Animated.View
            style={{
              transform: [
                {
                  translateY: slideUp.interpolate({
                    inputRange: [0, 1],
                    outputRange: [600, 0]
                  })
                }
              ],
              flex: 1,
    
            }}
          >
          
          <View style={styles.cardBox}>
            {
              this.state.restaurants.map( (restaurant, index) =>
              <FlipCard 
                  style={styles.card}
                  key={index} 
                  friction={6}
                  perspective={1000}
                  flipHorizontal={true}
                  flipVertical={false}
                  flip={false}
                  clickable={true}
                  onFlipEnd={(isFlipEnd)=>{console.log('isFlipEnd', isFlipEnd)}}
                >
                <Card style={styles.face} name={restaurant.name} image={restaurant.image} category={restaurant.category} star={restaurant.star}/>
                <Card style={styles.back} name={restaurant.name} image={restaurant.image} category={restaurant.category} star={restaurant.star}/>
                  
                </FlipCard>
              )
            }
            </View>
    
          </Animated.View>
        </ScrollView>
        <Animated.View style={[styles.header, {height: headerHeight}]}>
          <Animated.Image
            style={[
              styles.backgroundImage,
              {opacity: imageOpacity, transform: [{translateY: imageTranslate}]},
            ]}
            source={require('./assets/images.jpg')}
          />
          <Animatable.Text style={styles.heading} animation="slideInDown" iterationCount={5} direction="alternate">
            Popular Restaurants in Toronto
          </Animatable.Text>   
        </Animated.View>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#03A9F4',
    overflow: 'hidden',
  },
  bar: {
    marginTop: 28,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 18,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: null,
    height: HEADER_MAX_HEIGHT,
    resizeMode: 'cover',
  },
  scrollViewContent: {
    marginTop: HEADER_MAX_HEIGHT,
  },
  heading: {
    color:'#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 21,
    position:'absolute',
    top: '50%',
    left: 0,
    right: 0,
  },
  cardBox: {
    marginTop: 30,
    alignItems:'center',
  },
  line: {
    marginTop: 20,
    marginBottom: 20,
  },
});
