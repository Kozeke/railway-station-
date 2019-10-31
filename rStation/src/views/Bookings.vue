<template>
    <div class="container bootstrap snippet">
        <div class="row menu-items">
            <ProfileMenu></ProfileMenu> 
            <div class="menu-data row col-sm-9">
                <BookingModal :booking="temp" v-if="showModal" @close="showModal=false"></BookingModal>
                <table>
                    <thead>
                        <tr class="table-headers">
                            <th>Booking</th>
                            <th>Date</th>
                            <th>Market rate</th>
                            <th>Price</th>
                            <th>Value</th>
                            <th>Value1</th>
                        </tr>
                    </thead>
                    <tbody v-for="booking in bookings" :key="booking">
                        <tr>
                            <td class="bookingId" @click="openModal(booking)">{{booking.BookingId}}</td>
                            <th class="mobile-header">Date</th><td>{{booking.BookingTickets}}</td>
                            <th class="mobile-header">Market rate</th><td>{{booking.BookingDate}}</td>
                            <th class="mobile-header">Weight</th><td>{{booking.BookingRoute}}</td>
                            <th class="mobile-header">Value</th><td>{{booking.BookingPrice}}</td>
                            <th class="mobile-header">Value1</th><td>{{booking.passengerLastName + ' ' + booking.passengerFirstName[0]}}.</td>
                        </tr>
                    </tbody>
                </table>
            </div><!--/col-9-->
        </div>
    </div>
</template>
<script>
import ProfileMenu from '../components/ProfileMenu.vue'
import BookingModal from '../components/BookingModal.vue'

export default {
    components:{
        ProfileMenu,
        BookingModal
    },
    data() {
        return {
                showModal: false,
                bookings:[
                            {
                                BookingId: "01892342",
                                BookingPrice: 4590,
                                BookingTickets: 1,
                                BookingDate: "02-05-2019",
                                BookingRoute: "Almaty-Astana",
                                passengerFirstName: "Dimash",
                                passengerLastName: "Kaldykhanov",
                                trainName: "TrainName",
                                trainDepDate: "04-05-2019",
                                trainArrDate: "05-05-2019",
                                trainSeatNumber: [45]
                            },
                            {
                                BookingId: "01892342",
                                BookingPrice: 9180,
                                BookingTickets: 1,
                                BookingDate: "02-05-2019",
                                BookingRoute: "Almaty-Astana",
                                passengerFirstName: "Dimash",
                                passengerLastName: "Kaldykhanov",
                                trainName: "TrainName",
                                trainDepDate: "04-05-2019",
                                trainArrDate: "05-05-2019",
                                trainSeatNumber: [60]
                            },
                            {
                                BookingId: "01892342",
                                BookingPrice: 4890,
                                BookingTickets: 1,
                                BookingDate: "03-05-2019",
                                BookingRoute: "Almaty-Astana",
                                passengerFirstName: "Dimash",
                                passengerLastName: "Kaldykhanov",
                                trainName: "TrainName",
                                trainDepDate: "04-05-2019",
                                trainArrDate: "05-05-2019",
                                trainSeatNumber: [45]
                            }
                        ]
            };
        },
    methods: {
        openModal(data) {
            this.showModal = true
            this.temp = data
        },
    },
    computed: {
       
    }      
}
</script>
<style lang="scss" scoped>
    .container{
        margin: auto;
        margin-top: 138px;
        background: #fff;
        border: 1px solid rgba(0,0,0,0.3);
        padding: 16px;
        border-radius: 8px;
    }
    .menu-data{
        table{
            .bookingId{
                cursor:pointer;
            }
            .bookingId:hover{
                background-color: #00ff99;
            }
            width: 100%;
            border-collapse: collapse;
            border-radius: 6px;
            text-align: left;
            overflow: hidden;
            td, th{
                border-top: 1px solid #ECF0F1;
                padding: 10px;
            }
            
            td{
                border-left: 1px solid #ECF0F1;
                border-right: 1px solid #ECF0F1;
            }
            
            th{
                background-color: #00ff99;
            } 
            tr:nth-of-type(even){
                background-color: lighten(#00ff99, 35%);
            }     
        }
        .mobile-header{
            display: none;
        }

        @media only screen and (max-width: 760px){
            p{
                display: block;
                font-weight: bold;
            }
            
            table{
                tr{
                    td:not(:first-child), th:not(:first-child), td:not(.total-val){
                        display: none;
                    }
                    
                    &:nth-of-type(even) td:first-child{
                        background-color: lighten(#4ECDC4, 35%);
                    }
                    &:nth-of-type(odd) td:first-child{
                        background-color: white;
                    }
                    
                    &:nth-of-type(even) td:not(:first-child){
                        background-color: white;
                    }
                    
                    th:first-child{
                        width: 100%;
                        display:block;
                    }
                    
                    th:not(:first-child){
                        width: 40%;
                        transition: transform 0.4s ease-out;
                        transform:translateY(-9999px);
                        position: relative;
                        z-index: -1;
                    }
                    
                    td:not(:first-child){
                        transition: transform 0.4s ease-out;
                        transform:translateY(-9999px);
                        width: 60%;
                        position: relative;
                        z-index: -1;
                    }
                    
                    td:first-child{
                        display: block;
                        cursor: pointer;
                    }
                    
                    &.total th{
                        width: 25%;
                        display: inline-block;
                    }
                    
                    td.total-val{
                        display: inline-block;
                        transform: translateY(0);
                        width: 75%;
                    }
                }
            }
        }

        @media only screen and (max-width: 300px){
            table{
                tr{
                    th:not(:first-child){
                        width: 50%;
                        font-size: 14px;
                    }
                    
                    td:not(:first-child){
                        width: 50%;
                        font-size: 14px;
                    }
                }
            }
        }
    }
</style>


