<style lang="stylus">

</style>


<template>
    <div class="createRoom">
        <div class="title"><b>创建聊天室</b></div>
        <form id="form" action="">
            <Input placeholder="聊天室名称" style="width: 250px" @on-click="search"/>
            <Input placeholder="描述" style="width: 250px" @on-click="search"/>
            <Button type="primary" @click="search" >创建</Button>
        </form>     
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
        };
    },
    methods: {
    }
};
</script>
