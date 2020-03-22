<template>
   <div class="slider"
    @mouseenter="hMouseenter"
    @mouseleave="hMouseleave"
    @click="hClick">

     <div class="slider-content">
        <transition-group name="fade">
      <div class="slider-item"
      v-for="(item,idx) in list"
      :key="item.url"
      v-show="currentIdx==idx"
      >
        <img :src="item.url" :alt="item.alt" />
      </div>
      </transition-group>
    </div>
    <span class="btn btn_left" @click="hPrev"></span>
    <span class="btn btn_right" @click="hNext"></span>

    <div class="txt">{{this.list[currentIdx].alt}}</div>
    <ol class="indirector">
      <li
      v-for="(item,idx) in list"
      :key="idx"
      @mouseenter="hDirectorEnter(idx)"
      :class="{current:idx===currentIdx}"
      ></li>

    </ol>
  </div>

</template>

<script>
export default {
  name: 'MySlider',
  props: {
    list: {
      type: Array,
      required: true
    },
    curIdx: {
      type: Number,
      default: 0,
      required: false
    },
    auto: {
      type: Number,
      default: 0,
      required: false
    }
  },
  data () {
    return {
      currentIdx: this.curIdx,
      timer: null
    }
  },
  created () {
    // 如果用户设置auto 开启定时播放功能
    if (this.auto) {
      this.timer = setInterval(() => {
        this.hNext()
      }, this.auto)
    }
  },
  methods: {
    hClick () {
      // 把点击事件抛给父级组件 告别父组件是哪张图被点击了
      this.$emit('click', this.currentIdx)
    },
    hDirectorEnter (idx) {
      // 鼠标进入指示条 设置它为当前索引
      this.currentIdx = idx
    },
    hMouseenter () {
      // 如果有定时器在工作 则要清除定时器
      // 鼠标进入 删除定时器
      clearInterval(this.timer)
    },
    hMouseleave () {
      if (this.auto) {
        this.timer = setInterval(() => {
          this.hNext()
        }, this.auto)
      }
    },
    hNext () {
      this.currentIdx = this.currentIdx + 1
      if (this.currentIdx === this.list.length) {
        this.currentIdx = 0
      }
    },
    hPrev () {
      this.currentIdx = this.currentIdx - 1
      if (this.currentIdx === -1) {
        this.currentIdx = this.list.length - 1
      }
    }
  },
  watch: {
    currentIdx () {
      // console.log('轮播变化了', this.currentIdx)
      this.$emit('sliderChange', this.currentIdx)
    }
  }

}
</script>

<style>
.fade-enter-active,.fade-leave-active {
  transition: all .3s ;
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  /* transform: translateX(40px); */
  transform: translateX(400px);
  opacity: 0;
}

.slider .slider-content,
.slider img {
  width: 100%;
  height: 100%;
}
.slider {
  margin: 0 auto;
  border: 1px solid #ccc;
  position: relative;
}
.slider .slider-content {
  overflow: hidden;
  position: relative;
}
.slider .slider-content .slider-item {
  position: absolute;
  top: 0;
  left: 0;
}
.slider img {
  cursor: pointer;
  width: 100%;
}
.slider .btn,
.slider .txt,
.slider .indirector {
  position: absolute;
}
.slider .btn {
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0);
  top: 50%;
  transform: translateY(-50%);
  transition: background-color 0.2s;
}
.slider .btn:hover {
  background-color: rgba(255, 255, 255, 1);
}

.slider .btn:before,
.slider .btn:after {
  content: "";
  height: 3px;
  width: 25px;
  background-color: #fff;
  position: absolute;
  left: 15px;
  top: 23px;
  transform: rotateZ(60deg);
  transform-origin: 0px center;
  transition: all 0.2s;
}
.slider .btn:after {
  transform: rotateZ(-60deg);
}
.slider .btn:hover:before {
  transform: rotateZ(45deg);
  background-color: red;
}
.slider .btn:hover:after {
  transform: rotateZ(-45deg);
  background-color: red;
}

.slider .btn.btn_right:before,
.slider .btn.btn_right:after {
  transform-origin: right center;
}

.slider .btn.btn_left {
  left: 20px;
}
.slider .btn.btn_right {
  right: 20px;
}

.slider .txt {
  text-indent: 1em;
  line-height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: left;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #fff;
}
.slider .indirector {
  bottom: 10px;
  right: 1em;
}
.slider .indirector li {
  display: inline-block;
  margin: 0 5px;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: #fff;
}
.slider .indirector li {
  transition: transform 0.2s;
}
.slider .indirector .current {
  background-color: #369;
  transform: scale(1.2);
}
</style>
