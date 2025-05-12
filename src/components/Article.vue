<template>
    <div>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Clients />
        <Contact />
    </div>
</template>

<script>
import Hero from '@/components/Hero.vue'
import About from '@/components/About.vue'
import Services from '@/components/Services.vue'
import Projects from '@/components/Projects.vue'
import Contact from '@/components/Contact.vue'
import Skills from './ Skills.vue'
import Clients from '@/components/Clients.vue'


export default {
    components: {
        Hero,
        About,
        Services,
        Projects,
        Contact,
        Skills,
        Clients
    }
}

</script>