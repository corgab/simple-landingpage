<template>
    <div class="container-lg py-5" id="benefits-section">
        <div class="row  gap-lg-4 justify-content-around justify-items-center">
            <div class="card mb-3 text-center shadow rounded px-0 col-12 col-md-3 col-lg-3" v-for="card in cards">
                <img :src="card.img" class="card-img-top img-fluid h-auto" alt="">
                <div class="card-body">
                    <div class="row d-sm-block d-lg-flex align-items-center">
                        <h5 v-html="card.icon" class="fs-1 col-lg-3"></h5>
                        <h5
                            class="card-title fs-2 fw-medium lh-sm text-start ml-2 col-auto col-lg-9 text-center text-lg-start">
                            {{ card.content }}</h5>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import manAtPc from '../assets/uomo-al-pc.webp';
import handshake from '../assets/stretta-di-mano.webp';
import upGraph from '../assets/grafico-salita.webp'
export default {
    data() {
        return {
            cards: [
                {
                    img: manAtPc,
                    content: 'Very easy and fast customization',
                    icon: '<i class="bi bi-box-fill"></i>'
                },
                {
                    img: handshake,
                    content: 'Professional for your business',
                    icon: '<i class="bi bi-briefcase-fill"></i>',
                },
                {
                    img: upGraph,
                    content: 'Attract more customers quickly',
                    icon: '<i class="bi bi-broadcast-pin"></i>'
                },
            ]
        }
    }

}
</script>

<style scoped></style>