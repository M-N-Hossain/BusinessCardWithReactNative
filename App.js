import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.wholeContainer}>
      <View style={styles.headlineContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("./assets/images/1.png")}
            style={styles.image}
          />
        </View>

        <View style={styles.headLineTextContainer}>
          <Text style={styles.headLineText}>
            Maersk is an integrated logistics company. We go all the way to
            connect and simplify global trade for a growing world.
          </Text>
        </View>

        <View>
          <Text style={styles.locationContainer}>📍Copenhagen, Denmark</Text>
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Logistics Solutions</Text>
          <Text>
            From the farm to your refrigerator, or the factory to your wardrobe,
            A.P. Moller - Maersk is developing solutions that meet customer
            needs from one end of the supply chain to the other.
          </Text>
        </View>

        <View style={styles.solutionContainer}>
          <View style={styles.sl1}>
            <Text style={styles.slTitile}>Transportation Services</Text>
            <Image
              source={require("./assets/images/sl1.png")}
              style={styles.slImage}
            />
            <Text style={styles.slText}>
              Learn more about our shipping services from 300 ports around the
              world. Maersk can connect your business globally and we make
              shipping simple.
            </Text>
          </View>
          <View style={styles.sl2}>
            <Text style={styles.slTitile}>Supply Chain and Logistics</Text>
            <Image
              source={require("./assets/images/sl2.jpg")}
              style={styles.slImage}
            />
            <Text style={styles.slText}>
              We focus on solving your supply chain needs from end to end,
              taking the complexity out of container shipping for you.
            </Text>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headlineContainer: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    height: 100,
    width: 100,
  },

  headLineTextContainer: {
    flex: 0.8,
  },

  headLineText: {
    fontWeight: "500",
    paddingHorizontal: 50,
  },
  locationContainer: {
    flex: 0.3,
    marginTop: 7,
  },

  bodyContainer: {
    flex: 3,
  },
  titleContainer: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "900",
    color: "green",
    marginBottom: 5,
  },

  solutionContainer: {
    // flex:1,
    // flexDirection: "row",
    // justifyContent:"space-between"
  },
  sl1: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
  },
  sl2: {
    flex: 2,
    alignItems: "center",
  },
  slTitile:{
    fontSize: 18,
    marginBottom: 5,
    fontWeight:"500"
  },
  slImage: {
    width: 100,
    height: 100,
  },
  slText: {
    marginTop:5,
   marginHorizontal: 20
  },
});
