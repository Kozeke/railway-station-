<template>
    <div class="container bootstrap snippet">
        <div class="row menu-items">
            <ProfileMenu></ProfileMenu> 
            <div class="menu-data row col-sm-9">
                <div class="col-sm-4"><!--left col-->
                     
                </div>
                <div class="col-sm-8">
                    <div class="tab-pane active" id="home">
                        <form class="form" id="registrationForm">
                            <div class="form-group">
                                <div class="col-sm-10">
                                    <label for="password"><h4>Old Password</h4></label>
                                    <input v-model="oldPassword" :class="{ 'active': hasfocus == 1 }" @focusin="focusIn(1)" @focusout="focusOut(1)" type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password.">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-10">
                                    <label for="password"><h4>New Password</h4></label>
                                    <input v-model="newPassword" :class="{ 'active': hasfocus == 2 }" @focusin="focusIn(2)" @focusout="focusOut(2)" type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password.">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-10">
                                    <label for="password"><h4>New Password</h4></label>
                                    <input v-model="newPasswordR" :class="{ 'active': hasfocus == 3, 'error': hasError }" @focusin="focusIn(3)" @focusout="focusOut(3)" type="password" class="form-control" name="password" id="password" placeholder="password" title="enter your password.">
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
                </div><!--/tab-pane-->
            </div><!--/col-9-->
        </div>
    </div>
</template>
<script>
import ProfileMenu from '../components/ProfileMenu.vue'
export default {
    components:{
        ProfileMenu
    },
    data() {
        return {
                oldPassword: "", 
                newPassword: "", 
                newPasswordR: "",
                hasError: false,
                viewMode: true
            };
        },
    methods: {
        focusIn(value) {
            this.hasfocus = value;
            if(this.newPasswordR === this.newPassword && value === 3){
                this.hasError = false;
            }
        },
        focusOut(value) {
            this.hasfocus = 0;
            if(this.newPasswordR !== this.newPassword && value === 3){
                this.hasError = true;
            }
            if(this.newPasswordR === this.newPassword && value === 3){
                this.hasError = false;
            }
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
                .error{
                    border-color: red;
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


