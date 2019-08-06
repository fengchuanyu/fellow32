<template>
    <div >
        <div class="top-bar clearfix" v-if="book">
        <h3>{{book.title}}</h3>
        <div class="left">
            {{book.subject.author}}
            {{book.translator}}
            {{book.press}}
        </div>
        <div class="right">
            <img :src="'https://images.weserv.nl/?url='+book.subject.pic.normal" alt="" srcset="">
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            book:null
        }
    },
    created() {
        this.getData(this.$route.params.id)
    },
    methods: {
        getData(id){
            let globalApi = "https://bird.ioliu.cn/v2?url=";
            let thisUrl = "https://m.douban.com/rexxar/api/v2/market/book/"+id;
            axios.get(globalApi+thisUrl).then((res)=>{
                console.log(res);
                this.book= res.data.data
            })
        }
    },
}
</script>
<style scoped>
.left{
    float: left;
    width: 50%;
}
.right{
    float: left;
    width: 50%;
}
.right img{
    width: 90%;
}
</style>
