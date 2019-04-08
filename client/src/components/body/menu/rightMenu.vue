<style lang="stylus">

</style>
<template>
    <div class="rightMenu">
        <findRoom v-if="changeRoute==0" />
        <createRoom v-if="changeRoute==1" />
    </div>
</template>
<script>
import createRoom from "@/components/body/menu/rightMenu/createRoom";
import findRoom from "@/components/body/menu/rightMenu/findRoom";
export default {
    data() {
        return {
            changeRoute: 0
        };
    },
    components: {
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