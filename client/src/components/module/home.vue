<template lang="pug">
    Template
        div(class="ui segment")
            div(class="ui grid")
            div(class="two column row")
                div(class="column")
                label(for="boss_camp_id") camp boss
                select(class="ui fluid search dropdown" name="boss_camp" v-model="boss_camp" id="boss_camp_id")
                    option(value="" selected) select from
                    option(v-for="user in users" v-bind:value="user.id" class="ui icon-users icon") {{user.name}} 
                div(class="column") 
                label(for="camp")
                select(class="ui fluid search dropdown" name="camp" v-model="camp" id="camp_id" v-on:change="fetchProjectById(camp)")
                    option(value="" selected) select from
                    option(v-for="proj in projects" v-bind:value="proj.id" class="ui icon-users icon") {{proj.project_name}}                                                                                          
                div {{wantedProject}}
</template>
<script>

    import axios from 'axios'
    //Main Template
    import Template from '../template/template.vue'
    
    export default {
        data() {
           return {
                users: [],
                wantedUser: [],
                projects: [],
                wantedProject: [],
                boss_camp: [],
                camp: [],
                search_input: "search someone",
           } 
        },
        components: {
            Template,
        },
        beforeCreate() {
            console.log('before create');
        },
        created() {
            console.log('created');
        },
        methods: {
            fetchUsers: function() {  
                axios.get('http://localhost:3000/user')
                .then(res => {
                    this.users = res.data;
                    console.log(res.data);
                })
                .catch( error => {
                    this.users = error.data;
                });
            },
            fetchUserById: function(id) {  
                axios.get('http://localhost:3000/user/'+id)
                .then(res => {
                    this.wantedUser = res.data;
                    console.log(res.data);
                })
                .catch( error => {
                    this.wantedUser = error.status.data;
                });
            },
            fetchProject: function() {  
                axios.get('http://localhost:3000/project')
                .then(res => {
                    this.projects = res.data;
                    console.log(res.data);
                })
                .catch( error => {
                    this.projects = error.status.data;
                });
            },
            fetchProjectById: function(id) {  
                axios.get('http://localhost:3000/project/'+id)
                .then(res => {
                    this.wantedProject = res.data;
                    console.log(res.data);
                })
                .catch( error => {
                    this.projects = error.status.data;
                });
            },eloadData: function() {
                var obj = $('#input_search_child');
                if(!obj.hasClass('loading')){
                    obj.addClass('loading');

                     setTimeout(function(){ 
                      obj.removeClass('loading'); 
                      //console.log('Person = '+this.boss_camp);
                    }, 2000);
                }
            }
        },
        beforeMount() {
            console.log('before mount');
        },
        mounted() {
           this.fetchUsers();
           this.fetchProject();
            $('#boss_camp_id').dropdown();
        },
        beforeUpdate(){
            console.log('before update');
        },
        updated(){
           console.log('updated');
        }     
    }
</script>
<style>

</style>
