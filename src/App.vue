<template>
  <div class="bg">
    <Nav />
    <Hero />
    <Benefit />
    <ForYou />
    <Features />
    <Testimonials />
    <Faq />
    <Footer />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Hero from './components/Hero.vue'
import Benefit from './components/Benefit.vue';
import ForYou from './components/ForYou.vue';
import Features from './components/Features.vue';
import Testimonials from './components/Testimonials.vue';
import Faq from './components/Faq.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    Nav,
    Hero,
    Benefit,
    ForYou,
    Features,
    Testimonials,
    Faq,
    Footer
  },
  mounted() {
    setTimeout(() => {
      this.$gtag.event('time_on_page', {
        event_category: 'engagement',
        event_label: 'Tempo passato sulla pagina: 10 secondi',
      });
    }, 10000);
  },
}
</script>

<style scoped></style>