import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
//createNativeStackNavigator

import DetalhesDoLugarTela from '../telas/DetalhesDoLugarTela'
import ListaDeLugaresTela from '../telas/ListaDeLugaresTela'
import MapaTela from '../telas/MapaTela'
import NovoLugarTela from '../telas/NovoLugarTela'

import Cores from "../constantes/Cores"
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import BotaoCabecalho from "../componentes/BotaoCabecalho"


const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="ListaDeLugares"
            screenOptions={{
                headerStyle: {backgroundColor: Cores.primary},
                headerTintColor: 'white'
            }}>
            <Stack.Screen 
                name="DetalhesDoLugar" 
                component={DetalhesDoLugarTela} 
                options={(props) => ({
                    title: props.route.params.tituloLugar
                })}/>
            <Stack.Screen 
                name="ListaDeLugares" 
                component={ListaDeLugaresTela}
                options={(props) => ({
                    headerRight: () => <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
                        <Item 
                            title="Adicionar"
                            iconName="md-add"
                            onPress={() => {
                                props.navigation.navigate('NovoLugar')
                            }}
                        />    
                    </HeaderButtons>
                })}
            />
            <Stack.Screen name="Mapa" component={MapaTela} />
            <Stack.Screen name="NovoLugar" component={NovoLugarTela} />
        </Stack.Navigator>
    </NavigationContainer>

)

export default container