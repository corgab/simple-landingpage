<template>
    <div class="container py-5">
        <div class="text-center">
            <h1 class="display-3 fw-bold">{{ title }}</h1>
            <h1 class="fs-4 fw-semibold pt-1">{{ subtitle }}</h1>

            <div class="pt-4">
                <a class="btn btn-dark d-inline-block mx-3 btn-lg shadow fs-4 fw-medium px-5" :href="cta.href"
                    role="button" @click="trackForm">{{
                        cta.content
                    }}</a>
                <a class="btn btn-light d-inline-block mx-3 btn-lg border shadow fs-4 fw-medium px-5" :href="demo.href"
                    target="_blank" role="button" @click="trackDemo">{{
                        demo.content
                    }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'CRAFTEDHUB',
            subtitle: 'HUB FOR YOUR CREATIONS',
            cta: 'JOIN US',
            cta: {
                content: 'JOIN US',
                href: 'https://tally.so/r/mBAedK'
            },
            demo: {
                content: 'DEMO',
                href: 'https://demo.craftedhub.it/',
            },

        }
    },
    methods: {
        trackForm() {
            this.$gtag.event('button_form', {
                event_category: 'interaction',
                event_label: 'Click sul form',
            });
        },
        trackDemo() {
            this.$gtag.event('button_demo', {
                event_category: 'interaction',
                event_label: 'Click sulla demo',
            });
        },
    },
}
</script>

<style scoped></style>