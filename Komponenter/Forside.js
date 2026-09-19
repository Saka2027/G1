// Importerer de nødvendige komponenter fra React Native og styling fra den separate fil styles.js
import { View, Text, Button } from 'react-native';
import styles from '../Style/styles';

export default function Forside({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.overskrift}>Mit Studieoverblik</Text>

      <Text style={styles.beskrivelse}>
        Få et hurtigt overblik over dine opgaver og deadlines.
      </Text>

      {/* Knapper til de to andre skærme */}
      <View style={styles.knapper}>
        <Button
          title="Mine opgaver"
          onPress={() => navigation.navigate('Opgaveoversigt')}
        />

        <Button
          title="Om appen"
          onPress={() => navigation.navigate('Information')}
        />
      </View>

    </View>
  );
}