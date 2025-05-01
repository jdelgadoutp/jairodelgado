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
    <div class="font-sans bg-gradient-to-r from-gray-200 via-[#e6edf4] to-neutral-100 text-gray-900 dark:text-gray-400 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <Navbar />
        <main>
            <Article />
        </main>
        <Footer />
    </div>
</template>

<style scoped></style>
