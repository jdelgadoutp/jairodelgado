<template>
    <!-- Footer -->
    <footer
        class="bg-slate-400 dark:bg-gray-800 text-center py-4 rounded-t-4xl border-l border-r border-t border-[#2269BA] dark:border-slate-400">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="lg:flex lg:items-start lg:gap-8">
                <div class="text-teal-600 text-center lg:text-left mx-auto lg:mx-0">
                    <img src="@/assets/logodark.png" alt="Logo JD"
                        class="size-40 object-contain mx-auto hidden dark:block" />
                    <img src="@/assets/logo.png" alt="Logo JD"
                        class="size-40 object-contain mx-auto block dark:hidden" />
                </div>

                <div class="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
                    <div class="col-span-2">
                        <div>
                            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">¡Entérate de las últimas
                                novedades!</h2>

                            <p class="mt-4 dark:text-gray-400">
                                Mantente informado sobre las últimas actualizaciones en tecnología e innovación.
                                Suscríbete para recibir noticias relevantes y oportunidades exclusivas.
                            </p>
                        </div>
                    </div>

                    <div class="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                        <form class="w-full" @submit.prevent="suscribir">
                            <label for="UserEmail" class="sr-only"> Email </label>

                            <div
                                class="border border-gray-100 p-2 focus-within:ring-3 sm:flex sm:items-center sm:gap-4">
                                <input type="email" id="UserEmail" placeholder="example@domain.com" v-model="email"
                                    class="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm" />

                                <button type="submit"
                                    class="mt-1 w-full border-[#2269BA] bg-[#2269BA] px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0 required">
                                    Inscribirse
                                </button>
                            </div>
                        </form>
                    </div>

                    <div class="col-span-2 sm:col-span-1">
                        <p class="font-medium text-gray-900 dark:text-white">Servicios</p>

                        <ul class="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#servicios"
                                    class="text-gray-700 dark:text-gray-400 transition hover:opacity-75"> Software </a>
                            </li>

                            <li>
                                <a href="#servicios"
                                    class="text-gray-700 dark:text-gray-400 transition hover:opacity-75"> Bases de datos
                                </a>
                            </li>

                            <li>
                                <a href="#servicios"
                                    class="text-gray-700 dark:text-gray-400 transition hover:opacity-75"> Seguridad </a>
                            </li>

                            <li>
                                <a href="#servicios"
                                    class="text-gray-700 dark:text-gray-400 transition hover:opacity-75"> Integraciones
                                </a>
                            </li>

                            <li>
                                <a href="#servicios"
                                    class="text-gray-700 transition hover:opacity-75 dark:text-gray-400">
                                    Automatomatizaciones </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-span-2 sm:col-span-1">
                        <p class="font-medium text-gray-900 dark:text-white">Compañía</p>

                        <ul class="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#sobremi" class="text-gray-700 dark:text-gray-400 transition hover:opacity-75">
                                    Acerca de </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-span-2 sm:col-span-1">
                        <p class="font-medium text-gray-900 dark:text-white">Enlaces útiles</p>

                        <ul class="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#contacto"
                                    class="text-gray-700 dark:text-gray-400 transition hover:opacity-75"> Contacto </a>
                            </li>

                            <li>
                                <a href="#" class="text-gray-700 dark:text-gray-400 transition hover:opacity-75"> FAQs
                                </a>
                            </li>

                        </ul>
                    </div>

                    <div class="col-span-2 sm:col-span-1">
                        <p class="font-medium text-gray-900 dark:text-white">Legal</p>

                        <ul class="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#contacto"
                                    class="text-gray-700 dark:text-gray-400 transition hover:opacity-75"> Términos y
                                    condiciones
                                </a>
                            </li>

                            <li>
                                <a href="#contacto"
                                    class="text-gray-700 dark:text-gray-400 transition hover:opacity-75"> Política de
                                    privacidad
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="col-span-2 sm:col-span-1">
                        <p class="font-medium text-gray-900 dark:text-white">Descargas</p>

                        <ul class="mt-6 space-y-4 text-sm">
                            <li>
                                <a href="#" class="text-gray-700 dark:text-gray-400 transition hover:opacity-75">
                                    Certificaciones </a>
                            </li>

                            <li>
                                <a href="#" class="text-gray-700 dark:text-gray-400 transition hover:opacity-75"> Manual
                                    de usuario </a>
                            </li>
                        </ul>
                    </div>

                    <ul class="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
                        <li>
                            <a href="https://www.facebook.com/jairodelgadoengineer" rel="noreferrer" target="_blank"
                                class="text-gray-700 dark:text-gray-400 transition hover:opacity-75">
                                <span class="sr-only">Facebook</span>

                                <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/jairodelgadoengineer/" rel="noreferrer" target="_blank"
                                class="text-gray-700 dark:text-gray-400 transition hover:opacity-75">
                                <span class="sr-only">Instagram</span>

                                <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="https://x.com/delgado_jairo" rel="noreferrer" target="_blank"
                                class="text-gray-700 dark:text-gray-400 transition hover:opacity-75">
                                <span class="sr-only">X</span>

                                <!-- Nuevo ícono de X (Twitter) -->
                                <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M4.52 3h4.17l3.27 5.17L15.83 3h4.17l-5.91 8.77L20.48 21h-4.17l-3.63-5.7L8.91 21H4.74l6.06-9.11L4.52 3z" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="https://github.com/jdelgadoutp" rel="noreferrer" target="_blank"
                                class="text-gray-700 dark:text-gray-400 transition hover:opacity-75">
                                <span class="sr-only">GitHub</span>

                                <svg class="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/jairodelgadoengineer" rel="noreferrer" target="_blank"
                                class="text-gray-700 dark:text-gray-400 transition hover:opacity-75">
                                <span class="sr-only">LinkedIn</span>
                                <svg class="size-6" role="img" viewBox="0 0 24 24" fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <title>LinkedIn</title>
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554V9h3.414v1.561h.049c.476-.9 1.635-1.85 3.366-1.85 3.598 0 4.265 2.368 4.265 5.451v6.29zM5.337 7.433c-1.144 0-2.071-.927-2.071-2.071C3.266 4.218 4.193 3.29 5.337 3.29s2.071.927 2.071 2.071c0 1.144-.927 2.071-2.071 2.071zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.726v20.549C0 23.229.792 24 1.771 24h20.451C23.207 24 24 23.229 24 22.274V1.726C24 .771 23.207 0 22.225 0z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="mt-8 border-t border-gray-100 pt-8">
                <div class="sm:flex sm:justify-between">
                    <p class="text-xs text-gray-500">&copy; 2025. Jairo Andrés Delgado López. All rights reserved.</p>

                    <ul class="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                        <li>
                            <a href="#" class="text-gray-500 transition hover:opacity-75"> Términos y condiciones </a>
                        </li>

                        <li>
                            <a href="#" class="text-gray-500 transition hover:opacity-75"> Política de privacidad </a>
                        </li>

                        <li>
                            <a href="#" class="text-gray-500 transition hover:opacity-75"> Cookies </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const suscribir = () => {
    if (email.value.trim() === '') {
        alert('Por favor ingresa un correo válido.')
        return
    }
    console.log('Correo registrado:', email.value)
    // Aquí puedes enviar el correo a un servidor, API, etc.
}
</script>