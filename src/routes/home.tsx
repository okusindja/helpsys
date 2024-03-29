import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
