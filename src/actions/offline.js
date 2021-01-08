import {
    MSG_EVENT,
    APP_EVENT,
    TOWHOM_EVENT
} from "../constants/actions/offline"

export const appEvent = () => {
    return {type: APP_EVENT};
}

export const msgEvent = () => {
    return {type: MSG_EVENT};
}

export const toWhomEvent = () => {
    return {type: TOWHOM_EVENT};
}