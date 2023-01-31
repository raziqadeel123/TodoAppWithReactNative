import react, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import MainHeader from './Components/Header.js';
import TodoItem from './Components/TodoItem.js';
import AddTodo from './Components/AddTodo.js';

export default function App() {
  const [todos, setTodo] = useState([
    { text: 'wake up at 6', key: '1' },
    { text: 'drink water', key: '2' },
    { text: 'make a coffee', key: '3' },
    { text: 'write the day task', key: '4' },
  ]);

  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodo((prevTodo) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodo];
      });
    } else {
      Alert.alert('OOPS', 'Todos muss be over then 3 chars long ', [
        { text: 'understood', onPress: () => console.log('alert Closed') },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <MainHeader />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View stlye={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 30,
  },
  list: {
    marginTop: 10,
  },
});
