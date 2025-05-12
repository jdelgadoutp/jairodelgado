<template>
    <section id="clientes"
        class="py-16 px-6 max-w-7xl mx-auto overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg prose dark:shadow-gray-700/25">
        <h2 class="text-2xl font-bold text-center mb-8 text-[#2269BA] dark:text-white">Clientes</h2>
        <div class="image-scroll-container relative w-full overflow-hidden">
            <div class="image-scroll flex animate-scroll-x space-x-6">
                <!-- Duplicamos imágenes para efecto infinito -->
                <template v-for="n in 2">
                    <img v-for="(image, index) in images" :key="`${n}-${index}`" :src="image" alt="Client Image"
                        class="w-64 h-64 object-contain dark:bg-slate-300 p-4 transition-transform hover:scale-105 duration-300 rounded-r-4xl" />
                </template>
            </div>
        </div>
    </section>
    <div class="px-6 max-w-4xl mx-auto mt-2">
        <span class="flex items-center">
            <span class="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>

            <span class="shrink-0 ps-4 text-[#2269BA] dark:text-white">Clientes</span>
        </span>
    </div>
</template>

<script>
export default {
    name: "Clientes",
    data() {
        return {
            images: [
                "src/assets/clients/megamedicas.png",
                "src/assets/clients/ssai.png",
                "src/assets/clients/gaviota.png",
                "src/assets/clients/logoasservi.png",
                "src/assets/clients/logosalgari.png",
                "src/assets/clients/bendita.png",
                // agrega más imágenes aquí
            ],
        };
    },
};
</script>

<style scoped>
@keyframes scroll-x {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-50%);
    }
}

.image-scroll {
    display: flex;
    width: max-content;
    animation: scroll-x 40s linear infinite;
}
</style>