//importerer StyleSheet fra react-native  
import { StyleSheet } from 'react-native';

// samler appens styling
const styles = StyleSheet.create({

  // grunddesign til alle skærme
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },

  // Overskrifter på siderne
  overskrift: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  // Almindelig forklarende tekst
  beskrivelse: {
    fontSize: 16,
    marginBottom: 20,
  },

  // Knapperne på forsiden
  knapper: {
    flexDirection: 'row',
    gap: 20,
  },

  // Hver opgave i flatlist
  opgave: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

});

// eksporterer styles, så de kan bruges i andre filer
export default styles;