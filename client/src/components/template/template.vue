<template lang="pug">
    
    div
        div(class="ui grid")
            div(class="column")
                 Appbar
        div(id="wrapper" class="ui celled grid")
            div(class="row")
                //- Navigation
                div(class="three wide column")
                    Navigation
                //- Slot
                div(id="registrationform" class="thirteen wide column")
                    slot
        div(id="footerContainer" class="ui grid")
            div(class="column")
                Footer
                
</template>
<script>
    // import components
    import Appbar from './template-appbar.vue'
    import Footer from './template-footer.vue'
    import Navigation from './template-navigation.vue'
    import Datepicker from 'vuejs-datepicker'

    export default {
        components: {
            Appbar,
            Footer,
            Navigation,
            Datepicker
        }
        
    }
</script>

<style>
</style>
