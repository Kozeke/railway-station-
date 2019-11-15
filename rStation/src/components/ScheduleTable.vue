<template >
  <div>
    <table id="fifthTable">
      <thead>
        <tr>
          <th>Train №</th>
          <th>From</th>
          <th style="text-align:center">Time in way</th>
          <th style="text-align:right">To</th>
          <th>Type</th>
          <th>Number of places</th>
        </tr>
      </thead>
      <tbody>
        <tr class="tb1" v-bind:key="schedule.TravelInstanceID" v-for="schedule in schedules">
          <td>
            <div class="trainInfo">
              <div class="trainNum">{{schedule.TrainName}}</div>
              <div>
                <a href="#">Описание</a>
              </div>
              <div class="trainDir">{{schedule.TrainFrom}}->{{schedule.TrainTo}}</div>
              <div>
                <a href="#">Маршрут поезда</a>
              </div>
            </div>
          </td>
          <td>
            <div class="Departure">
              <div class="time">21:09</div>
              <div class="date">{{schedule.DepartureTime}}</div>
              <div class="clientTo">{{schedule.ClientFrom}}</div>
              <div class="text">(время местное)</div>
            </div>
          </td>
          <td>
            <div class="tm">14ч 21м</div>
            <div class="line"></div>
          </td>
          <td>
            <div class="Departure" style="text-align:right">
              <div class="time">20:09</div>
              <div class="date">{{schedule.ArrivalTime}}</div>
              <div class="clientTo">{{schedule.ClientTo}}</div>
              <div class="text">(время местное)</div>
            </div>
          </td>
          <td>
            <div class="type">
              <div>Люкс: от</div>
              <div style="font-weight:bold">{{schedule.LuxPrice}} KZT</div>
            </div>
            <div class="type">
              <div>Купэ: от</div>
              <div style="font-weight:bold">{{schedule.KupePrice}} KZT</div>
            </div>
          </td>
          <td>
            <div>
              мест:12
              <button class="button" v-on:click="TrainInstance">Выбрать</button>
            </div>
            <div>
              мест:32
              <button class="button" v-on:click="TrainInstance">Выбрать</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="TravelInstance==false">
      <div class="travelInstance">
        <section class="form-elegant">
          <mdb-card>
            <mdb-card-body class="mx-4 grey-text">
              <div class="text-center">
                <h3 class="dark-grey-text mb-5">
                  <strong>Pasanger Info</strong>
                </h3>
              </div>
              <form novalidate="true" @submit.prevent="checkForm">
                <mdb-input
                  v-model="firstName"
                  type="text"
                  icon="user"
                  label="First name"
                  required
                  invalidFeedback="Please provide a valid name."
                  validFeedback="Look's good."
                />
                <mdb-input
                  v-model="lastName"
                  label="Last name"
                  icon="user"
                  type="text"
                  required
                  invalidFeedback="Please provide a valid name."
                  validFeedback="Look's good."
                />
                <mdb-input
                  v-model="middleName"
                  label="Middle name (Optional)"
                  icon="store-alt"
                  type="text"
                />
                <mdb-input
                  v-model="passportNum"
                  label="№ passport"
                  icon="passport"
                  type="email"
                  required
                  invalidFeedback="Please provide a valid mail."
                  validFeedback="Look's good."
                />
                <mdb-input
                  v-model="discontNum"
                  label="Discont card"
                  icon="credit-card"
                  type="text"
                  invalidFeedback="Please provide a valid password."
                  validFeedback="Look's good."
                />

                <div class="text-center mb-3">
                  <mdb-btn gradient="blue" type="submit" rounded class="btn-block z-depth-1a">Buy</mdb-btn>
                </div>
              </form>
            </mdb-card-body>
          </mdb-card>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import {
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbInput,
  mdbBtn,
  mdbIcon,
  mdbModal,
  mdbModalBody,
  mdbModalFooter
} from "mdbvue";
import axios from "axios";
export default {
  name: "FormsPage",
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbInput,
    mdbBtn,
    mdbIcon,
    mdbModal,
    mdbModalBody,
    mdbModalFooter
  },
  props: ["schedules"],
  data() {
    return {
      selected: [],
      TravelInstance: false,
      firstName: null,
      lastName: null,
      agentName: null,
      email: null,
      pass: null,
      newPass: null
    };
  },
  mounted() {
    console.log(this.schedules);
  },
  methods: {
    TrainInstance() {
      this.TravelInstance = !this.TravelInstance;
      console.log(this.TravelInstance);
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
#fifthTable {
  font-family: "Open Sans", sans-serif;
  border: 3px solid #44475c;
  margin: 20px auto auto auto;
  background: #fff;
  position: relative;
  z-index: 20;
  opacity: 0.8;
  width: 80%;
}
table th {
  text-transform: uppercase;
  text-align: left;
  color: #fff;
  padding: 8px;
  min-width: 30px;
  background: #44475c;
}
table td {
  text-align: left;
  padding: 8px;
  border-collapse: collapse;
  background-color: rgba(68, 71, 92, 0.5);
  color: rgba(14, 2, 35, 0.9);
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #d4d8f9;
}
.arrow_down {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAaCAYAAABPY4eKAAAAAXNSR0IArs4c6QAAAvlJREFUSA29Vk1PGlEUHQaiiewslpUJiyYs2yb9AyRuJGm7c0VJoFXSX9A0sSZN04ULF12YEBQDhMCuSZOm1FhTiLY2Rky0QPlQBLRUsICoIN/0PCsGyox26NC3eTNn3r3n3TvnvvsE1PkwGo3yUqkkEQqFgw2Mz7lWqwng7ztN06mxsTEv8U0Aam5u7r5EInkplUol/f391wAJCc7nEAgE9Uwmkzo4OPiJMa1Wq6cFs7Ozt0H6RqlUDmJXfPIx+qrX69Ti4mIyHA5r6Wq1egND+j+IyW6QAUoul18XiUTDNHaSyGazKcZtdgk8wqhUKh9o/OMvsVgsfHJy0iWqVrcQNRUMBnd6enqc9MjISAmRP3e73T9al3XnbWNjIw2+KY1Gc3imsNHR0YV4PP5+d3e32h3K316TySQFoX2WyWR2glzIO5fLTSD6IElLNwbqnFpbWyO/96lCoai0cZjN5kfYQAYi5H34fL6cxWIZbya9iJyAhULBHAqFVlMpfsV/fHxMeb3er+Vy+VUzeduzwWC45XA4dlD/vEXvdDrj8DvURsYEWK3WF4FA4JQP9mg0WrHZbEYmnpa0NxYgPVObm5teiLABdTQT8a6vrwdRWhOcHMzMzCiXlpb2/yV6qDttMpkeshEzRk4Wo/bfoe4X9vb2amzGl+HoXNT29vZqsVi0sK1jJScG+Xx+HGkL4Tew2TPi5zUdQQt9otPpuBk3e0TaHmMDh1zS7/f780S0zX6Yni+NnBj09fUZUfvudDrNZN+GkQbl8Xi8RLRtHzsB9Hr9nfn5+SjSeWUCXC7XPq5kw53wsNogjZNohYXL2EljstvtrAL70/mVaW8Y4OidRO1/gwgbUMvcqGmcDc9aPvD1gnTeQ+0nmaInokRj0nHh+uvIiVOtVvt2a2vLv7Ky0tL3cRTXIcpPAwMDpq6R4/JXE4vFQ5FI5CN+QTaRSFCYc8vLy1l0rge4ARe5kJ/d27kYkLXoy2Jo4C7K8CZOsEBvb+9rlUp1xNXPL7v3IDwxvPD6AAAAAElFTkSuQmCC");
}
.arrow_up {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAaCAYAAACgoey0AAAAAXNSR0IArs4c6QAAAwpJREFUSA21Vt1PUmEYP4dvkQ8JFMwtBRocWAkDbiqXrUWXzU1rrTt0bdVqXbb1tbW16C9IBUSmm27cODdneoXjputa6069qwuW6IIBIdLvdaF4OAcOiGeDc87zPs/vd57P96WpFq7p6enbGo1mjKZpeTabjU1MTCRagGnOZHFxcXxtbe1XKpUq7+zslJeXl//Mz8+Hy+Uy3RxSE9qTk5M3otFooVQqgef4Wl9f343FYoEmoISrxuNxFX5f9vb2jhn/PxUKhfLS0tIPfFifUESRUMV8Pv/M6XReRm5rTGQyGeXxeGxYe1ezeBpBOBx2rKysbO7v79d4Wy3Y2Nj4GQqFbgnhaugxwiuGJx99Pp9FLBbXxYTXvTqd7v3MzIy6riIWGxJnMpl7AwMD14xGYyMsSq1WUyQdUqn0eSPlusQIsbGrq+vl4OCgvhFQZd1utyv1en0gEolcqsi47nWJlUrlG5fLZVcoFFy2nDKSDpIWlUoVTCQSEk4lCHmJMZ2GTCbTiMVikfIZ88l7enoos9l8dXt7+z6fDicxSJUokqDX6xXcl2wCROoc0vQCWL3sNfLOSdzR0fHY4XC4tVotl40gmVwup9xuN4OQv+UyqCFGH9rg7SOGYVRcBs3IEG4J0nVnamrqOtvuBDGGgQg9+wHFcVEi4a0LNkbdd6TrPKo8ODc311mteIIYjT/a398/jK+s1jnVM0kXoufCFvq0GuiIGEVgQIhfoygM1QrteEa9dAL7ITiYCt4RMabOK5AyKKzKWtvupLcRciu8D5J0EuDDPyT/Snd39yh6VtY2NhYQSR9G79Ds7OxdskRjEyAufvb7/cPoO5Z6e1+xtVKrq6vfcFzyi/A3ZrPZ3GdNSlwgo5ekE4X2RIQGf2C1WlufFE0GBeGWYQ8YERWLxQtnUVB830MKLZfL9RHir8lkssCn2G751tZWEWe03zTKm15YWPiEiXXTYDB0Ig/t7yd8PRws4EicwWHxO4jHD8/C5HiTTqd1BwcHFozKU89origB+y/kmzgYpgOBQP4fGmUiZmJ+WNgAAAAASUVORK5CYII=");
}
.arrow {
  float: right;
  width: 12px;
  height: 15px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: bottom;
}
.trainInfo {
  display: flex;
  flex-direction: column;
  padding: 5px;
}
.type {
  display: flex;

  flex-direction: row;
}
.trainNum {
  font-weight: bold;
  font-size: large;
}
.time {
  font-size: large;
  font-weight: bold;
}
.Departure {
  padding-right: 1px;
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.tm {
  text-align: center;
  font-size: medium;
}

.line {
  border-bottom: 2px solid #44475c;
  padding-bottom: 2px;
  position: relative;
}

.line:before,
.line:after {
  position: absolute;
  bottom: -6px;
  left: 0;
  height: 10px;
  width: 10px;
  background: #44475c;
  content: "";
  border-radius: 5px;
}

.line:after {
  right: 0;
  left: auto;
}
.button {
  background-color: #44475c; /* Green */
  border: none;
  color: white;
  padding: 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  margin: 4px 2px;
  cursor: pointer;
}
.travelInstance {
  position: absolute !important;
  z-index: 999;
  width: 80% !important;
  padding: 0;
  transition: 0.3s ease all;
  margin-left: 10%;
}
.card {
  border: 2px solid #44475c;
  margin: 20px auto auto auto !important;
}
.form-elegant {
  margin: 20px auto auto auto !important;

  .font-small {
    font-size: 0.8rem;
  }
  .z-depth-1a {
    -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26),
      0 4px 12px 0 rgba(121, 155, 254, 0.25);
    box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26),
      0 4px 12px 0 rgba(121, 155, 254, 0.25);
  }
  .z-depth-1-half,
  .btn:hover {
    -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28),
      0 4px 15px 0 rgba(36, 133, 255, 0.15);
    box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28),
      0 4px 15px 0 rgba(36, 133, 255, 0.15);
  }
}
</style>