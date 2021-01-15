import { ADD_EVENT } from "./events-actions";
import Event from '../Models/event'

const initialState ={
    events: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            const newEvent=new Event(new Date().toString(),action.eventData.title, action.eventData.info, action.eventData.date, action.eventData.image)
            return {           
                events:state.events.concat(newEvent) 
            }
        default:
            return state;
    }
}