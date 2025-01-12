<template>
    <div class="container-fluid py-5" id="testimonials-section">
        <div class="row align-items-center">
            <div class="col-auto col-md-5 border rounded-5 shadow py-3 mx-auto my-3 my-md-5" v-for="review in reviews">
                <div>
                    <div class="fs-4 lh-sm">{{ review.content }}</div>
                </div>
                <div class="d-flex align-items-center pt-4" style="user-select: none;">
                    <div>
                        <img :src="review.img" alt="photo" class="rounded-circle">
                    </div>
                    <div class="px-3">
                        <h2 class="fs-5 fw-semibold">{{ review.author }}</h2>
                        <i class="bi bi-star-fill text-primary px-1" v-for="star in review.stars"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            reviews: [
                {
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, accusamus.',
                    img: 'https://picsum.photos/90/90',
                    author: 'Carlo D.',
                    stars: 5,
                },
                {
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, accusamus.',
                    img: 'https://picsum.photos/90/90',
                    author: 'Pietro E.',
                    stars: 5,
                },
                {
                    content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, accusamus.',
                    img: 'https://picsum.photos/90/90',
                    author: 'Alessandro F.',
                    stars: 5,
                },

            ]
        }
    }
}
</script>

<style scoped></style>