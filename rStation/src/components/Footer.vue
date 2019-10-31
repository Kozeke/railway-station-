<template>
    <footer class="dorne-footer-area">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 d-md-flex align-items-center justify-content-between">
                    <div class="footer-text">
                        <p>
                            Made in 123213.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
   
}
</script>
<style lang="scss" scoped>
    .dorne-footer-area {
        width: 100%;
        padding: 50px 35px;
        border-top: 1px solid #bec0cc;
        height: 80px;
        background: red;
    }

    .footer-text p {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 0;
    }

    .footer-social-btns > a {
        display: inline-block;
        color: #464646;
        padding: 0 15px;
        font-size: 14px;
    }

</style>

