import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  return (
    <>
      <StatusBar value="auto"></StatusBar>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "none",
        }}
      ></Stack>
    </>
  );
}
