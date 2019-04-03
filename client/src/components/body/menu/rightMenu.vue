<style lang="stylus">
.rightMenu
    margin 10px 10px 0 10px
</style>
<template>
    <div class="rightMenu">
        <community v-if="changeRoute==1" />
        <myCommunity v-if="changeRoute==2" />
        <friend v-if="changeRoute==3" />
        <photos v-if="changeRoute==4" />
        <notes v-if="changeRoute==5" />
        <share v-if="changeRoute==6" />
        <recycled v-if="changeRoute==7" />
    </div>
</template>
<script>
import notes from "@/components/body/menu/rightMenu/notes";
import community from "@/components/body/menu/rightMenu/community";
import friend from "@/components/body/menu/rightMenu/friend";
import myCommunity from "@/components/body/menu/rightMenu/myCommunity";
import photos from "@/components/body/menu/rightMenu/photos";
import recycled from "@/components/body/menu/rightMenu/recycled";
import share from "@/components/body/menu/rightMenu/share";
export default {
    data() {
        return {
            changeRoute: 1
        };
    },
    components: {
        notes,
        community,
        friend,
        myCommunity,
        photos,
        recycled,
        share
    },
    mounted: function() {
        this.$root.bus.$on("routeChange", num => {
            this.changeRoute = num;
        });
    },
    methods: {}
};
</script>