import { writable } from "svelte/store"
import { alertType, alertconfirmType } from "./T"

export const DialogOpen = writable(false)
export const DialogText = writable("")
export const AlertBoxType = writable(alertType.simple)
export const DialogConform = writable(alertconfirmType.waiting)