<script setup lang="ts">
import { ChessBoard } from '../types';
import ChessSquare from './ChessSquare.vue';
import { ref } from 'vue';
import { getInitialBoard } from '../utils';
const board = ref<ChessBoard>(getInitialBoard());
const isColoredSquare = (x: number, y: number) => {
    return (x % 2 === 0 && y % 2 === 1) || (x % 2 === 1 && y % 2 === 0);
}
</script>

<template>
    <div class="chessboard">
        <template v-for="(row, rowIndex) in board" :key="rowIndex">
            <div v-for="(data, columnIndex) in row" :key="columnIndex">
                <ChessSquare :piece="data.piece" :isColoredSquare="isColoredSquare(rowIndex, columnIndex)"
                    :coordinate="`${data.x}${data.y}`" />
            </div>
        </template>
    </div>
</template>

<style scoped>
.chessboard {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    aspect-ratio: 1/1;
    width: 600px;
    border: 1px solid black;
    grid-gap: 1px;
    background-color: #000;
}
</style>
