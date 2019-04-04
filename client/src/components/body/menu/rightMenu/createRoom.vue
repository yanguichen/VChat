<style lang="stylus">
.photos
    margin 10px 10px 0 10px
    //background-color #fff
</style>


<template>
    <div class="createRoom">

    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            tabs: 1,
            tabTitle: ["默认"]
        };
    },
    methods: {
        handleTabsAdd() {
            this.tabTitle.push("默认" + this.tabs);
            this.tabs++;
        }
    }
};
</script>
