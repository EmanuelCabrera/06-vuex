

export const increment = ( state ) => {
    state.count++ 
    state.lastMutation = 'increment'
}

export const incrementBy = ( state, value ) => {
    state.count += value
    state.lastMutation = 'increment by value ' + value
    state.lastRandomInt = value
}

export const changeLoading =( state ) => {
    state.isLoading = !state.isLoading
    state.lastMutation = 'change Loading '

}