<template lang="pug">
    Template
        div(class="ui grid")
            div(class="column")
                div(class="ui segment") 
                    div(class="field")
                        label search from parents name 

                            div(class="ui icon input")
                                input(
                                    type="text" 
                                    placeholder="searching for parents"
                                    v-model="search"
                                    @input="onChange"
                                    )
                                i( class="search icon" )

</template>
<script>
    
    //Main Template
    import Template from '../template/template.vue';
    import axios from 'axios';
    export default {
        components: {
            Template
        },
        data() {
            return{
                search: ''
            }
        },
        methods: {
            onChange() {
                 axios.get('https://jsonplaceholder.typicode.com/users?username='+this.search)
                 .then(res => {
                    this.search = res.data.username;
                 })
                 .catch(err => {
                     console.log(err);
                     });
            }
        }
    }

</script>
<style>

</style>
