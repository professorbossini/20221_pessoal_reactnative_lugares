import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
//createNativeStackNavigator

import DetalhesDoLugarTela from '../telas/DetalhesDoLugarTela'
import ListaDeLugaresTela from '../telas/ListaDeLugaresTela'
import MapaTela from '../telas/MapaTela'
import NovoLugarTela from '../telas/NovoLugarTela'


const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="ListaDeLugares">
            <Stack.Screen name="DetalhesDoLugar" component={DetalhesDoLugarTela} />
            <Stack.Screen name="ListaDeLugares" component={ListaDeLugaresTela}/>
            <Stack.Screen name="Mapa" component={MapaTela} />
            <Stack.Screen name="NovoLugar" component={NovoLugarTela} />
        </Stack.Navigator>
    </NavigationContainer>

)

export default container