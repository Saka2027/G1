// Importerer navigation fra react-navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importerer vores tre skærme
import Forside from './Komponenter/Forside';
import Opgaveoversigt from './Komponenter/Opgaveoversigt';
import Information from './Komponenter/Information';

// Opretter navigation mellem skærmene
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        {/* Forside skærmen*/}
        <Stack.Screen
          name="Forside"
          component={Forside}
        />

        {/* Skærmen med opgaver og deadlines */}
        <Stack.Screen
          name="Opgaveoversigt"
          component={Opgaveoversigt}
        />

        {/* Skærmen med information om appen */}
        <Stack.Screen
          name="Information"
          component={Information}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}