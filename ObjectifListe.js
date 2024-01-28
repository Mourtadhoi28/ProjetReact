import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';  


const ObjectifListe = () => {
  const [nouvelObjectif, setNouvelObjectif] = useState('');
  const [objectifs, setObjectifs] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d'altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);

  const ajouterObjectif = () => {
    if (nouvelObjectif.trim() !== '') {
      setObjectifs([...objectifs, nouvelObjectif]);
      setNouvelObjectif('');
    }
  };

  const supprimerObjectif = (index) => {
    const nouveauxObjectifs = [...objectifs];
    nouveauxObjectifs.splice(index, 1);
    setObjectifs(nouveauxObjectifs);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ma liste des Objectifs :</Text>

      {/* Champ d'entrée et bouton pour ajouter un nouvel objectif */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ajoutez un new objectif"
          value={nouvelObjectif}
          onChangeText={text => setNouvelObjectif(text)}
        />
        <Button title="Add" onPress={ajouterObjectif} />
      </View>

      {/* Affichage de la liste des objectifs avec possibilité de suppression */}
      {objectifs.map((objectif, index) => (
        <View key={index} style={styles.objectifContainer}>
          <Text style={styles.objectifText}>{objectif}</Text>
          <TouchableOpacity onPress={() => supprimerObjectif(index)}>
            <Ionicons name="close-circle" size={24} color="red" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
  objectifContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  objectifText: {
    fontSize: 16,
    marginVertical: 5,
    flex: 1,
  },
});

export default ObjectifListe;