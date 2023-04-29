<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.counter.count }}</h2>

    <h2>Computed: {{ countComputed }}</h2>
    <h1>MapState</h1>
    <h2>mapState: {{ count }}</h2>
    <h3>LastMutation: {{ lastMutation }}</h3>


    <button @click="increment">+1</button>
    <button @click="incrementBy">+5</button>
    <button @click="incrementRandomInt" :disabled="isLoading">Random</button>

    <h2>Direct getter:{{ squareCount }}</h2>
</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex'

export default {

    computed: {

        // computed: mapState(['count'])
        countComputed(){
            return this.$store.state.counter.count
        },
        ...mapState('counter', ['count','lastMutation','isLoading']),
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })
        ...mapGetters('counter', ['squareCount'])
    },

    methods:{
        increment(){
            this.$store.commit('counter/increment')
        },

        incrementBy(){
            this.$store.commit('counter/incrementBy', 5)
        },

        ...mapActions('counter', ['incrementRandomInt'])
        // ...mapActions({
        //     randomInt: 'counter/incrementRandomInt'
        // })

    },



}
</script>