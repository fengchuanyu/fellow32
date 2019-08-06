<template>
  <!-- swiper -->
  <swiper class="swiper-content" :options="swiperOption">
    <swiper-slide @click.native="clickHandle(item.id)" class="swiper-item" v-for="item in dataList" :key="item.id">
      <img :src="'https://images.weserv.nl/?url='+item.cover.url" alt srcset />
      <p>{{item.title}}</p>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>
<style scoped>
.swiper-item{
  width: 230px;
}
.swiper-item img{
  width: 100%;
}
</style>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  created() {
    this.getDate();
  },
  methods: {
    clickHandle(id){
      console.log(id)
      this.$router.push({
        name:"musicdetail",
        params:{
          id
        }
      })
    },
    getDate(){
      let globalApi = "https://bird.ioliu.cn/v2?url="
      let thisUrl = "https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?start=0&count=20"
      axios.get(globalApi+thisUrl).then((res)=>{
        console.log(res)
        this.dataList = res.data.subject_collection_items;
      })
   }
  },
  data() {
    return {
      dataList:[],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>