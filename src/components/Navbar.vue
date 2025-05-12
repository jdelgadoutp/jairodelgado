<template>
    <!-- Navbar fija -->
    <nav class="fixed top-0 left-0 z-50 w-full shadow bg-slate-400 dark:bg-gray-900 border-l border-r border-b border-[#2269BA] dark:border-slate-400 rounded-b-3xl">
        <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <a href="#">
                    <img src="@/assets/logodark.png" alt="Logo JD" class="w-10 h-10 object-cover hidden dark:block" />
                    <img src="@/assets/logo.png" alt="Logo JD" class="w-10 h-10 object-cover block dark:hidden" />
                </a>  
                <span class="text-lg font-bold dark:text-white"><span class="text-[#2269BA]">J</span>D Engineer</span>
            </div>

            <!-- Links desktop -->
            <ul class="hidden md:flex space-x-5 text-sm font-medium">
                <li v-for="item in navigation" :key="item.path">
                    <a :href="item.path" @click="mobileMenuOpen = false"
                        class="block text-gray-800 dark:text-white font-medium hover:text-[#2269BA]">
                        {{ item.name }}
                    </a>
                </li>
            </ul>

            <!-- Botón menú móvil -->
            <button @click="mobileMenuOpen = true" class="md:hidden dark:text-white text-gray-900">
                <Bars3Icon class="w-6 h-6" />
            </button>
        </div>

        <!-- Menú móvil -->
        <Dialog :open="mobileMenuOpen" @close="mobileMenuOpen = false" class="lg:hidden">
            <div class="fixed inset-0 z-40 bg-black/40" />
            <DialogPanel
                class="fixed right-0 top-0 bottom-0 z-50 w-3/4 max-w-xs bg-slate-400 dark:bg-gray-900 p-6 shadow-lg space-y-6">
                <div class="flex justify-between items-center">
                    <a href="#" @click="mobileMenuOpen = false">
                        <img src="@/assets/logodark.png" alt="Logo JD" class="w-10 h-10 object-cover hidden dark:block" />
                        <img src="@/assets/logo.png" alt="Logo JD" class="w-10 h-10 object-cover block dark:hidden" />
                    </a>
                    <button @click="mobileMenuOpen = false">
                        <XMarkIcon class="w-6 h-6 text-gray-700" />
                    </button>
                </div>
                <ul class="space-y-4">
                    <li v-for="item in navigation" :key="item.path">
                        <a :href="item.path" @click="mobileMenuOpen = false"
                            class="block text-gray-800 dark:text-white font-medium hover:text-[#2269BA]">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </DialogPanel>
        </Dialog>
    </nav>

    <!-- Espacio debajo de navbar -->
    <div class="h-20"></div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)

const navigation = [
    { name: 'Inicio', path: '#' },
    { name: 'Sobre mí', path: '#sobremi' },
    { name: 'Servicios', path: '#servicios' },
    { name: 'Proyectos', path: '#proyectos' },
    { name: 'Tecnologías', path: '#skils' },
    { name: 'Clientes', path: '#clientes' },
    { name: 'Contacto', path: '#contacto' },
    
]
</script>