<template>
    <div class="container">
        <div class="row justify-content-between ">
            <div class="col">
                <h1>{{ title }}</h1>
                <p>{{ description }}</p>
            </div>
            <div class="d-flex row-cols-1 row-cols-md-3 flex-wrap col p-0 text-center text-md-start">
                <div class="col col-md-4 ">
                    <h1>Legal</h1>
                    <ul class="p-0">
                        <li><a href="">Privacy policy</a></li>
                        <li><a href="">Terms of use</a></li>
                    </ul>
                </div>
                <div class="col col-md-4">
                    <h1>Menu </h1>
                    <ul class="p-0">
                        <li v-for="item in navItems">
                            <a :href="item.href">{{ item.name }}</a>
                        </li>
                    </ul>
                </div>
                <div class="col col-md-4">
                    <h1>Socials</h1>
                    <ul class="p-0">
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">Linkedin</a></li>
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
            title: "Your product",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam delectus ipsum corrupti impedit! Ad culpa in laudantium soluta quidem et aperiam nesciunt ipsam,",
            navItems: [
                {
                    href: "#benefits-section",
                    name: "Benefits"
                },
                {
                    href: "#applycases-section",
                    name: "Who It's For"
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