<template>
    <div class="container py-5" id="faq-section" @mouseover="trackSection">
        <div class="row row-cols-1 row-cols-md-2 align-items-start">
            <div class="col">
                <h1 class="my-4">{{ title }}</h1>
                <p class="fs-5 lh-sm">{{ content }}</p>
            </div>
            <div class="col py-4 py-md-0">
                <div class="accordion " id="faqAccordion">
                    <div class="accordion-item mb-3 rounded" v-for="(faq, index) in faqs" :key="index">
                        <h2 class="accordion-header" :id="'heading' + index">
                            <button class="accordion-button d-flex justify-content-between" type="button"
                                :data-bs-toggle="'collapse'" :data-bs-target="'#collapse' + index"
                                :aria-expanded="index === 0 ? 'true' : 'false'" :aria-controls="'collapse' + index">
                                <span>{{ faq.request }}</span>
                            </button>
                        </h2>
                        <div :id="'collapse' + index" class="accordion-collapse collapse"
                            :aria-labelledby="'heading' + index" data-bs-parent="#faqAccordion">
                            <div class="accordion-body">
                                <span>{{ faq.answer }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Frequently asked questions',
            content: 'Find all the answers to the most frequently asked questions about how our service works and how it can help your business grow online',
            faqs: [
                {
                    request: 'How does the service work?',
                    answer: 'Our service allows you to easily create a website for your business without technical skills. With just a few clicks, you can set up the site, customize it, and get it running in no time',
                },
                {
                    request: 'Who can use the service?',
                    answer: 'The service is designed for small and medium businesses, such as restaurants, hairdressers, shops, and other local businesses that want an online presence without complications',
                },
                {
                    request: 'How long does it take to create the website? ',
                    answer: 'Setting up the website is extremely quick. With our system, you can have your site ready in less than an hour',
                },
                {
                    request: 'Is a subscription required?',
                    answer: 'Yes, our service is subscription-based, giving you full access to the platform and continuous support throughout the duration of your subscription',
                },
            ]
        }
    },
    methods: {
        trackSection() {
            this.$gtag.event('section_view', {
                event_category: 'scroll',
                event_label: 'Sezione FAQ',
            });
        }
    }
}
</script>

<style scoped>
/* .accordion-button:hover {
    background-color: #0d6efd;
    border-color: #0d6efd;
} */

.accordion-button:hover,
.accordion-button:focus {
    background-color: #0d6efd;
    /* Colore di sfondo al passaggio del mouse */
    border-color: #0d6efd;
    /* Colore del bordo */
    color: white;
    /* Colore del testo */
    transition: background-color 0.3s ease;
    /* Transizione fluida */
    box-shadow: none;
}
</style>