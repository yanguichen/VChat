<style lang="stylus">
</style>


<template>
    <div class="home">
        <homeHead />
        <homeBody />
    </div>
</template>
<script>
import homeHead from "@/components/head/homeHead.vue";
import homeBody from "@/components/body/homeBody.vue";
export default {
    components: {
        homeHead,
        homeBody
    }
};
</script>