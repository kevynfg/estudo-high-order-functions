//FSM = Finite state machine

let onEvent = (state, event) => {
    switch(event) {
        case 'right':
        return state-1;
        case 'left':
        return state+1
    }
}