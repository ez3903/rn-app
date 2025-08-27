import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemdText from "../../components/ThemdText";
import ThemedButton from "../../components/ThemdButton";

const Register = () => {
  const handleSubmit = () => {
    console.log("按压了");
  };

  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemdText title={true} style={styles.title}>
        注册你的账号
      </ThemdText>

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>注册</Text>
      </ThemedButton>

      <Spacer height={100} />

      <Link href="./login">
        <ThemdText style={{ textAlign: "center" }}>去登录</ThemdText>
      </Link>
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
