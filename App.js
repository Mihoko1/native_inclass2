import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import Card from "./components/Card";
import Header from './components/Header';

import RestaurantsJSON from './restaurants.json';

export default class App extends React.Component {
  
  state = { restaurants: []}

  componentDidMount(){
    this.setState({restaurants: RestaurantsJSON});
  }

  render(){
    return (

      <SafeAreaView style={styles.safeAreaView}>
        <Header headColor='white' >Restaurant</Header>
            <ScrollView style={styles.container}>
              <View style={styles.headingContainer}>
              <Text style={styles.heading}>Popular Restaurant in Toronto</Text> 
              </View>
              <View style={styles.cardBox}>
                {
                  this.state.restaurants.map( (restaurant, index) =>
                    <Card key={index} name={restaurant.name} image={restaurant.image} category={restaurant.category} star={restaurant.star}/>
                  )
                }
                </View>
            </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#e53935',
    marginBottom: 50,
  },
  container: {
    backgroundColor: '#fff',
  },
  headingContainer: {
    alignItems:'center',
  },
  heading: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop:20,
    marginBottom:20,
  },
  cardBox: {
    alignItems:'center',
  },
  line: {
    marginTop: 20,
    marginBottom: 20,
  },
});
