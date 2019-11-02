<template>
    <div class="modal-mask" id="imagesave">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header" >
              Booking: <span id="booking-id">{{$attrs.schedule.BookingId}}</span>
            </slot>
          </div>
          <div class="modal-body" ref="content">
            <slot name="body">
              <table>
                <tbody>
                  <td>
                    <tr>Number of Tickets: {{$attrs.booking.BookingTickets}}</tr>
                    <tr>Route: {{$attrs.booking.BookingRoute}}</tr>
                    <tr>Name: {{$attrs.booking.passengerFirstName}}  {{$attrs.booking.passengerLastName}}</tr>
                    <tr>Departure Date: {{$attrs.booking.trainDepDate}}</tr>
                    <tr class="seatNums">Seats: {{$attrs.booking.trainSeatNumber}}
                      <!-- <ol>
                        <li v-for="seat in $attrs.booking.trainSeatNumber" v-bind:key="seat">{{seat}} </li>
                      </ol> -->
                    </tr>
                  </td>
                  <td>
                    <tr>Price: {{$attrs.booking.BookingPrice}}</tr>
                    <tr>Purchase Date: {{$attrs.booking.BookingDate}}</tr>
                    <tr>Train Name{{$attrs.booking.trainName}}</tr>
                    <tr>Arrival Date: {{$attrs.booking.trainArrDate}}</tr>
                  </td>
                </tbody>
              </table>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button @click="downloadWithCSS">Download PDF WITH CSS</button>
              <button class="modal-default-button" @click="$emit('close')">
                Close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

export default {
    data(){
      return{
        
      }
    },
    mounted(){

    },
    methods: {
     
    },
     close (e) {
      if (!this.$el.contains(e.target)) {
        this.state = false
      }
    }
}
</script>
<style scoped lang="scss">
  .modal-header span{
    margin-right: 72%;
  }
  table{
    width: 100%;
    td{
      width: 46%;
      margin: 0 2%;
      padding: 0 6px;
    }
    tr{      
      border: 1px solid red;
    }
  }
  .seatNums li{
    display: inline;
    list-style: none;
  }

  .modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>

