<style lang="stylus">
.photos
    margin 10px 10px 0 10px
    //background-color #fff
</style>


<template>
    <div class="photos">
        <Tabs type="card">
            <TabPane v-for="tab in tabs" :key="tab" :label="tabTitle[tab-1]">
                <defaultPhoto />
            </TabPane>
            <Button @click="handleTabsAdd" size="small" slot="extra">增加</Button>
        </Tabs>
    </div>
</template>
<script>
import defaultPhoto from "@/components/body/menu/rightMenu/photosMenu/default.vue";
export default {
    components: {
        defaultPhoto
    },
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
