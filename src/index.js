import { View, Text ,FlatList,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import DATA from './data'

const Home = () => {
  return (
    <View style={styles.container}>
        <Text 
        style={{
            fontWeight:"bold",
            fontSize:24,
            marginTop:100,
        }}
        >
          FlatList In React Native (Expo)
        </Text>
        <FlatList
            data={DATA}
            numColumns={1}
            horizontal={false}
            keyExtractor={(item) =>item.id}
            renderItem={({item}) =>(
                <TouchableOpacity style={{marginTop:20}}>
                   <View style={styles.box}>
                      <Text style={styles.text}>
                        {item.title}
                      </Text>
                      <Text style={styles.text}>
                        {item.message}
                      </Text>
                   </View>
                </TouchableOpacity>
            )}
        />
      </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box:{
        backgroundColor: "#c0c0c0",
        elevation:7,
        borderRadius:5,
        shadowColor: '#026efd',
        alignItems: 'center',
        height:100,
        width:400,
        justifyContent: 'center',
        marginBottom:8,
    },
    text:{
        alignItems: 'center',
        fontWeight:"bold",
        marginTop: 5,
    }
})