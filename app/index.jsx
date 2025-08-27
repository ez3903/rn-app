import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedLogo from "../components/ThemdLogo";
import Spacer from "../components/Spacer";
import ThemdText from "../components/ThemdText";
const Home = () => {
  return (
    <>
      <ThemedView style={styles.container}>
        <ThemedLogo />
        <Spacer height={20} />

        <ThemdText style={[styles.title]} title={true}>
          The Number 1
        </ThemdText>

        <Spacer height={10} />
        <ThemdText>Running RN App</ThemdText>
        <Spacer height={10} />

        <Link href="/login" style={styles.link}>
          <ThemdText>登录</ThemdText>
        </Link>
        <Link href="/register" style={styles.link}>
          <ThemdText>注册</ThemdText>
        </Link>
      </ThemedView>
    </>
  );
};

export default Home;

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
  img: {
    marginVertical: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
