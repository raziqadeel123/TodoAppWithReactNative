import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
export default AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState('');

  const ChnageHandler = (newTodo) => {
    setText(newTodo);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='enter new Todo ...'
        onChangeText={ChnageHandler}
      />
      <Button
        title='add todo'
        color='coral'
        onPress={() => submitHandler(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
  },
});
