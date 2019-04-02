<style lang="stylus">
.friend
    padding 10px 10px 0 10px

    #friendTable
        min-height 460px
</style>


<template>
    <div class="friend">
        <Table id="friendTable" :height="screenHeight" :columns="columns1" :data="data2"></Table>
    </div>
</template>
<script>
export default {
    methods: {
        getHeight: function() {
            this.screenHeight = document.body.clientHeight - 109;
        }
    },
    mounted() {
        var getHeight = setInterval(this.getHeight, 500);
    },
    data() {
        return {
            screenHeight: document.body.clientHeight - 109,
            columns1: [
                {
                    title: "Name",
                    key: "name"
                },
                {
                    title: "Age",
                    key: "age"
                },
                {
                    title: "Address",
                    key: "address"
                }
            ],
            data2: [
                {
                    name: "John Brown",
                    age: 18,
                    address: "New York No. 1 Lake Park",
                    date: "2016-10-03"
                },
                {
                    name: "Jim Green",
                    age: 24,
                    address: "London No. 1 Lake Park",
                    date: "2016-10-01"
                },
                {
                    name: "Joe Black",
                    age: 30,
                    address: "Sydney No. 1 Lake Park",
                    date: "2016-10-02"
                },
                {
                    name: "Jon Snow",
                    age: 26,
                    address: "Ottawa No. 2 Lake Park",
                    date: "2016-10-04"
                },
                {
                    name: "John Brown",
                    age: 18,
                    address: "New York No. 1 Lake Park",
                    date: "2016-10-03"
                },
                {
                    name: "Jim Green",
                    age: 24,
                    address: "London No. 1 Lake Park",
                    date: "2016-10-01"
                },
                {
                    name: "Joe Black",
                    age: 30,
                    address: "Sydney No. 1 Lake Park",
                    date: "2016-10-02"
                },
                {
                    name: "Jon Snow",
                    age: 26,
                    address: "Ottawa No. 2 Lake Park",
                    date: "2016-10-04"
                }
            ]
        };
    }
};
</script>