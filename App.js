/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import styles from './styles';
import Emoji from 'react-native-emoji';
import {
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Text,
} from 'react-native';

import CardFlip from 'react-native-card-flip';

class App extends React.Component {
  constructor() {
    super();
    this.memes = [
      'penguin',
      'koala',
      'sunglasses',
      'boot',
      'sunglasses',
      'koala',
      'penguin',
      'boot',
      'sandal',
      'sandal'
    ];

    this.score = 0;
    this.cards= [];
    this.state = {
      score: 0,
      memes:[
        'smirk',
        'coffee',
        'smirk',
        'coffee',
        'smile',
        'smile',
        'cry',
        'cry',
      ]

    };
    // 'worried', 'smile'
  }
  checkFlip = (passedMem, passedIndex) => {
    this.cards[`${passedMem}-${passedIndex}`].card.flip();
    this.cards[`${passedMem}-${passedIndex}`].flipped = true;

    this.state.memes.map((mem, index) => {
      if (
        this.cards[`${mem}-${index}`].image !=
        this.cards[`${passedMem}-${passedIndex}`].image &&
        !  this.cards[`${mem}-${index}`].paired
      ) {
        if (  this.cards[`${mem}-${index}`].flipped) {
          setTimeout(() => {
            this.cards[`${passedMem}-${passedIndex}`].card.flip();
            this.cards[`${mem}-${index}`].card.flip();
            this.cards[`${passedMem}-${passedIndex}`].flipped = false;
            this.cards[`${mem}-${index}`].flipped = false;
          }, 500);
        }
      } else if (
        this.cards[`${mem}-${index}`].image ==
        this.cards[`${passedMem}-${passedIndex}`].image &&
        index != passedIndex
      ) {
        if (  this.cards[`${mem}-${index}`].flipped) {
          this.cards[`${passedMem}-${passedIndex}`].paired = true;
          this.cards[`${mem}-${index}`].paired = true;
          this.score++;
          if(this.score == 4){
            // this.cards[`${mem}-${index}`].flipped = false;
            setTimeout(() => {
            this.handleLevelChange()
            },500);

          }
        }
      }
    });

  };
  handleLevelChange = () => {


    this.resetFlips();
    console.log("Hello World");
    this.setState({memes: this.memes})



  }
  componentDidMount (){

  }
  resetFlips = () => {

    this.state.memes.map((mem, index) => {
      console.log( this.cards[`${mem}-${index}`].paired);
      if (  this.cards[`${mem}-${index}`].flipped) {
        this.cards[`${mem}-${index}`].card.flip();
        this.cards[`${mem}-${index}`].flipped = false;

      }
      if(this.cards[`${mem}-${index}`].paired){
        this.cards[`${mem}-${index}`].paired = false;
      }
    });

  };
  render() {
    // const content = (

    // )
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={styles.body}>
            {this.state.memes.map((mem, index) => {
              return (
                <CardFlip
                  style={[
                    styles.cardContainer,
                    {
                      width:
                        Dimensions.get('window').width /
                          (this.state.memes.length / 4) -
                        2,
                      height:
                        Dimensions.get('window').height / (this.state.memes.length/1.5),
                    },
                  ]}
                  ref={(card) =>
                    (  this.cards[`${mem}-${index}`] = {
                      card: card,
                      image: mem,
                      flipped: false,
                      paired: false,
                    })
                  }>
                  <TouchableOpacity
                    style={[styles.frontCard, styles.card]}
                    onPress={() => {
                      this.checkFlip(mem, index);
                    }}></TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.backCard, styles.card]}
                    onPress={() => {
                      this.cards[`${mem}-${index}`].card.jiggle({
                        count: 2,
                        duration: 100,
                        progress: 0.05,
                      });
                    }}>
                    <Emoji name={mem} style={{fontSize: 50}} />
                  </TouchableOpacity>
                </CardFlip>
              );
            })}

            <View style={styles.reset}>
              <TouchableOpacity
                onPress={() => {
                  this.resetFlips();
                }}>
                <Text style={styles.resetText}>Reset</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default App;
