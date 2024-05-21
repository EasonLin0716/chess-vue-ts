<script setup lang="ts">
import { PropType } from 'vue';
const props = defineProps({
    piece: {
        type: String as PropType<string>,
        required: true,
    },
    isMoving: {
        type: Boolean as PropType<boolean>,
        required: true,
    },
});
</script>

<template>
    <div>{{ props.piece }}</div>
</template>