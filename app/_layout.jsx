import { Stack } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../constants/Color";
import { StatusBar } from "expo-status-bar";
const RootLayout = () => {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <StatusBar value="auto"></StatusBar>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.navBackground,
            headerTintColor: theme.title,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ title: "Home" }} />
      </Stack>
    </>
  );
};

export default RootLayout;
