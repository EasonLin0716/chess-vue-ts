<script setup lang="ts">
import { pieceMap } from '../utils';
import { ChessPieceKey } from '../constants';
interface Props {
    piece: string;
    isMoving: boolean;
    coordinate: string;

}
const props = defineProps<Props>();

interface Emits {
    (event: 'startMove'): void;
}

const emits = defineEmits<Emits>();

const startMoveHandler = () => {
    console.log('startMove!')
    emits('startMove');
};
</script>
<template>
    <component :is="pieceMap[props.piece as ChessPieceKey]" :piece="piece" :isMoving="props.isMoving"
        class="chess-piece" @startMove="startMoveHandler" />
</template>
<style scoped>
.chess-piece {
    font-size: 2em;
    color: blue;
    cursor: pointer;
}
</style>
