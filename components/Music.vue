<template>
<main class="main">
  <button
    class="musicBtn"
    @click="musicStart">
    Music
  </button>
  <button 
    class="startBtn"
    @click="appStart"
    v-if="isStarted===false">
    Start
  </button>
  <section
  class="touchZone"
  v-else>
  &nbsp;
  </section>
</main>
</template>

<script>
import * as Tone from 'tone'

export default {
  data(){
    return {
      isStarted: false
    }
  },
  methods: {
    appStart(){
      this.isStarted = true
    },

    musicStart(){
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease("C4", "8n");
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

.startBtn,
.musicBtn {
    padding: 10px 20px;
}
</style>