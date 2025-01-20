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
                    content: 'Un servizio che semplifica la creazione di un sito web è quello che cercavo',
                    img: carlo,
                    author: 'Carlo D.',
                    stars: 5,
                },
                {
                    content: 'Creare un sito web senza stress e in poco tempo è un sogno che diventa realtà',
                    img: giulia,
                    author: 'Giulia G.',
                    stars: 4,
                },
                {
                    content: "L'idea di un sito che è facile da configurare senza alcuna competenza tecnica! Finalmente un servizio che rende tutto semplice",
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