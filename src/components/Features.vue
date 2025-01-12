<template>
    <div class="container py-5" id="features-section">
        <div class="row row-cols-2 align-items-center">
            <div class="col">
                <h1 class="py-3">{{ title }}</h1>
                <ul class="d-flex gap-3 p-0 flex-wrap">
                    <li class="border rounded  text-center d-inline-block px-3 py-1" v-for="card in cards">{{ card
                        }}
                    </li>
                </ul>
            </div>
            <div class="col">
                <div class="text-center">
                    <img src="https://picsum.photos/500/500" alt="photo" class="img-fluid ">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Features',
            cards: ['ciao', 'ciao1', 'ciao2', 'ciao3', 'ciao4', 'ciao5', 'ciao6', 'ciao7', 'ciao8',]
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