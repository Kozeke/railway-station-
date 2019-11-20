<template>
  <div class="container bootstrap snippet">
    <div class="row menu-items">
      <ProfileMenu></ProfileMenu>
      <div class="menu-data row col-sm-10">
        <BookingModal
          :booking="temp"
          v-if="showModal"
          @close="showModal = false"
        ></BookingModal>
        <table>
          <thead>
            <tr class="table-headers">
              <th>EmployerID</th>
              <th>EmpName</th>
              <th>Week days and hours</th>
              <th>WorkingStation</th>
              <th>Salary</th>
              <th>OverallHours</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employer in employers" :key="employer">
              <td class="bookingId">{{ employer.EmployerId }}</td>
              <td v-on:click="updateName(employer)">
                <input
                  :id="employer.EmployerId"
                  type="text"
                  v-model="employer.EmployerName"
                  disabled
                />
              </td>

              <td v-on:click="updateWorkDays(employer)">
                <input
                  :id="employer.EmployerId + 'workdays'"
                  type="text"
                  v-model="employer.EmployerWorkDays"
                  disabled
                />
              </td>
              <td v-on:click="updateWorkStation(employer)">
                <input
                  :id="employer.EmployerId + 'station'"
                  type="text"
                  v-model="employer.WorkingStation"
                  disabled
                />
              </td>
              <td v-on:click="updateSalary(employer)">
                <input
                  :id="employer.EmployerId + 'salary'"
                  type="text"
                  v-model="employer.Salary"
                  disabled
                />
              </td>
              <td>{{ OverallHours }}</td>
              <td v-on:click="Delete(employer)" style="text-align:center">
                <i class="fas fa-trash"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--/col-9-->
    </div>
    <div style="text-align:right;position:relative">
      <button class="button" v-on:click="save">Save</button>
    </div>
  </div>
</template>
<script>
import ProfileMenu from "../components/ProfileMenu.vue";
import BookingModal from "../components/BookingModal.vue";
import { get, del } from "../helpers/api";

export default {
  components: {
    ProfileMenu,
    BookingModal
  },
  data() {
    return {
      showModal: false,
      saveUpdates: false,
      employers: [
        {
          EmployerId: "01892340",
          EmployerName: "Kopbosinov Jaxsylyk",
          EmployerWorkDays: "M,W,T  12:00-19:00",
          WorkingStation: "Almaty-Astana",
          Salary: 120000
        },
        {
          EmployerId: "01892341",
          EmployerName: "Jaxsylyk Kopbosinov",
          EmployerWorkDays: "M,W,T 12:00-19:00",
          WorkingStation: "Almaty-Astana",
          Salary: 130000
        },
        {
          EmployerId: "01892342",
          EmployerName: "Jaxsylyk Kopbosinov",
          EmployerWorkDays: "M,W,T 12:00-19:00",
          WorkingStation: "Almaty-Astana",
          Salary: 145000
        }
      ]
    };
  },
  methods: {
    Delete(emp) {
      var _this = this;
      del(
        this,
        "api/products",
        {
          params: {
            id: id
          }
        },
        function(response) {
          console.log(response);
          console.log("deleted");
          _this.getList();
        },
        function(error) {}
      );
    },

    updateName(employer) {
      var temp = employer.EmployerId;
      console.log(temp);
      document.getElementById(temp).removeAttribute("disabled");
    },
    updateWorkStation(employer) {
      var temp = employer.EmployerId + "station";
      document.getElementById(temp).removeAttribute("disabled");
    },
    updateWorkDays(employer) {
      var temp = employer.EmployerId + "workdays";
      document.getElementById(temp).removeAttribute("disabled");
    },
    openModal(data) {
      this.showModal = true;
      this.temp = data;
    },

    updateSalary(employer) {
      var temp = employer.EmployerId + "salary";
      document.getElementById(temp).removeAttribute("disabled");
    },
    save() {
      window.location.reload();
    },
    getEmployers() {
      let _this = this;
      axios
        .get(
          "http://10.3.30.241/databind/api/schedules?from=" +
            this.stationFrom +
            "&to=" +
            this.stationTo +
            "&date=" +
            this.Date,
          {
            header: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE",
              "Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            }
          }
        )
        .then(response => {
          this.schedules = response.data;
          this.showSchedule = true;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  computed: {
    OverallHours() {
      return;
    }
  },
  mounted() {
    this.getEmployers();
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin: auto;
  margin-top: 138px;
  max-width: 88% !important;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 16px;
  border-radius: 8px;
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

.menu-data {
  table {
    .bookingId {
      cursor: pointer;
    }
    .bookingId:hover {
      background-color: #00ff99;
    }
    width: 100%;
    border-collapse: collapse;
    border-radius: 6px;
    text-align: left;
    overflow: hidden;
    td,
    th {
      border-top: 1px solid #ecf0f1;
      padding: 10px;
    }

    td {
      border-left: 1px solid #ecf0f1;
      border-right: 1px solid #ecf0f1;
    }

    th {
      background-color: #00ff99;
    }
    tr:nth-of-type(even) {
      background-color: lighten(#00ff99, 35%);
    }
  }
  .mobile-header {
    display: none;
  }

  @media only screen and (max-width: 760px) {
    p {
      display: block;
      font-weight: bold;
    }

    table {
      tr {
        td:not(:first-child),
        th:not(:first-child),
        td:not(.total-val) {
          display: none;
        }

        &:nth-of-type(even) td:first-child {
          background-color: lighten(#4ecdc4, 35%);
        }
        &:nth-of-type(odd) td:first-child {
          background-color: white;
        }

        &:nth-of-type(even) td:not(:first-child) {
          background-color: white;
        }

        th:first-child {
          width: 100%;
          display: block;
        }

        th:not(:first-child) {
          width: 40%;
          transition: transform 0.4s ease-out;
          transform: translateY(-9999px);
          position: relative;
          z-index: -1;
        }

        td:not(:first-child) {
          transition: transform 0.4s ease-out;
          transform: translateY(-9999px);
          width: 60%;
          position: relative;
          z-index: -1;
        }

        td:first-child {
          display: block;
          cursor: pointer;
        }

        &.total th {
          width: 25%;
          display: inline-block;
        }

        td.total-val {
          display: inline-block;
          transform: translateY(0);
          width: 75%;
        }
      }
    }
  }

  @media only screen and (max-width: 300px) {
    table {
      tr {
        th:not(:first-child) {
          width: 50%;
          font-size: 14px;
        }

        td:not(:first-child) {
          width: 50%;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
