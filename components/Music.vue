<template>
<main class="main">
  <button
    class="startBtn"
    @click="appStart"
    v-if="isStarted===false">
    Start
  </button>
  <section
    @mousedown="ringStart"
    @touchstart="ringStart"
    @mouseup="ringStop"
    @touchend="ringStop"
    @mouseleave="ringStop"
    @touchleave="ringStop"
    @mousemove="ring"
    @touchmove="ring"
    class="touchZone"
    id="touchZone"
    v-else
  >&nbsp;</section>
</main>
</template>

<script>
import * as Tone from 'tone'

export default {
  data(){
    return {
      isStarted: false,
      synth: null,
      isRings: false
    }
  },
  methods: {
    appStart(){
      this.isStarted = true;
      this.synth = new Tone.Synth().toDestination();
    },
    ringStart(){
      this.isRings = true;
      this.ring();
    },
    ringStop(){
      this.isRings = false;
      this.ring();
    },
    ring(event){
      const minVol = -36;
      const minFreq = new Tone.Frequency("E1").toFrequency();
      const maxFreq = new Tone.Frequency("E5").toFrequency();
      let x = 0;
      let y = 0

      if(typeof event !== "undefined"){
        if(typeof event.touches !== "undefined" && event.touches.length > 0) {
          x = - event.touches[0].clientX;
          y = event.touches[0].clientY;
        } else {
          x = event.clientX;
          y = event.clientY;
        }
      }

      const height = document.getElementById("touchZone").clientHeight;
      const currentVol = Math.round((y / height) * minVol);

      console.log(currentVol);

      this.synth.volume.value = currentVol;

      const width = document.getElementById("touchZone").clientWidth;
      const currentFreq = Math.round((x*(maxFreq - minFreq)) / width) + minFreq;

      if (this.isRings) {
        this.synth.triggerAttack(currentFreq);
      } else {
        this.synth.triggerRelease();
      }
    }
  }
}
</script>

<style>
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.startBtn {
  border: solid 1px #000;
  border-radius: 10px;
  padding: 10px 20px;
}

.touchZone {
  background: linear-gradient(45deg, rgb(255, 255, 255), rgb(100, 255,255));
  width: 100%;
  min-width: 100%;
  height: 100vh;
  min-height: 100vh;
}

</style>