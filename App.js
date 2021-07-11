import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  //변수선언 
  //여기서 선언하면 지역변수, export 바깥에서 선언하면 전역변수

  //var cnt = 0;

  // hook : 변수선언과 비슷하나, 값을 바꿔서 넣을 수 있음
  const [ cnt, setCnt ] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.assa}>카운트 리액트 네이티브</Text>
      <Text style={styles.cnt}>{cnt}</Text>
      <Button title="더하기" onPress={()=>setCnt(cnt+1)}></Button>
      <Button title="빼기" onPress={()=>setCnt(cnt-1)}></Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  assa:{
    color:'#f00',
    fontSize:20
  },
  cnt:{
    fontSize:50,
    marginTop:20
  }
});
