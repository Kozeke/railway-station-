<template>
    <div class="container bootstrap snippet">
        <div class="row menu-items">
            <div class="col-sm-3">
                <ul class="menu-list">
                    <li class="menu-list-item"><i class="fas fa-user-circle"></i><span>Profile</span></li>
                    <li class="menu-list-item"><i class="fas fa-user-friends"></i><span>Staff</span></li>
                    <li class="menu-list-item"><i class="fas fa-history"></i><span>Bookings</span></li>
                    <li class="menu-list-item"><i class="fas fa-user-cog"></i><span>Settings</span></li>
                    <li class="menu-list-item"><i class="fas fa-power-off"></i><span>Sign out</span></li>
                </ul> 
            </div>
    <div class="menu-data row col-sm-9">
  		<div class="col-sm-4"><!--left col-->
            <div class="text-center profile-img">
                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" class="avatar img-circle img-thumbnail" alt="avatar">
                <input type="file" class="text-center">
            </div><br>   
            <!-- <ul class="list-group">
                <li class="list-group-item text-muted">Activity <i class="fa fa-dashboard fa-1x"></i></li>
                <li class="list-group-item text-right"><span class="pull-left"><strong>Shares</strong></span> 125</li>
                <li class="list-group-item text-right"><span class="pull-left"><strong>Likes</strong></span> 13</li>
                <li class="list-group-item text-right"><span class="pull-left"><strong>Posts</strong></span> 37</li>
                <li class="list-group-item text-right"><span class="pull-left"><strong>Followers</strong></span> 78</li>
            </ul>  -->
        </div>
        <Profile></Profile>
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
                              <input v-model="email" :class="{ 'active': hasfocus == 4 }" @focusin="focusIn(4)" @focusout="focusOut(4)" type="email" class="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email." :disabled="viewMode">
                          </div>
                      </div>
                      <!-- <div class="form-group">
                          <div class="col-sm-10">
                              <label for="password"><h4>Password</h4></label>
                              <input v-model="password" :class="{ 'active': hasfocus == 5 }" @focusin="focusIn(5)" @focusout="focusOut(5)" type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password.">
                          </div>
                      </div> -->
                      <div class="form-group">
                           <div class="col-sm-10">
                                <button class="btn btn-lg btn-warning" type="button" v-if="viewMode" @click="editData(false)">Edit</button>
                              	<button class="btn btn-lg btn-success" type="submit" v-else @click="editData(true)">Save</button>
                               	<button class="btn btn-lg" type="reset" v-if="!viewMode">Reset</button>
                            </div>
                      </div>
              	</form>
               </div>
             </div><!--/tab-pane-->
        </div><!--/col-9-->
    </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
                first_name: "Dimash",
                last_name: "Kaldykhanov",
                phone: "+77073206178",
                email: "dimeke.1999@gmail.com", 
                password: "",
                hasfocus: 0,
                viewMode: true
            };
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
        }
    },
    computed: {
       
    }      
}
</script>
<style lang="scss" scoped>
    .container{
        margin: auto;
        margin-top: 80px;
        border: 1px solid rgba(0,0,0,0.3);
        padding: 16px;
        border-radius: 8px;
    }
    .menu-items{
        .menu-list{
            margin: auto 12px;
            .menu-list-item{
                list-style: none;
                border-top: 1px solid rgba(0,0,0,0.1);
                background: rgba(0,0,0,0.1);
                padding: 8px;
                font-size: 16px;
                span{
                    font-weight: 350;
                }
                i{
                    width: 24px;
                    margin: auto 4px auto 4px;
                }
            }
            .menu-list-item:hover{
                background: rgba(0,0,0,.5);
                cursor: pointer;
            }
            .menu-list-item:first-of-type{
                border: none;
                border-top-left-radius: 5px;
                border-top-right-radius: 6px;
            }
            .menu-list-item:last-of-type{
                border-top: 1px solid rgba(0,0,0,1);
                border-bottom-left-radius: 6px;
                border-bottom-right-radius: 6px;
            }
        }
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


