<template>
    <div class="container py-5" id="benefits-section">
        <div class="card-group gap-5">
            <div class="card mb-3 text-center shadow rounded" v-for="card in cards">
                <img :src="card.img" class="card-img-top" alt="logo">
                <div class="card-body">
                    <h5 class="card-title fs-2 fw-normal">{{ card.content }}</h5>
                </div>
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
                    img: 'https://picsum.photos/400/300',
                    content: 'Card title',
                },
                {
                    img: 'https://picsum.photos/400/300',
                    content: 'Card title',
                },
                {
                    img: 'https://picsum.photos/400/300',
                    content: 'Card title',
                },
            ]
        }
    }

}
</script>

<style scoped></style>