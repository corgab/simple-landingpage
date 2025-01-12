<template>
    <div class="container py-5" id="faq-section">
        <div class="row row-cols-1 row-cols-md-2 align-items-center">
            <div class="col">
                <h1 class="my-4">Frequently asked questions</h1>
                <p class="fs-5 lh-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. A itaque magnam nesciunt
                    quisquam
                    iusto amet
                    repellat earum, voluptates adipisci! Rerum dolores ducimus ex dolorem fugit dicta totam accusantium
                    veritatis est.</p>
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
            faqs: [
                {
                    request: 'How can I place an order?',
                    answer: 'You can place an order directly on our website by adding items to your cart and proceeding to checkout.',
                },
                {
                    request: 'What payment methods are accepted?',
                    answer: 'We accept payments via credit card, PayPal, and bank transfer.',
                },
                {
                    request: 'How can I track my order?',
                    answer: 'You will receive a tracking number via email once your order has been shipped. You can use it to track your package.',
                },
                {
                    request: 'Can I return or exchange an item?',
                    answer: 'Yes, we offer returns and exchanges within 30 days of purchase. Please visit our returns page for more details.',
                },
            ]
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