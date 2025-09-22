<template>
    <!-- Servicios -->
    <section id="servicios" class="py-16 px-6">
        <h2 class="text-2xl font-bold text-center mb-8 text-[#2269BA] dark:text-white">Servicios</h2>

        <div class="block rounded-md border border-gray-300 p-4 sm:p-6 mb-10 max-w-6xl mx-auto shadow-sm transition hover:shadow-lg prose dark:shadow-gray-400/25">
            <div class="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
                <div class="sm:order-last sm:shrink-0">
                    <img alt="" src="@/assets/logo.png"
                        class="size-16 rounded-full object-cover sm:size-[72px] block dark:hidden" />
                    <img alt="" src="@/assets/logodark.png"
                        class="size-16 rounded-full object-cover sm:size-[72px] hidden dark:block" />
                </div>

                <div class="mt-4 sm:mt-0">
                    <p class="mt-1 text-[#2269BA] dark:text-white">By JD Engineer</p>

                    <p class="mt-4 text-gray-700 dark:text-gray-400 text-justify">
                        Brindo soluciones tecnológicas que impulsan la eficiencia operativa y la transformación digital
                        de las organizaciones mediante la combinación de mi experiencia, conocimiento técnico y enfoque
                        estratégico en el diseño e implementación de sistemas que optimizan procesos, automatizan tareas
                        y generan valor real a través de herramientas digitales personalizadas.
                    </p>

                    <p class="mt-4 text-gray-700 dark:text-gray-400 text-justify">
                        Mi trabajo se centra en fortalecer la infraestructura tecnológica de mis clientes, alineando
                        cada solución con sus objetivos de negocio.
                    </p>
                </div>
            </div>

            <!-- Corrección aquí -->
            <dl class="mt-6 grid grid-cols-[auto_1fr] items-center gap-1 lg:gap-1">
                <dt class="text-gray-700 dark:text-gray-400 ">
                    <span class="sr-only">Reading time</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                </dt>
                <dd class="text-gray-700 dark:text-gray-400 prose-xs">Servicios ...</dd>
            </dl>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto" id="list">
            <article
                class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg max-w-6xl mx-auto prose dark:shadow-gray-400/25">
                <img alt="" src="@/assets/api.jpg" class="h-56 w-full object-cover" />
                <div class="bg-white dark:bg-gray-900 p-4 sm:p-6 prose">
                    <time datetime="2022-10-10" class="block text-xs text-gray-500 dark:text-gray-400"> JD Engineer
                    </time>
                    <a href="#">
                        <h3 class="mt-0.5 text-lg text-gray-900 dark:text-white">Integración y APIs</h3>
                    </a>
                    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-justify dark:text-gray-400">
                        Conectamos tu ERP y sistemas externos con APIs seguras para optimizar procesos.
                    </p>
                </div>
            </article>

            <article
                class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg max-w-6xl mx-auto prose dark:shadow-gray-400/25">
                <img alt="" src="@/assets/software.jpg" class="h-56 w-full object-cover" />
                <div class="bg-white dark:bg-gray-900 p-4 sm:p-6 prose">
                    <time datetime="2022-10-10" class="block text-xs text-gray-500 dark:text-gray-400"> JD Engineer
                    </time>
                    <a href="#">
                        <h3 class="mt-0.5 text-lg text-gray-900 dark:text-white">Desarrollo de Software</h3>
                    </a>
                    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-justify dark:text-gray-400">
                        Soluciones personalizadas que responden a las necesidades estratégicas de su organización.
                    </p>
                </div>
            </article>

            <article
                class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg max-w-6xl mx-auto prose dark:shadow-gray-400/25">
                <img alt="" src="@/assets/it.jpg" class="h-56 w-full object-cover" />
                <div class="bg-white dark:bg-gray-900 p-4 sm:p-6 prose">
                    <time datetime="2022-10-10" class="block text-xs text-gray-500 dark:text-gray-400"> JD Engineer
                    </time>
                    <a href="#">
                        <h3 class="mt-0.5 text-lg text-gray-900 dark:text-white">Infraestructura IT</h3>
                    </a>
                    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-justify dark:text-gray-400">
                        Plataformas tecnológicas seguras y escalables para su operación empresarial.
                    </p>
                </div>
            </article>

            <article
                class="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg max-w-6xl mx-auto prose dark:shadow-gray-400/25">
                <img alt="" src="@/assets/solutions.jpg" class="h-56 w-full object-cover" />
                <div class="bg-white dark:bg-gray-900 p-4 sm:p-6 prose">
                    <time datetime="2022-10-10" class="block text-xs text-gray-500 dark:text-gray-400"> JD Engineer
                    </time>
                    <a href="#">
                        <h3 class="mt-0.5 text-lg text-gray-900 dark:text-white">Sistemas Empresariales</h3>
                    </a>
                    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 text-justify dark:text-gray-400">
                        Google Workspace, dominios, hosting y bases de datos para una gestión eficiente.
                    </p>
                </div>
            </article>
        </div>
    </section>

    <div class="px-6 max-w-4xl mx-auto mt-10">
        <span class="flex items-center">
            <span class="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300"></span>
            <span class="shrink-0 ps-4 text-[#2269BA] dark:text-white">Servicios</span>
        </span>
    </div>
</template>