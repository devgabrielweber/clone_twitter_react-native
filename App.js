import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// You can import from local files
import TwitterList from './components/TwitterList';
import TwitterForm from './components/TwitterForm';
import ConfigTela from './components/ConfigTela';
import NotificacaoList from './components/NotificacaoList';

const PricipalStack = createNativeStackNavigator();

function PrincipalStackScreen() {
  return (
    <PricipalStack.Navigator>
      <PricipalStack.Screen
        name="TwitterList"
        component={TwitterList}
        options={{ title: 'Listagem' }}
      />
      <PricipalStack.Screen
        name="TwitterForm"
        component={TwitterForm}
        options={{ title: 'Formulário' }}
      />
    </PricipalStack.Navigator>
  );
}

const ConfigStack = createNativeStackNavigator();

function ConfigStackScreen() {
  return (
    <ConfigStack.Navigator>
      <ConfigStack.Screen
        name="Configuração"
        component={ConfigTela}
        options={{ title: 'Configuração App' }}
      />
    </ConfigStack.Navigator>
  );
}

const NotificacaoStack = createNativeStackNavigator();

function NotificacaoStackScreen() {
  return (
    <NotificacaoStack.Navigator>
      <NotificacaoStack.Screen
        name="Config"
        component={NotificacaoList}
        options={{ title: 'Notificações' }}
      />
    </NotificacaoStack.Navigator>
  );
}

const MensagemStack = createNativeStackNavigator();

function MensagemStackScreen() {
  return (
    <MensagemStack.Navigator>
      <MensagemStack.Screen
        name="Config"
        component={ConfigTela}
        options={{ title: 'Mensagens' }}
      />
    </MensagemStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="inicio"
          component={PrincipalStackScreen}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="notificacao"
          component={NotificacaoStackScreen}
          options={{
            tabBarLabel: 'Notificações',
            tabBarIcon: ({ color }) => (
              <Icon name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="config"
          component={ConfigStackScreen}
          options={{
            tabBarLabel: 'Config',
            tabBarIcon: ({ color }) => (
              <Icon name="gear" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//https://random-data-api.com/api/v2/users
