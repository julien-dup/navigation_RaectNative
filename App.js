import { NavigationContainer } from '@react-navigation/native'
import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Button, View, Text } from 'react-native'

const Stack = createNativeStackNavigator()

const HomeScreen = ({navigation}) => (
  <Button
    title='voir l écran de test'
    onPress={() =>
      navigation.navigate('test')
    }
  />
)

const TestScreen = ({navigation}) => (
  <View style={{flex: 1}}>
      <Text>Ceci est un test </Text>
      <Button 
      title='retour à la page d acceuil'
      onPress={() =>
        navigation.navigate('home')
      }
      />
  </View>
)

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  component={HomeScreen} name='home'/>
        <Stack.Screen  component={TestScreen} name='test'/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App