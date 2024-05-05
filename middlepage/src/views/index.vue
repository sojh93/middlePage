<template>
    <div class="subtitle">부제</div>
    <div class="contents-wrapper" v-for="item in data_1">
        <img class="contents-image" :src="item.img" />
        <div class="contents-text">
            {{ item.text }}
        </div>
    </div>
</template>

<style scoped>
.subtitle {
  font-size: 12px;
  color: white;
}
</style>

<script setup>
import { ref } from 'vue'

const data_1 = ref([
    { id: 1, img: require('@/assets/images/profile.jpg'), text: '테스트 테스트테스트입니다. 으아아아앙' },
    // { id: 2, img: '', text: '테스트 테스트테스트입니다. 으아아아앙' },
])
</script>