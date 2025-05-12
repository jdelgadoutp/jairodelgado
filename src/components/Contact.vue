<template>
    <!-- Contacto -->
    <section id="contacto" class="py-20 text-white">
        <div
            class="container mx-auto px-6 rounded-lg shadow-sm transition hover:shadow-lg prose dark:shadow-gray-700/25">
            <h2 class="text-3xl font-extrabold text-center mb-12 text-[#2269BA] dark:text-white">Contáctame</h2>

            <div class="max-w-4xl mx-auto p-8 rounded-lg shadow-lg bg-white dark:bg-gray-900">
                <section id="contacto" class="py-14 px-6 text-center">
                    <p class="mb-6 text-gray-600 dark:text-white">¿Tienes un proyecto en mente? Estoy listo para
                        ayudarte.</p>
                    <div class="space-y-2 text-sm">
                        <p>📧 <a href="mailto:engineer@jairodelgado.com"
                                class="text-[#2269BA] hover:underline dark:text-gray-400">engineer@jairodelgado.com</a>
                        </p>
                        <p class="text-[#2269BA] hover:underline dark:text-gray-400">🌐 www.jairodelgado.com</p>
                    </div>
                </section>
                <a :href="`https://api.whatsapp.com/send?phone=573136456892&text=Hola%20Jairo!%20Quiero%20hablar%20contigo%20sobre%20un%20proyecto.`"
                    class="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-50"
                    target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.627 5.373-11.997 
               12-11.997 3.194.001 6.208 1.248 8.477 3.518 2.27 2.271 3.515 5.285 
               3.513 8.478-.003 6.627-5.373 11.997-12 11.997-1.99-.001-3.951-.5-5.688-1.448l-6.312 
               1.561zm6.597-3.807c1.676.995 3.276 1.591 5.392 
               1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 
               0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 
               5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.767.967-.94 
               1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 
               0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 
               2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.227 1.36.195 
                    1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    WhatsApp
                </a>
                <a :href="`https://t.me/delgadojairo`"
                    class="fixed bottom-20 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 z-50"
                    target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 
               12-12S18.628 0 12 0zm5.573 8.625l-1.615 7.612c-.121.545-.438.678-.888.422l-2.455-1.812-1.183 
               1.139c-.131.13-.242.242-.497.242l.178-2.527 4.6-4.148c.2-.178-.044-.278-.31-.1l-5.677 
               3.57-2.442-.763c-.531-.165-.542-.531.11-.787l9.533-3.677c.44-.165.826.1.684.787z" />
                    </svg>
                    Telegram
                </a>
            </div>
        </div>
    </section>

</template>