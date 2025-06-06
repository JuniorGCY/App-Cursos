import { useEffect,useState } from "react";
import { View,Text, StyleSheet, Button } from "react-native";

import notifee, {
  AuthorizationStatus,
  EventType,
  AndroidImportance
} from '@notifee/react-native'

export default function App() {

  const [statusNotification, setStatusNotification] =  useState(true)

  useEffect( () => {
    async function getPermission(){
      const settings = await notifee.requestPermission();

      if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
        console.log("Permission: ", settings.authorizationStatus)
        setStatusNotification(true)
      } else {
        console.log("Usuario negou a permissão")
        setStatusNotification(false)
      }
    }

    getPermission();
  },[])

  useEffect ( () => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch(type) {
        case EventType.DISMISSED:
          console.log("Usuario tirou a notificação")
          break;
        case EventType.PRESS:
          console.log("TOCOU: ",detail.notification)
      }
    })
  }, [])

  async function handleNotificate() {
    if (!statusNotification) {
      return;
    }

    const channelID = await notifee.createChannel({
      id: 'Lembrete',
      name: 'Lembrete',
      vibration: true,
      importance: AndroidImportance.HIGH
    }) 

    await notifee.displayNotification({
      id: 'Lembrete',
      title: 'Estudar programação',
      body: 'Lembrete para estudar',
      android:{
        channelId,
        pressAction: {
          id: 'default'
        }
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text> Notificações App</Text>

      <Button title="Enviar notificação" onPress={handleNotificate}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})