<script setup lang="ts">
import { PieceProps, PieceEmits } from '@/constants';
const props = defineProps<PieceProps>();
const emit = defineEmits<PieceEmits>();
</script>

<template>
    <div>{{ props.piece }}</div>
</template>