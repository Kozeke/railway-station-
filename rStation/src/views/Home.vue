<template>
  <div class="home">
    <!-- ** Search Form Area ** -->

    <section class="dorne-welcome-area bg-img bg-overlay">
        <div class="container h-100">
            <div class="row h-100 align-items-center justify-content-center">
                <div class="col-12 col-md-10">
                      <div id="booking" class="section">
                          <div class="section-center">
                              <div class="container">
                                  <div class="row">
                                      <div class="booking-form">
                                          <div class="form-header">
                                              <h1>Make your reservation</h1>
                                          </div>
                                          <form>
                                              <div class="form-group">
                                                  <div class="row">
                                                      <div class="form-group col-4">
                                                          <label class="form-group"><p class="enter-names">From:</p> 
                                                            <input class="form-control" type="text" name="movies" list="movies"/>
                                                            <datalist id="movies">
                                                            <label class="form-control"> 
                                                              <select class="form-control" name="movies">
                                                                  
                                                              </select>
                                                              </label>
                                                            </datalist>
                                                          </label>
                                                      </div>
                                                      <div class="form-group col-4">
                                                          <label class="form-group"><p class="enter-names enter-names-to">To:</p> 
                                                            <input class="form-control" type="text" name="movies" list="movies"/>
                                                            <datalist id="movies">
                                                            <label class="form-control"> 
                                                              <select class="form-control" name="movies">
                                                                  <option v-for="city in cities" :key="city" value="">{{city}}</option>
                                                              </select>
                                                          </label>

                                                                </datalist>
                                                          </label>
                                                      </div>
                                                      <div class="form-group form-group-date col-4">
                                                          <label class="form-group"><p class="enter-names enter-names-to">Date:</p> 
                                                              <input id="dateTime" class="form-control" type="date" required>
                                                          </label>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div class="form-btn">
                                                  <button type="button" class="btn btn-danger">Search</button>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      cities: [
        'Almaty',
        'Astana',
        'Semey',
        'Shymkent',
        'Taraz'
      ]
    }
  },
  methods: {
    
  },
  computed: {
   
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
    height: 945px;
    position: relative;
    z-index: 1;
}
.bg-overlay:after,
.bg-overlay-9:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(14, 2, 35, 0.5);
    z-index: -1;
}

.bg-overlay-9:after {
    background-color: rgba(14, 2, 35, 0.9);
}
.booking-form {
  position: relative;
  max-width: 800px;
  width: 100%;
  margin: auto;
  margin-top: 138px;
  padding: 30px;
  overflow: hidden;
  background: #fff;
  // background-image: url('../assets/background.jpg');
  background-size: cover;
  border-radius: 5px;
  z-index: 20;
  max-height: 300px;
}

.booking-form::before {
	content: '';
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	background: rgba(0, 0, 0, 0.7);
	z-index: -1;
}

.booking-form .form-header {
	text-align: center;
	position: relative;
}

.booking-form .form-header h1 {
	font-weight: 700;
	text-transform: capitalize;
	font-size: 42px;
	margin: 0px;
	color: #fff;
}

.booking-form .form-group {
  position: relative;
  margin: 0;
}

.booking-form .form-control {
	background-color: rgba(255, 255, 255, 0.2);
	height: 40px;
	padding: 0px 16px;
	border: none;
	color: #fff;
	-webkit-box-shadow: 0px 0px 0px 2px transparent;
	box-shadow: 0px 0px 0px 2px transparent;
	-webkit-transition: 0.2s;
	transition: 0.2s;
}

.booking-form .form-control::-webkit-input-placeholder {
	color: rgba(255, 255, 255, 0.5);
}

.booking-form .form-control:-ms-input-placeholder {
	color: rgba(255, 255, 255, 0.5);
}

.booking-form .form-control::placeholder {
	color: rgba(255, 255, 255, 0.5);
}

.booking-form .form-control:focus {
	-webkit-box-shadow: 0px 0px 0px 2px #ff8846;
	box-shadow: 0px 0px 0px 2px #ff8846;
}

.booking-form input[type="date"].form-control:invalid {
	color: rgba(255, 255, 255, 0.5);
}

.booking-form input[type="date"].form-control+.form-label {
	opacity: 1;
	top: 10px;
}

.booking-form select.form-control {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}

.booking-form select.form-control:invalid {
	color: rgba(255, 255, 255, 0.5);
}

.booking-form select.form-control+.select-arrow {
	position: absolute;
	right: 15px;
	top: 50%;
	-webkit-transform: translateY(-50%);
	transform: translateY(-50%);
	width: 32px;
	line-height: 32px;
	height: 32px;
	text-align: center;
	pointer-events: none;
	color: rgba(255, 255, 255, 0.5);
	font-size: 14px;
}

.booking-form select.form-control+.select-arrow:after {
	content: '\279C';
	display: block;
	-webkit-transform: rotate(90deg);
	transform: rotate(90deg);
}

.booking-form select.form-control option {
	color: #000;
}

.booking-form .form-label {
	position: absolute;
	top: -10px;
	left: 25px;
	opacity: 0;
	color: #ff8846;
	font-size: 11px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 1.3px;
	height: 15px;
	line-height: 15px;
	-webkit-transition: 0.2s all;
	transition: 0.2s all;
}

.booking-form .form-group.input-not-empty .form-control {
	padding-top: 16px;
}

.booking-form .form-group.input-not-empty .form-label {
	opacity: 1;
	top: 10px;
}

.booking-form .form-btn {
  text-align: right;
  button {
    color: #fff
  }
}

.booking-form .submit-btn:hover,
.booking-form .submit-btn:focus {
	opacity: 0.9;
}
</style>
