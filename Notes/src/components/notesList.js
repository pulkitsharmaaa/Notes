import React from 'react';
import {TouchableOpacity, Text, View, FlatList, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {deleteNote} from '../redux/notesSlice';
import { Image } from 'react-native';


const NotesList = () => {
  const notes = useSelector(state => state.notesdata);
  const dispatch = useDispatch();

  const noteDelete = id => {
    dispatch(deleteNote(id));
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <TouchableOpacity onPress={() => noteDelete(item.id)} style={styles.btn}>
          <Image source={require('../Images/trash.png')} style={styles.deleteBtn} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex:1}}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </View>
  );
};

export default NotesList;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#e9e9e9',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row'
  },
  title: {
    fontSize: 23,
    color: 'black',
    paddingRight:20
  },
  btn:{
    position:'absolute',
    right:10,
    top:'50%'
  },
  deleteBtn:{
    height:33,
    width:33,
    tintColor:'red'
  }
});
