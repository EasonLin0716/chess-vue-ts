<script setup lang="ts">
import { defineProps, PropType, ref } from 'vue';
import ChessPiece from './ChessPiece.vue';
const props = defineProps({
  piece: {
    type: String as PropType<string>,
    required: true,
  },
  isColoredSquare: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  coordinate: {
    type: String as PropType<string>,
    required: true,
  },
});
const isMoving = ref(false)
const startMoveHanlder = () => {
  isMoving.value = true;
}
</script>

<template>
  <div :class="{
    chesssquare: true,
    'is-colored': props.isColoredSquare,
  }">
    <span class="cordinate">{{ props.coordinate }}</span>
    <ChessPiece v-if="piece" :piece="piece" :isMoving="isMoving" :coordinate="coordinate"
      @startMove="startMoveHanlder" />
  </div>
</template>

<style scoped>
.chesssquare {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: #f0d9b5;
  position: relative;
}

.cordinate {
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 0.5em;
  padding: 0.2em;
  color: green;
}

.is-colored {
  background-color: #000;
}
</style>
