<template>
    <div class="container py-5" id="applycases-section">
        <h1 class="fs-1 fw-bold text-center pb-5">TITLE</h1>
        <div class="d-flex justify-content-evenly gap-5 pt-3">
            <div class="text-center" v-for="card in cards">
                <img :src="card.img" alt="" style="width:15rem">
                <h1 class="fs-4 fw-normal lh-base py-4">{{ card.content }}</h1>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    img: 'https://picsum.photos/500/500',
                    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, sint?'
                },
                {
                    img: 'https://picsum.photos/500/500',
                    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, sint?'
                },
                {
                    img: 'https://picsum.photos/500/500',
                    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, sint?'
                },
            ]
        }
    }
}
</script>

<style scoped>
img {
    border-radius: 50%;
}
</style>