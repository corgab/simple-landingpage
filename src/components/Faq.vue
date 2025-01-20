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
            title: 'Domande frequenti',
            content: 'Trova tutte le risposte alle domande più frequenti su come funziona il nostro servizio e su come può aiutare la tua attività a crescere online',
            faqs: [
                {
                    request: 'Come funziona il servizio?',
                    answer: 'Il nostro servizio ti consente di creare facilmente un sito web per la tua attività senza competenze tecniche. Con pochi clic, puoi configurare il sito, personalizzarlo e farlo funzionare in pochissimo tempo',
                },
                {
                    request: 'Chi può utilizzare il servizio?',
                    answer: 'Il servizio è progettato per le piccole e medie imprese, come ristoranti, parrucchieri, negozi e altre attività commerciali locali che desiderano una presenza online senza complicazioni',
                },
                {
                    request: 'Quanto tempo ci vuole per creare il sito web?',
                    answer: "L'impostazione del sito web è estremamente rapida. Con il nostro sistema, puoi avere il tuo sito pronto in meno di un'ora",
                },
                {
                    request: 'È richiesto un abbonamento?',
                    answer: 'Sì, il nostro servizio è basato su abbonamento, dandoti pieno accesso alla piattaforma e supporto continuo per tutta la durata del tuo abbonamento',
                },
            ]
        }
    },
    methods: {
        trackSection() {
            this.$gtag.event('section_FAQ', {
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