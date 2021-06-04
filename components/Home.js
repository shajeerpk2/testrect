import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Home",
  };

  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    fetch("https://607a90abbd56a60017ba2c5e.mockapi.io/Customer")
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson,
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }

  render() {
    const { navigate } = this.props.navigation;
    const imageBaseUrl = "https://randomuser.me/api/portraits/";
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <TouchableWithoutFeedback
              onPress={() =>
                navigate("Feed", {
                  Data: this.state.dataSource,
                  userId: item.id,
                })
              }
            >
              <View style={styles.containerChild}>
                <Image
                  source={{
                    uri: `${imageBaseUrl}${"/"}${
                      item.women ? "women" : "men"
                    }${"/"}${item.id}${".jpg"} `,
                  }}
                  key={item.id}
                  style={{
                    width: 150,
                    height: 150,
                    resizeMode: "contain",
                    margin: 8,
                  }}
                ></Image>
                <View style={styles.textContainer}>
                  <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    <Text>{item.city}, </Text>
                    <Text>{item.country}</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                    }}
                  >
                    <Text>{item.phone} | </Text>
                    <Text>{item.email}</Text>
                  </View>
                  {/* <Text style={{ fontWeight: "100" }}>{item.name}</Text> */}
                </View>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    );
    // return (

    //   <View style={styles.container}>
    //     <Text style={styles.title}>Home Screen!</Text>

    //     <View style={{ width: "50%", margin: 10 }}>
    //       <Button
    //         color="orange"
    //         title="Go to feed"
    //         onPress={() => navigate("Feed")}
    //       />
    //     </View>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  containerChild: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    //justifyContent: "center",
  },
  textContainer: {
    flex: 0.9,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflow: "hidden",
  },
});

export default HomeScreen;
