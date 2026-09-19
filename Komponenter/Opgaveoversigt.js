import { useState } from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';
import styles from '../Style/styles';

// opgaverne med deres deadline
const startOpgaver = [
  { id: '1', fag: 'Makroøkonomi', navn: 'Læs kapitel 4', dato: '21. september' },
  { id: '2', fag: 'Finansiering', navn: 'Øvelsesopgaver', dato: '23. september' },
  { id: '3', fag: 'Matematik', navn: 'Skriftlig opgave', dato: '25. september' },
  { id: '4', fag: 'Statistik', navn: 'Aflevering', dato: '27. september' },
  { id: '5', fag: 'Organisation', navn: 'Læs case', dato: '30. september' },
  { id: '6', fag: 'Innovation', navn: 'Godkendelsesopgave', dato: '2. oktober' },
];

// Skærmen med opgaver og deadlines
export default function Opgaveoversigt() {

  // Gemmer opgaverne
  const [opgaver, setOpgaver] = useState(startOpgaver);

 // Ændrer opgaven mellem færdig og ikke færdig
  function markerOpgave(id) {
    setOpgaver(
      opgaver.map(opgave =>
        opgave.id === id
          ? { ...opgave, faerdig: !opgave.faerdig }
          : opgave
      )
    );
  }

  return (
    <View style={styles.container}>

      <Text style={styles.overskrift}>
        Min opgaveoversigt
      </Text>

      {/* Viser opgaverne som en liste */}
      <FlatList
        data={opgaver}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={styles.opgave}
            onPress={() => markerOpgave(item.id)}
          >
            <Text>
              {item.faerdig ? '✓' : '○'} {item.fag}
            </Text>

            <Text>{item.navn}</Text>

            <Text>
              Deadline: {item.dato}
            </Text>
          </Pressable>
        )}
      />

    </View>
  );
}