import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Intial = () => {
const [data,setData]=useState<number>(-1);

const  intialSetUp=()=>setData(10);


const testIntialSetUp=()=>{
    return data*10;
}


  return (
    <View>
      <Text>Intial</Text>
    </View>
  )
}

export default Intial

const styles = StyleSheet.create({})