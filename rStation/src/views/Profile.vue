<template>
    <div class="container bootstrap snippet">
        <div class="row menu-items">
            <ProfileMenu></ProfileMenu> 
            <div class="menu-data row col-sm-9">
                <div class="col-sm-4"><!--left col-->
                    <div class="text-center profile-img">
                        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar">
                        <input type="file" class="text-center">
                    </div><br>   
                </div>
                <div class="col-sm-8">
                    <div class="tab-pane active" id="home">
                        <form class="form" id="registrationForm">
                            <div class="form-group">
                                <div class="col-sm-10">
                                    <label for="first_name"><h4>First name</h4></label>
                                    <input v-model="first_name" :class="{ 'active': hasfocus == 1 }" @focusin="focusIn(1)" @focusout="focusOut(1)" type="text" class="form-control prefix" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any." :disabled="viewMode">
                                </div>
                            </div>
                            <div class="form-group">                        
                                <div class="col-sm-10">
                                    <label for="last_name"><h4>Last name</h4></label>
                                    <input v-model="last_name" :class="{ 'active': hasfocus == 2 }" @focusin="focusIn(2)" @focusout="focusOut(2)" type="text" class="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any." :disabled="viewMode">
                                </div>
                            </div>        
                            <div class="form-group">              
                                <div class="col-sm-10">
                                    <label for="phone"><h4>Phone</h4></label>
                                    <input v-model="phone" :class="{ 'active': hasfocus == 3 }" @focusin="focusIn(3)" @focusout="focusOut(3)" type="text" class="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any." :disabled="viewMode">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-10">
                                    <label for="email"><h4>Email</h4></label>
                                    <input v-model="email" :class="{ 'active': hasfocus == 4 }" @focusin="focusIn(4)" @focusout="focusOut(4)" type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email." disabled>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-10">
                                    <button class="btn btn-lg btn-warning" type="button" v-if="viewMode" @click="editData(false)">Edit</button>
                                    <button class="btn btn-lg btn-success" type="submit" v-else @click="editData(true)">Save</button>
                                    <button class="btn btn-lg" type="reset" v-if="!viewMode">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProfileMenu from '../components/ProfileMenu.vue'
import axios from 'axios'
export default {
    components:{
        ProfileMenu
    },
    data() {
        return {
                first_name: "",
                last_name: "",
                phone: "+77073206178",
                email: "", 
                password: "",
                hasfocus: 0,
                viewMode: true,
                token: null
            };
        },
    mounted(){
        this.token = localStorage.data
      axios.get('http://localhost:8080/databind/api/me?token=' + this.token,{
        header:{
          'Access-Control-Allow-Origin': '*',
          "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE",
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        }
      })
      .then(response => {
          console.log(response.data);
          this.first_name = response.data.firstname;
          this.last_name = response.data.surname;
          this.email = response.data.mail;
          this.password = response.data.password;
      })
      .catch(e => {
          console.log(e);
      })
      // google-chrome --disable-web-security -–allow-file-access-from-fes --user-data-dir
      
  },
    methods: {
        focusIn(value) {
            this.hasfocus = value;
            
        },
        focusOut(value) {
            this.hasfocus = 0;
        },
        editData(value){
            this.viewMode = value;
            if(value){
              axios.put('http://localhost:8080/databind/api/me?token=' + this.token,{
                    mail: this.email,
                    password: this.password,
                    firstname: this.first_name,
                    surname: this.last_name
              })
              .then(response => {
                  console.log(response.data);
                  this.$router.push('/profile');
              })
              .catch(e => {
                  console.log(e);
              })
          }
        }
    },
    computed: {
       
    }      
}
</script>
<style lang="scss" scoped>
    .container{
        margin: auto;
        margin-top: 138px;
        max-width: 88% !important;
        background: #fff;
        border: 1px solid rgba(0,0,0,0.3);
        padding: 16px;
        border-radius: 8px;
    }
    .menu-data{
        background:rgba(0,0,0,0.1);
        border-radius: 6px;
        .list-group{
            width: 60%;
            text-align: center;
            margin: auto;
        }
        .profile-img{
            margin-top: 36px;
            .img-circle{
                border-radius: 50%;
            }
            input[type="file"]{   
                margin-top: 12px;         
                cursor: pointer;
            }
        }
        #registrationForm{
            .form-group{
                    position: relative;
                    margin-top: 1.5rem;
                    margin-bottom: 1.5rem;
                label h4{
                    font-size: 14px;
                    font-weight: 400;
                    margin: 0;
                }
                .form-control{
                    background-color: transparent;
                    border: none;
                    border-bottom: 1px solid #ced4da;
                    border-radius: 0;
                    outline: none;
                    padding-left: 0.2rem;
                    height: auto;
                    margin: 0 0 0.5rem 0;
                    border-radius: 0;
                    font-size: 14px;
                }
                .active{
                    border-color: #4285f4;
                }
                button.btn{
                    padding: 0.4rem 1.4rem;
                    font-size: 14px;
                }
            }
            ::placeholder{
                opacity: 0.3;
            }
        }
    }
</style>