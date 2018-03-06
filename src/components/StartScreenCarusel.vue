

<template>
  <div>
  <div class="conteiner-slider">
      <button class = "buttons-slide" 
              @click="prev()">Prev
      </button>
      <transition >
          <img  :src="currentPict"
                :key="num"
                class="slider-img"/>
      </transition :name="nameSliderTransition">
      <button class="buttons-slide" 
              @click="next()">Next
      </button>
    </div>
  </div>
</template>

<script>

export default {
  // components: {
  //   StartScreenCarusel
  // },

  name: 'StartScreenCarusel',
  data: function() {
    return {
      dataPict:
        ["https://www.seattleattractions.com/wp-content/uploads/2016/04/PSAC-Zoo-Image-6-MarqueeHeader-1920x680px-800x600.jpg", "https://www.tierwelt-herberstein.at/fileadmin/user_upload/Ausland/Galerie/RoterPanda.jpg", "https://avatars.mds.yandex.net/get-pdb/224463/b768bec0-ebcb-4e33-b7e3-c32902e203c2/s800", "http://zonewallpaper.net/wp-content/uploads/2017/11/Lion-Animal-Wallpaper-HD-800x600.jpg"],
      nameSliderTransition: "slider-img-left",
      num: 0,
    }
  },
  computed: {
    currentPict: function() {
        return this.dataPict[this.num];
    }
  },

  methods: {
    
    next: function(){
            this.num++;
           this.num = (this.num >= this.dataPict.length) ?  0 : this.num;
        console.log(this.num)
        },
    prev: function(){
            this.num--;
            this.num = (this.num < 0) ? this.dataPict.length-1 : this.num;
            console.log(this.num)
        },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
.conteiner-slider{
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 800px;
}

.slider-img {
  width: 600px;
  height: 400px;
  transform-origin:100% 100%;
  transition: all 1.5s;
}

.slider-img-left-enter, .slider-img-left-leave-to,
.slider-img-right-enter, .slider-img-right-leave-to {
  opacity:0;
  display: none;
}
/* .slider-img-left-enter, .slider-img-left-leave {
  transform: translateX(150%)
}
.slider-img-right-enter, .slider-img-right-leave {
  transform: translateY(-150%)
}  */

.buttons-slide{
  cursor:pointer;
  padding: 200px 30px; 
  background-color: rgba(0, 44, 44, 0.9); 
  font-size: 14px;
  font-weight: 600; 
  color: white; 
  border: none;  
}

.buttons-slide:active{
  opacity: 0.8;
}

</style>
