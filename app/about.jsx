import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page1</Text>
      <Link href="/" style={styles.link}>
        返回主页
      </Link>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
