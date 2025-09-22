<template>
    <section id="clientes"
        class="py-16 px-6 max-w-7xl mx-auto overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg prose dark:shadow-gray-700/25">
        <h2 class="text-2xl font-bold text-center mb-8 text-[#2269BA] dark:text-white">Clientes</h2>
        <div class="image-scroll-container relative w-full overflow-hidden">
            <div class="image-scroll flex animate-scroll-x space-x-6">
                <!-- Duplicamos imágenes para efecto infinito -->
                <template v-for="n in 2">
                    <img v-for="(image, index) in images" :key="`${n}-${index}`" :src="image" alt="Client Image"
                        class="w-64 h-64 object-contain dark:bg-gray-200 p-4 transition-transform hover:scale-105 duration-300 rounded-r-4xl" />
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

import Megamedicas from '@/assets/clients/megamedicas.png'
import Ssai from '@/assets/clients/ssai.png'
import Gaviota from '@/assets/clients/gaviota.png'
import LogoAsservi from '@/assets/clients/logoasservi.png'
import LogoSalgari from '@/assets/clients/logosalgari.png'
import Bendita from '@/assets/clients/bendita.png'
import Mayoristas from '@/assets/clients/mayoristas.png'
import Surtigranos from '@/assets/clients/surtigranos.png'
import Dcolfarma from '@/assets/clients/dcolfarma.png'
import Medical from '@/assets/clients/medical.png'
import Sonrie from '@/assets/clients/sonrie.png'
import Uniity from '@/assets/clients/uniity.png'
import Poleas from '@/assets/clients/poleas.png'
import Saman from '@/assets/clients/saman.png'
import Abassto from '@/assets/clients/abassto.png'
import Cimder from '@/assets/clients/cimder.png'
import Jaibana from '@/assets/clients/jaibana.png'
import Estaciones from '@/assets/clients/estaciones.webp'

export default {
    name: "Clientes",
    data() {
        return {
            images: [
                Megamedicas,
                Dcolfarma,
                Medical, 
                Sonrie, 
                Ssai, 
                Gaviota, 
                LogoAsservi, 
                Uniity, 
                LogoSalgari, 
                Bendita, 
                Mayoristas, 
                Surtigranos, 
                Abassto, 
                Poleas, 
                Saman,
                Cimder,
                Jaibana,
                Estaciones
            ]
        };
    }
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