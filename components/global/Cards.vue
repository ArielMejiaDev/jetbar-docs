<template>
<div class="flex flex-col lg:flex-row">

    <div class="text-sm font-semibold flex items-center p-6 shadow rounded bg-gradient-to-r from-yellow-400 to-pink-500 text-white w-full lg:w-1/2 lg:mr-1 hover:shadow-lg my-2">

        <div class="text-white mr-2">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path></svg>
        </div>

        <div>{{ texts[language].first }}</div>

    </div>

    <div class="text-sm font-semibold flex items-center p-6 shadow rounded bg-gradient-to-r from-green-400 to-blue-500 text-white w-full lg:w-1/2 lg:ml-1 hover:shadow-lg my-2">

        <div class="text-white mr-2">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
        </div>

        <div>{{ texts[language].second }}</div>

    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            texts: {
                english: {
                    first: 'Collection of Blade components for Livewire & TALL stack.', 
                    second: 'Collection of VueJS components for InertiaJS & VITL stack.'
                },
                spanish: {
                    first: 'Colección de componentes Blade para usar con Livewire y el stack TALL.', 
                    second: 'Colección de componentes VueJS para usar con InertiaJS y el stack VITL'
                },

            }
        }
    },
    props: {
        language: String
    }
}
</script>