<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import Article from '@/components/Article.vue'

export default {
    components: {
        Navbar,
        Footer,
        Article
    }
}
</script>

<template>
    <div class="font-sans bg-gradient-to-r from-gray-300 via-[#bddaf8] to-neutral-50 text-gray-900 dark:text-gray-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <Navbar />
        <main>
            <router-view />
        </main>
        <Footer />
    </div>
</template>

<style scoped></style>
