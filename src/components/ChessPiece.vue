<script setup lang="ts">
import { defineProps, defineEmits, PropType } from 'vue';
import { pieceMap } from '../utils';
import { ChessPiece } from '../types';
const props = defineProps({
    piece: {
        type: String as PropType<string>,
        required: true,
    },
    isMoving: {
        type: Boolean as PropType<boolean>,
        required: true,
    },
    coordinate: {
        type: String as PropType<string>,
        required: true,
    },
});
const emits = defineEmits(['startMove']);
</script>

<template>
    <component :is="pieceMap[props.piece as ChessPiece]" :piece="piece" :isMoving="props.isMoving" class="chess-piece"
        @startMove="emits('startMove')" />
</template>

<style scoped>
.chess-piece {
    font-size: 2em;
    color: blue;
    cursor: pointer;
}
</style>
