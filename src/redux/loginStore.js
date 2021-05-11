
const saveSessionIdReducer = (
    state = {
        sessionId: ''
    },
    action
    ) => {
    switch(action.type) {
        case 'SESSION_ID':
                const sessionId = action.payload
                localStorage.setItem('sessionId', sessionId)
                return {
                    ...state,
                    sessionId
                }
                default: {
                    return state
                }
    }
};

// Action
const saveSessionIdAction = (sessionId) => {
    return {
        type: 'SESSION_ID',
        payload: sessionId
    }
}

export {
    saveSessionIdReducer,
    saveSessionIdAction
}