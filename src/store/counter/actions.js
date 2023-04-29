import getRandomInt from "@/helpers/getRandomInt";

export const  incrementRandomInt = async ( { commit } ) => {

    commit('changeLoading')

    const randomInt = await getRandomInt()
    
    commit('incrementBy', randomInt)
    commit('changeLoading')
    
}