import { Notifications } from "expo";
import { askAsync } from "expo-permissions";
import { AsyncStorage } from "react-native";
import { NOTIFICATIONS_STORAGE_KEY } from "../constants";
import { NOTIFICATIONS } from "expo-permissions";
import { red } from "../constants";

//this function removes all the scheduled notification
export const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATIONS_STORAGE_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
};

//returns the object of the notification
function createNotificationObject() {
  return {
    title: "Study Reminder!!",
    body: "👋 Reminder to study!! You Must take the quiz",
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      sticky: false,
      color: red,
      priority: "high",
    },
  };
}

//returns the object carrying the frequency of the notification
function getSchedule(day) {
  return {
    time: day,
    repeat: "day",
  };
}

// this is the function to set local notification

export function addNotification() {
  AsyncStorage.getItem(NOTIFICATIONS_STORAGE_KEY)
    .then(JSON.parse)
    .then((res) => {
      if (res === null) {
        askAsync(NOTIFICATIONS).then(({ status }) => {
          if (status === "granted") {
            Notifications.cancelAllScheduledNotificationsAsync();
            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(16);
            tomorrow.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(
              createNotificationObject(),
              getSchedule(tomorrow)
            );
            AsyncStorage.setItem(
              NOTIFICATIONS_STORAGE_KEY,
              JSON.stringify(true)
            );
          }
        });
      }
    });
}
