<template lang="pug">
div(class="eachSection")
    h2(class="ui dividing header") Family information
        div(class="sub header") Limit 3 People
    
    table(class="ui very basic table")
        thead
            tr
                th First Name
                th Last Name
                th Citizen ID
                th Nationality
                th Mobile Number
                th Employer
                th Parent Status
                th Career
        tbody
            tr
                td #
                td #
                td #
                td #
                td #
                td #
                td #
                td #
    
    button(class="ui right floated button" v-on:click.prevent='showModal()') Add
    Modal_family
    
</template>
<script>
    // Child Components ( Each section of form )
    import Modal_family from './modal_family.vue'

    export default {
        components: {
            Modal_family,
        },
        methods: {
            showModal: function(){
                $('#modalFamily').modal( "show" )
            },
        },
        
    }
</script>
<style scoped>

</style>