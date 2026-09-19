//importerer komponenter fra React Native og styling fra styles.js
import { View, Text } from 'react-native';
import styles from '../Style/styles';

export default function Information() {
  return (
    <View style={styles.container}>

      <Text style={styles.overskrift}>Om appen</Text>

      <Text style={styles.beskrivelse}>
        Mit Studieoverblik hjælper studerende med at få et simpelt overblik
        over deres opgaver og deadlines.
      </Text>

      <Text style={styles.beskrivelse}>
        Appen er lavet som et supplement til canvas og skal gøre det lettere
        for studerende at se, hvad der skal laves.
      </Text>

    </View>
  );
}