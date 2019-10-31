<template>
  <div class="loading-spinner"></div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .loading-spinner{
    width: 20px;
    height: 20px;
    border-top-color: #FFF;
    border-left-color: #FFF;

    /* Additional spinner styles */
    animation: spinner 1s linear infinite;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-style: solid;
    border-width: 2px;
    border-radius: 50%;  
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
  }
  /* Animation styles */
  @keyframes spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>