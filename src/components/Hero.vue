<template>
    <div class="container py-5">
        <div class="text-center">
            <h1 class="display-2 fw-bolder">{{ title }}</h1>
            <h1 class="fs-2 fw-normal py-4">{{ subtitle }}</h1>

            <div class="">
                <a class="btn btn-dark d-inline-block mx-2 btn-lg shadow " href="#" role="button">{{ cta }}</a>
                <a class="btn btn-light d-inline-block mx-2 btn-lg border shadow " href="#" role="button">{{ demo }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Title',
            subtitle: 'Subtitle',
            cta: 'CTA',
            demo: 'DEMO',
        }
    }
}
</script>

<style scoped></style>