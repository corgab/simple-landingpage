<template>
    <nav class="navbar navbar-expand-lg bg">
        <div class="container">
            <a class="navbar-brand" href="">
                <img :src="img" alt="Logo" class="d-inline-block align-text-top pe-2">{{ navTitle
                }}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <ul class="collapse navbar-collapse navbar-nav justify-content-center nav-pills" id="navbarNav">
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

            img: 'https://picsum.photos/30/30',
            navTitle: 'Nav',
            navItem: [
                {
                    href: "#benefits-section",
                    name: "Benefits"
                },
                {
                    href: "#applycases-section",
                    name: "A chi è rivolto"
                },
                {
                    href: "#features-section",
                    name: "Features"
                },
                {
                    href: "#testimonials-section",
                    name: "Testimonials"
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