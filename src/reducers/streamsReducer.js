import _ from "lodash";
import {
    FETCH_STREAM,
    FETCH_STREAMS,
    EDIT_STREAM,
    DELETE_STREAM,
    CREATE_STREAM,
} from "../actions/types";

export const streamsReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_STREAM:
        case CREATE_STREAM:
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            return _.omit(state, action.payload);
        case FETCH_STREAMS:
            return { ...state, ..._.mapKeys(action.payload, "id") };
        default:
            return state;
    }
};
