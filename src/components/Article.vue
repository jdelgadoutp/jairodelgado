<template>
    <div>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
    </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'

export default {
    components: {
        Hero,
        About,
        Services,
        Projects,
        Contact
    }
}

</script>