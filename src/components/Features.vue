<template>
    <div class="container py-5" id="features-section">
        <div class="row row-cols-1 row-cols-sm-2 align-items-center align-items-md-start justify-content-center">
            <div class="col ">
                <h1 class="py-3 text-center text-sm-start">{{ title }}</h1>
                <ul class="d-flex gap-3 p-0 flex-wrap justify-content-center justify-content-sm-start ">
                    <li class="border rounded text-center d-inline-block btn btn-lg btn-white" v-for="card in cards">
                        {{ card }}</li>
                </ul>
            </div>
            <div class="col py-3 py-sm-0">
                <div class="d-flex justify-content-center">
                    <img :src="GIF" alt="photo" class="img-fluid w-75">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import GIF from '../assets/piccione.gif'
export default {
    data() {
        return {
            GIF,
            title: 'Caratteristiche',
            cards: ['Semplicità', 'Velocità', 'Personalizzazione', 'Personalizzazione', 'Intuitività', 'Flessibilità', 'Efficienza', 'Automazione', "Facilità d'uso"]
        }
    }
}
</script>

<style scoped>
img {
    border-radius: 15%;
}

ul {
    cursor: pointer;
    user-select: none;
}

li {
    transition: background-color 0.3s ease;
}

li:hover {
    background-color: #e6e6e6;
}
</style>