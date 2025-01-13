<template>
    <div class="container py-5" id="testimonials-section">
        <div class="row  align-items-center justify-content-around">
            <div class="col-12 col-lg-5 border rounded-5 shadow py-3 my-3 my-lg-5 " v-for="review in reviews">
                <div>
                    <div class="fs-5 fw-medium lh-sm">{{ review.content }}</div>
                </div>
                <div class="d-flex align-items-center pt-4" style="user-select: none;">
                    <div>
                        <img :src="review.img" alt="photo" class="rounded-circle img-fluid"
                            style="width: 7rem; height: 7rem; object-fit: cover;">
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
import carlo from '../assets/carlo.webp';
import giulia from '../assets/giulia.webp';
import pietro from '../assets/pietro.webp'
export default {
    data() {
        return {
            reviews: [
                {
                    content: 'A service that simplifies the creation of a website is what I was looking for',
                    img: carlo,
                    author: 'Carlo D.',
                    stars: 5,
                },
                {
                    content: 'Creating a website without stress and in a short time is a dream come true',
                    img: giulia,
                    author: 'Giulia G.',
                    stars: 4,
                },
                {
                    content: 'The idea of a site that is easy to set up without any technical skills! Finally a service that makes everything simple',
                    img: pietro,
                    author: 'Pietro E.',
                    stars: 5,
                },

            ]
        }
    }
}
</script>

<style scoped></style>