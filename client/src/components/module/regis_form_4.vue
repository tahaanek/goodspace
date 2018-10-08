<template lang="html">
    <div class="ui basic">
        <div class="ui horizontal divider">
    ข้อมูลที่พักอาศัย
  </div>
        <select name="child_in_site" class="ui fluid search dropdown" v-model="child_in_site" v-on:change="isSite(child_in_site)">
            <option value="1" selected> พักอยู่ในแคมป์</option>
            <option value="2"> จากนอกแคมป์</option>
        </select>
<div class="ui basic segment" v-if="saveMe">
    <h2> Vaccine information</h2>
    <div class="">
        <span>Has Record</span>
    <input type="radio" name="hasRecord"> มี
    <input type="radio" nmae="hasRecord"> ไม่มี 
    </div>
     <div class="">
        <span>Receive Vac</span>
    <input type="radio" name="rcvVac"> มี
    <input type="radio" nmae="rcvVac"> ไม่มี 
    </div>

    <table class="ui very basic table">
        <thead>
            <tr><th>Details</th><th>Received</th><th>Date</th></tr>
        </thead>
        <tbody>
            <tr>
                <td>test</td>
                <td><input type="checkbox" class="ui input checkbox"></td>
                <td>when</td>
            </tr>
        </tbody>
    </table>

</div>   

    </div>
</template>
<script>
//- Each item
         //- div(class="item")
           //- div(class="content")
               //- button(class="ui right floated button" v-on:click.prevent='showModal()' ) Add Vaccine 
    //- Modal_vaccine_list
    // Child Components ( Each section of form )
    // import Modal_vaccine_list from './modal_vaccine_list.vue'
    // import datepicker from 'vuejs-datepicker'

    export default {
        data() {
           return {
              child_in_site: null,
              saveMe: false
           }
        },
        components: {
            // Modal_vaccine_list,
            // datepicker
        },
        methods: {
            // showModal: function(){
            //    $('#modalVaccine').modal( "show" )
            // },
            saveChild: function(bool){
                if(bool){
                    return this.saveMe = true;
                }else return this.saveMe = false;
            },
            isSite: function(val) {
             if(val == 1){
                 alert('in site');
                this.saveChild(true);
                }else{
                    alert('off site');
                     this.saveChild(false);
                }
            }
        }
    }
</script>
<style scoped>

</style>