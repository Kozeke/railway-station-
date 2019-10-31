<template>
    <div class="search_ticket">
        <v-select class="style-chooser" placeholder="Departure" v-model="selected" :options="stations"/>
        <div class="direction_switcher" @click="changeDirection()">
            <img src="../assets/icons/opposite_arrows.svg" class="icon" alt="">
        </div>
        <v-select class="style-chooser" placeholder="Arrival" v-model="selected" :options="stations"/>
        <Datepicker v-model="date" placeholder="Choose date" input-class="date"/>
        <div class="search-button">
            <img
                src="../assets/icons/search.svg"
                class="icon"
                alt=""
                v-if="!isLoading"
                @click="search()">
            <LoadingIcon v-else/>
        </div>
    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
import LoadingIcon from '../components/LoadingIcon.vue'
import vSelect from 'vue-select'

export default {
    components: {
        Datepicker,
        LoadingIcon,
        'v-select': vSelect
    },
    props: ['isLoading'],
    data() {
        return {
            from: '',
            to: '',
            date: null,
            stations: ['a', 'b'],
            selected: ''
        }
    },
    methods: {
        changeDirection() {
            const temp = this.from;
            this.from = this.to;
            this.to = temp;
        },
        search() {
            this.$emit(
                'submit', 
                {
                    from: this.from,
                    to: this.to, 
                    date: this.date
                }
            )
        }
    }
}
</script>

<style lang="scss">
.style-chooser .vs__search::placeholder,
  .style-chooser .vs__dropdown-toggle,
  .style-chooser .vs__dropdown-menu {
    background: #dfe5fb;
    border: none;
    color: #394066;
    text-transform: lowercase;
    font-variant: small-caps;
  }

  .style-chooser .vs__clear,
  .style-chooser .vs__open-indicator {
    fill: #394066;
  }
    .search_ticket{
        display: flex;
        justify-content: flex-start;
        padding: 24px;
        background-color: rgba(0,0,0, .2); 
        width: 100%;
        align-items: center;
        flex-wrap: wrap;
        .direction_switcher{
            display: flex;
            align-items: center;
            padding: 0 4px;
            height: 40px;
            border-left: 1px solid #ccc;
            background: #fff;
            .icon{
                width: 20px;
            }
            &:hover{
                cursor: pointer;
            }
        }
        .date{
            flex: 1;
            width: 250px;
            height: 40px;
            background: #fff;
            display: flex;
            font-size: 16px;
            padding-left: 4px;
        }
        .search-button{
            width: 40px;
            height: 40px;
            background-color: #fb7b4c;
            display: flex;
            align-items: center;
            justify-content: center;
            .icon{
                width: 25px;
                &:hover{
                    cursor: pointer;
                }
            }
        }
        
    }
</style>