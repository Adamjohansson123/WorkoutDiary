export const ADD_EVENT = 'ADD_EVENT'

export const addEvent = (title, info, date, image) => {
    return {type: ADD_EVENT, eventData : { title:title, info:info, date:date, image:image }}
}