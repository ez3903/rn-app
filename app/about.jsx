import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemdText from "../components/ThemdText";

const About = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemdText style={styles.title}>About Page1</ThemdText>
      <Link href="/" style={styles.link}>
        <ThemdText>返回主页</ThemdText>
      </Link>
    </ThemedView>
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
