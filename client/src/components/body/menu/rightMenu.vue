<style lang="stylus">
.rightMenu
    margin 10px 10px 0 10px
</style>
<template>
    <div class="rightMenu">
        <friend v-if="changeRoute==0" />
        <findRoom v-if="changeRoute==1" />
        <createRoom v-if="changeRoute==2" />
    </div>
</template>
<script>
import createRoom from "@/components/body/menu/rightMenu/createRoom";
import findRoom from "@/components/body/menu/rightMenu/findRoom";
import friend from "@/components/body/menu/rightMenu/friend";
export default {
    data() {
        return {
            changeRoute: 1
        };
    },
    components: {
        friend,
        createRoom,
        findRoom
    },
    mounted: function() {
        this.$root.bus.$on("routeChange", num => {
            this.changeRoute = num;
        });
    },
    methods: {}
};
</script>