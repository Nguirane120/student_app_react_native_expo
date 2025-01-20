import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import SearchInput from './SearchInput'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowDown, faCalculator, faCheck } from '@fortawesome/free-solid-svg-icons'
import CardComponent from './CardComponent'

const Subjects = () => {
  return (
     <ScrollView>
    <View>
      <SearchInput />
      <View style={styles.container}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{fontWeight:"200"}}>Subjects: <Text style={{fontWeight:"bold"}}>All</Text></Text>
            <FontAwesomeIcon icon={faArrowDown} style={{marginLeft:10}}/>
        </View>
        <View style={{flexDirection:"row", alignItems:"center"}}>
            <Text style={{fontWeight:"200"}}>Sort by: <Text style={{fontWeight:"bold"}}>Do first</Text></Text>
            <FontAwesomeIcon icon={faArrowDown} style={{marginLeft:10}}/>
        </View>
      </View>
     <CardComponent leftIcon={faCalculator} rightIcon={faCheck} bgColor="#F1F5FE"
    cardTtitle="Basic Mathematics" time="Today, 08:15" teacher="Mr Robot"/>
     <CardComponent leftIcon={faCalculator} rightIcon={faCheck} bgColor="#EBFDFB"
    cardTtitle="Basic Mathematics" time="Today, 08:15" teacher="Mr Robot"/>
     <CardComponent leftIcon={faCalculator} rightIcon={faCheck} bgColor="#FDF7E5"
    cardTtitle="Basic Mathematics" time="Today, 08:15" teacher="Mr Robot"/>
     <CardComponent leftIcon={faCalculator} rightIcon={faCheck} bgColor="#FCF0FE"
    cardTtitle="Basic Mathematics" time="Today, 08:15" teacher="Mr Robot"/>
    </View>
     </ScrollView>
  )
}

export default Subjects

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center"
    }
})