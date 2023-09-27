import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TextReverse = () => {
  const [inicio, setInicio] = useState('');
  const [final, setFinal] = useState('');
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  const invertirTexto = () => {
    // Verificar si inicio y final son números válidos o usar 0 como valor predeterminado
    const inicioNumero = isNaN(parseInt(inicio)) ? 0 : parseInt(inicio);
    const finalNumero = isNaN(parseInt(final)) ? 0 : parseInt(final);

    if (inicioNumero >= 0 && finalNumero < texto.length && inicioNumero <= finalNumero) {
      const parteReversa = texto.substring(inicioNumero, finalNumero + 1).split('').reverse().join('');
      const textoReverso = texto.substring(0, inicioNumero) + parteReversa + texto.substring(finalNumero + 1);
      setResultado(textoReverso);
    } else {
      setResultado('Error: Inicio o final fuera de rango');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Inicio:</Text>
      <TextInput
        style={styles.input}
        value={inicio.toString()}
        onChangeText={(text) => setInicio(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Final:</Text>
      <TextInput
        style={styles.input}
        value={final.toString()}
        onChangeText={(text) => setFinal(text)}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Texto:</Text>
      <TextInput
        style={styles.input}
        value={texto}
        onChangeText={(text) => setTexto(text)}
      />
      <Button title="Invertir Texto" onPress={invertirTexto} />
      <Text style={styles.result}>
        {resultado.split('\n').map((line, index) => (
          <Text key={index} style={styles.textCenter}>
            {line}
          </Text>
        ))}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
     width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
});

export default TextReverse;
