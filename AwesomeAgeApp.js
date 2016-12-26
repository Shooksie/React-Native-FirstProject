'use strict'
import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput  } from 'react-native'

var AwesomeAgeApp = React.createClass ({
  getInitialState: function () {
    return {
      age: ''
    };
  },

  _handleTextChange: function(event) {
    var age = event.nativeEvent.text;
    this.setState({age: age});
  },
  render: function() {

    var content = null;
    if(this.state.age != ''){
      content = <Text style={styles.ageResult}>
      Your Age in Dog Years is: {this.state.age * 7 }
      </Text>
    }else {
      content = <Text style={styles.instructions}>
      Your age in dog year swill be displayed here
      </Text>
    }
    return (
    <View style={styles.container}>
      <Text style={styles.heading}>
      Awesome Age App!
      </Text>
      <Text style={styles.ageLabel}>
        Enter your Age:
      </Text>
      <TextInput
      style={styles.ageInput}
      returnKeyType="go"
      onSubmitEditing={this._handleTextChange} />
      {content}
    </View>
    );
  }

});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    paddingTop: 40,
    padding: 10,
    alignItems: 'center',
    flex: 1,
  },
  heading: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
    color: '#0000CC',
  },
  ageInput: {
    width: 300 ,
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 10,
    borderWidth: 1,
    borderColor: '#0000CC',
    borderRadius: 5,
    color: '#0000CC',
  },
  ageLabel: {
    fontSize: 16,
    margin: 10,
    marginBottom: 20,
  },
  ageResult: {
    fontSize: 20,
    padding: 4,
    margin: 10,
    marginTop: 20,
  },
  instructions: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop: 5,
  }
});

module.exports = AwesomeAgeApp;
