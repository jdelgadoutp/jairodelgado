<template>
    <!-- Navbar -->
    <nav class="fixed top-0 left-0 z-50 w-full shadow bg-slate-400 dark:bg-gray-800 rounded-b-3xl">
        <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <img src="@/assets/logodark.png" alt="Logo JD" class="w-10 h-10 object-cover hidden dark:block" />
                <img src="@/assets/logo.png" alt="Logo JD" class="w-10 h-10 object-cover block dark:hidden" />
                <span class="text-lg font-bold dark:text-white"><span class="text-[#2269BA]">J</span>D Engineer</span>
            </div>
            <ul class="hidden md:flex space-x-5 text-sm font-medium">
                <li><a href="#" class="hover:text-[#2269BA] dark:text-white">Inicio</a></li>
                <li><a href="#sobremi" class="hover:text-[#2269BA] dark:text-white">Sobre mí</a></li>
                <li><a href="#servicios" class="hover:text-[#2269BA] dark:text-white">Servicios</a></li>
                <li><a href="#proyectos" class="hover:text-[#2269BA] dark:text-white">Proyectos</a></li>
                <li><a href="#contacto" class="hover:text-[#2269BA] dark:text-white">Contacto</a></li>
            </ul>
        </div>
    </nav>

    <!-- Espacio para compensar navbar -->
    <div class="h-20"></div>
</template>

<script>
</script>