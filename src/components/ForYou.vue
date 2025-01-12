<template>
    <div class="container py-5" id="applycases-section">
        <h1 class="fs-1 fw-bold text-center pb-5">{{ title }}</h1>
        <div class="row row-cols-1 row-cols-md-3 justify-content-evenly pt-3 gap-md-1 gap-lg-0">
            <div class="text-center col py-3 py-lg-0" v-for="card in cards">
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
            title: 'Title',
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