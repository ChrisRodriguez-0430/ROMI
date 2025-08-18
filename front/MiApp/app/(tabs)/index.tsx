import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Alert } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {

  const [Usuario_id, setUsuario_id] = useState('');
  const [name, setName] = useState('');
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    console.log("Intentando enviar:", { Usuario_id, name, correo, password });

    try {
      const response = await fetch('http://192.168.45.101:3000/api/ingreso/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Usuario_id, name, correo, password }),
      });

      console.log("Respuesta recibida:", response.status);

      if (response.ok) {
        const data = await response.json();
        console.log("Datos de la API:", data);

        Alert.alert('Éxito', 'Formulario enviado correctamente');

        // Limpieza de los campos
        setUsuario_id('');
        setName('');
        setCorreo('');
        setPassword('');
      } else {
        const errorData = await response.json();
        console.error("Error en la API:", errorData);

        Alert.alert('Error', errorData.message || 'Hubo un problema al enviar el formulario');
      }
   } catch (error) {
  console.error("Error al conectar con la API:", error);

  // Manejo seguro del error
  let mensaje = "Error desconocido";

  if (error instanceof Error && error.message) {
    mensaje = error.message;
  } else if (typeof error === "string") {
    mensaje = error;
  } else {
    try {
      mensaje = JSON.stringify(error);
    } catch {
      mensaje = String(error);
    }
  }

  Alert.alert("Error", "No se pudo conectar con la API: " + mensaje);
}
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Formulario de contacto</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="ID de Usuario"
        value={Usuario_id}
        onChangeText={setUsuario_id}
        keyboardType="numeric"
      />
      <ThemedText type="subtitle">Ingrese sus datos</ThemedText>
      
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo"
        value={correo}
        onChangeText={setCorreo}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        keyboardType="default"
        autoCapitalize="none"
      />
      <Button title={loading ? 'Enviando...' : 'Enviar'} onPress={handleSubmit} disabled={loading} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
});
