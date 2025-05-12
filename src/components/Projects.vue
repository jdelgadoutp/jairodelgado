<template>
    <!-- Proyectos -->
    <section id="proyectos" class="py-16 px-6 max-w-6xl mx-auto">
        <h2 class="text-2xl font-bold text-center mb-8 text-[#2269BA] dark:text-white">Proyectos</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

            <article
                class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
                <img alt="" src="@/assets/integracion.jpg" class="h-56 w-full object-cover" />

                <div class="p-4 sm:p-6 prose">
                    <a href="#">
                        <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                            Integración ERP Oceanic
                        </h3>
                    </a>

                    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400s text-justify">
                        Este proyecto consiste en la integración del ERP Oceanic con una API personalizada para la
                        generación automática de certificados laborales. La solución permite emitir certificados
                        laborales de manera eficiente, asegurando la personalización, seguridad y trazabilidad de los
                        documentos en tiempo real.
                    </p>

                    <a href="#" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                        Descubra más
                        <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                            &rarr;
                        </span>
                    </a>
                </div>
            </article>

            <article
                class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
                <img alt="" src="@/assets/csv.jpg" class="h-56 w-full object-cover" />

                <div class="p-4 sm:p-6 prose">
                    <a href="#">
                        <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                            Automatización documentos
                        </h3>
                    </a>

                    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400s text-justify">
                        Proyecto que automatiza la carga de archivos CSV (facturas, notas, recibos) e integra los datos
                        directamente con el sistema contable, optimizando procesos y reduciendo errores manuales.
                    </p>

                    <a href="#" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                        Descubra más

                        <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                            &rarr;
                        </span>
                    </a>
                </div>
            </article>

            <article
                class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-xs dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
                <img alt="" src="@/assets/gpon.jpg" class="h-56 w-full object-cover" />

                <div class="p-4 sm:p-6 prose">
                    <a href="#">
                        <h3 class="text-lg font-medium text-gray-900 dark:text-white">
                            Infraestructura IT
                        </h3>
                    </a>

                    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 dark:text-gray-400s text-justify">
                        Implementación de una red GPON para conectividad de alta velocidad, configuración de firewall
                        Palo Alto para seguridad avanzada, segmentación de redes mediante VLANs para optimizar el
                        tráfico y configuración de Sophos Wi-Fi para una gestión centralizada de la red inalámbrica,
                        garantizando eficiencia y seguridad en toda la infraestructura.
                    </p>

                    <a href="#" class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                        Descubra más

                        <span aria-hidden="true" class="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                            &rarr;
                        </span>
                    </a>
                </div>
            </article>

        </div>
    </section>
    <div class="px-6 max-w-4xl mx-auto mt-2">
        <span class="flex items-center">
            <span class="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>

            <span class="shrink-0 ps-4 text-[#2269BA] dark:text-white">Proyectos</span>
        </span>
    </div>
</template>