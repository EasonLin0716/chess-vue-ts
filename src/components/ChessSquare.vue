<script setup lang="ts">
import {  ref } from 'vue';
import type { Ref } from 'vue';
import ChessPiece from './ChessPiece.vue';
interface Props {
    piece: string;
    isColoredSquare: boolean;
    coordinate: string;
}

const props = defineProps<Props>();
const isMoving: Ref<boolean> = ref(false)
const startMoveHandler = () => {
  isMoving.value = true;
}
</script>

<template>
  <div :class="{
    'chess-square': true,
    'is-colored': props.isColoredSquare,
  }">
    <span class="coordinate">{{ props.coordinate }}</span>
    <ChessPiece v-if="piece" :piece="piece" :isMoving="isMoving" :coordinate="coordinate"
      @startMove="startMoveHandler" />
  </div>
</template>

<style scoped>
.chess-square {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: #f0d9b5;
  position: relative;
}

.coordinate {
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
