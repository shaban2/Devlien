import * as Permissions from "expo-permissions";

export * from "expo-permissions";

export function requestPermission(
  requiredPermission: Permissions.PermissionType
){
  return Permissions.getAsync(requiredPermission)
    .then(permission => {
      if (permission.status !== Permissions.PermissionStatus.GRANTED) {
        return Permissions.askAsync(requiredPermission);
      }

      return permission;
    })
    .then(permission => {
      if (permission.status !== Permissions.PermissionStatus.GRANTED) {
        return Promise.reject(new Error("Cannot access the phone gallery"));
      }

      return permission;
    });
}
