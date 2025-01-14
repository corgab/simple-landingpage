<template>
    <div class="container pt-5">
        <div class="row justify-content-between">
            <div class="col">
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
            </div>
            <div class="d-flex row-cols-1 row-cols-md-3 flex-wrap col p-0 text-center text-md-start">
                <!-- Sezione Legal -->
                <div class="col col-md-4">
                    <h1>Legal</h1>
                    <ul class="p-0">
                        <li>
                            <a href="/privacy-policy.html">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/terms-and-conditions.html">Terms of Use</a>
                        </li>
                    </ul>
                </div>
                <!-- Menu -->
                <div class=" col col-md-4">
                    <h1>Menu</h1>
                    <ul class="p-0">
                        <li v-for="item in navItems" :key="item.name">
                            <a :href="item.href">{{ item.name }}</a>
                        </li>
                    </ul>
                </div>
                <!-- Socials -->
                <div class="col col-md-4">
                    <h1>Socials</h1>
                    <ul class="p-0">
                        <li><a href="https://instagram.com" target="_blank">Instagram</a></li>
                        <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
                        <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Your Product",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam delectus ipsum corrupti impedit.",
            navItems: [
                { href: "#benefits-section", name: "Benefits" },
                { href: "#applycases-section", name: "Who It's For" },
                { href: "#features-section", name: "Features" },
                { href: "#testimonials-section", name: "Testimonials" },
                { href: "#faq-section", name: "FAQ" },
            ],
        };
    },

};
</script>

<style scoped></style>
