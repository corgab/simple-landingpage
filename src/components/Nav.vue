<template>
    <nav class="navbar navbar-expand-lg bg">
        <div class="container">
            <a class="navbar-brand d-flex align-items-center fw-semibold" href="">{{ navTitle }}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="collapse navbar-collapse navbar-nav nav-pills me-auto justify-content-end" id="navbarNav">
                <li class="nav-item" v-for="item in navItem">
                    <a class="nav-link " aria-current="page" :href="item.href">{{ item.name }}</a>
                </li>

            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            navTitle: 'CRAFTEDHUB',
            navItem: [
                {
                    href: "#benefits-section",
                    name: "Benefici"
                },
                {
                    href: "#applycases-section",
                    name: "Per chi è"
                },
                {
                    href: "#features-section",
                    name: "Caratteristiche"
                },
                {
                    href: "#testimonials-section",
                    name: "Testimonianze"
                },
                {
                    href: "#faq-section",
                    name: "FAQ"
                },
            ]
        }
    }
}
</script>

<style scoped></style>