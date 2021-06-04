import React, { Component } from "react";

import { StyleSheet, View, Text, Image } from "react-native";

class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    var userId = this.props.navigation.state.params.userId;
    var Data = props.navigation.state.params.Data;
    let data = Data.filter(function (item) {
      return item.id == userId;
    });
    this.state = {
      dataSource: data,
    };
  }

  render() {
    const imageBaseUrl = "https://randomuser.me/api/portraits/";
    return (
      <View style={styles.container}>
        <View style={styles.containerChild}>
          <Image
            source={{
              uri: `${imageBaseUrl}${"/"}${
                this.state.dataSource[0].women ? "women" : "men"
              }${"/"}${this.state.dataSource[0].id}${".jpg"} `,
            }}
            key={this.state.dataSource.id}
            style={{
              width: 200,
              height: 200,
              resizeMode: "contain",
              margin: 8,
            }}
          ></Image>
          <Text style={{ fontWeight: "bold" }}>
            {this.state.dataSource[0].name}
          </Text>
          <Text>{this.state.dataSource[0].email}</Text>
          <Text>{this.state.dataSource[0].street}</Text>
          <Text>{this.state.dataSource[0].phone}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  containerChild: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailsScreen;
