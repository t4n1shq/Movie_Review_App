import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name = "(tabs)"
        options = {{
          headerShown: false // hides the routes (tabs) header
        }}
      />
      <Stack.Screen
        name = "movies/[id]"
        options = {{
          headerShown: false
        }}
      />
    </Stack>
  );
}
