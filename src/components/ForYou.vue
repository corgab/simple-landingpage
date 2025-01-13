<template>
    <div class="container-lg py-5" id="applycases-section">
        <h1 class="fs-1 fw-bold text-center pb-3">{{ title }}</h1>
        <div class="row justify-content-between pt-3 gap-lg-0">
            <div class="text-center col-12 col-md-4 py-4 py-lg-0 px-md-2 px-lg-5" v-for="card in cards">
                <img :src="card.img" alt="" class="img-fluid rounded-cirlce"
                    style="width: 15rem; height: 15rem; object-fit: cover;">
                <h1 class="fs-4 fw-medium lh-base py-3 ">{{ card.content }}</h1>
            </div>
        </div>

    </div>
</template>
<script>
import womanAtPc from '../assets/donna-al-pc.jpg';
import confusedMan from '../assets/uomo-confuso.jpg';
import robotWine from '../assets/robot-vino.jpg'
export default {
    data() {
        return {
            title: 'Who It\'s For',
            cards: [
                {
                    img: womanAtPc,
                    content: 'Want to make yourself known on the web'
                },
                {
                    img: confusedMan,
                    content: 'You don\'t have computer knowledge'
                },
                {
                    img: robotWine,
                    content: 'want something automated'
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