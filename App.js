const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Registrarse from "./screens/Registrarse";
import LoginPage from "./screens/LoginPage";
import Nutriscore from "./screens/Nutriscore";
import ProductDataPageNOAPTO from "./screens/ProductDataPageNOAPTO";
import ProductDataPageNOSEENCUEN from "./screens/ProductDataPageNOSEENCUEN";
import HistorialPage from "./screens/HistorialPage";
import DisagreePage from "./screens/DisagreePage";
import ProductDataPageAPTO from "./screens/ProductDataPageAPTO";
import RestrictionsPage from "./screens/RestrictionsPage";
import SplashPage from "./screens/SplashPage";
import ProductSearchPage from "./screens/ProductSearchPage";
import ScanPage from "./screens/ScanPage";
import HomePage from "./screens/HomePage";
import ProductDataPageSINRESTRICC from "./screens/ProductDataPageSINRESTRICC";
import ProductDataPageNOAPTO1 from "./screens/ProductDataPageNOAPTO1";
import ScanPage2 from "./screens/ScanPage2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Inter_thin: require("./assets/fonts/Inter_thin.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
    Inter_extrabold: require("./assets/fonts/Inter_extrabold.ttf"),
    Inter_black: require("./assets/fonts/Inter_black.ttf"),
    Niramit_regular: require("./assets/fonts/Niramit_regular.ttf"),
    Niramit_semibold: require("./assets/fonts/Niramit_semibold.ttf"),
    Niramit_bold: require("./assets/fonts/Niramit_bold.ttf"),
    "Londrina Shadow_regular": require("./assets/fonts/Londrina_Shadow_regular.ttf"),
    "Work Sans_bold": require("./assets/fonts/Work_Sans_bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="HomePage"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Registrarse"
              component={Registrarse}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginPage"
              component={LoginPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Nutriscore"
              component={Nutriscore}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDataPageNOAPTO"
              component={ProductDataPageNOAPTO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDataPageNOSEENCUENTRAPRODUCTO"
              component={ProductDataPageNOSEENCUEN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HistorialPage"
              component={HistorialPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DisagreePage"
              component={DisagreePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDataPageAPTO"
              component={ProductDataPageAPTO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RestrictionsPage"
              component={RestrictionsPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SplashPage"
              component={SplashPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductSearchPage"
              component={ProductSearchPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScanPage"
              component={ScanPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDataPageSINRESTRICCION"
              component={ProductDataPageSINRESTRICC}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDataPageNOAPTO1"
              component={ProductDataPageNOAPTO1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScanPage2"
              component={ScanPage2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashPage />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
