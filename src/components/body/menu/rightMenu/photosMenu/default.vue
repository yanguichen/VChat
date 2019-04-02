<style lang="stylus">
.default
    border 1px solid #DCDCDC
    min-height 391px
</style>


<template>
    <div class="default" :style="screenHeight">
        aa
    </div>
</template>
<script>
export default {
    data() {
        return {
            screenHeight: { height: document.body.clientHeight - 169 + "px" }
        };
    },
    methods: {
        getHeight: function() {
            this.screenHeight = {
                height: document.body.clientHeight - 169 + "px"
            };
        }
    },
    mounted() {
        var getHeight = setInterval(this.getHeight, 500);
    }
};
</script>
