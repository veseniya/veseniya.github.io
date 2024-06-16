<style scoped>

</style>

<script setup lang="ts">
const items = [
    'https://img.freepik.com/premium-photo/medium-shot-woman-living-farmhouse_23-2150621719.jpg?w=2000',
    'https://img.freepik.com/premium-photo/squirrel-sitting-tree-branch_1048944-30371835.jpg?w=2000',
    'https://img.freepik.com/free-photo/running-stallion-meadow-capturing-beauty-nature-generated-by-artificial-intelligence_25030-62873.jpg?w=2000&t=st=1718564172~exp=1718564772~hmac=6cf805c6dae867ccd7903a147c9075054b3090f775f17310cb5dae67a7a0fbd7'
]

const carouselRef = ref()

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 3000)
})

</script>

<template>
    <div>
            <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
                class="rounded-lg overflow-hidden" indicators>
                <img :src="item" class="responsive">
            </UCarousel>
        </div>
</template>