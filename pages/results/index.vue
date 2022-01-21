<template>
    <div class="pt-20 pb-10 px-10 min-h-screen bg-secondary">
        <div class="flex flex-col justify-center overflow-auto">
            <div 
            class="w-full "
            v-for="i in 20" :key="i"
            >
                <nuxt-link to="/block#00000000000005ad9e499c6df18acc5bd308c218d51029ffdb681328ed225c6d">
                    <div class="py-2 px-4 drop-shadow-md bg-white rounded-sm mb-[20px] hover:drop-shadow-lg overflow-auto">
                        <div class="flex justify-between">
                            <div class="mr-8">
                                <span class="text-grey font-semibold text-xs whitespace-nowrap mr-4">HASH:</span>
                                <span class="text-primary text-sm whitespace-nowrap">00000000000005ad9e499c6df18acc5bd308c218d51029ffdb681328ed225c6d</span>
                            </div>
                            <div>
                                <!-- block#/index -->
                                <span class="text-grey font-semibold text-xs whitespace-nowrap">126540321 </span>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div class="flex mr-8">
                                <div class="mr-8">
                                    <span class="text-grey font-semibold text-xs whitespace-nowrap mr-4">TRANSACTION TYPE:</span>
                                    <span class="text-primary text-sm whitespace-nowrap">Smart Contract [Deployment]</span>
                                </div>
                                <div>
                                    <span class="text-grey font-semibold text-xs whitespace-nowrap mr-4">CONTENT TYPE:</span>
                                    <span class="text-primary text-sm whitespace-nowrap">Supply Chain Data</span>
                                </div>
                            </div>
                            <div>
                                <!-- timestamp -->
                                <span class="text-grey font-semibold text-xs whitespace-nowrap">Wed, 05 Jan 2022 21:45:19 GMT </span>
                            </div>
                        </div>
                        <div class="flex justify-start">
                            <div class="mr-8">
                                <span class="text-grey font-semibold text-xs whitespace-nowrap mr-4">FROM:</span>
                                <span class="text-primary text-sm whitespace-nowrap">
                                    Howie [
                                    <span class="text-black">20.00 USD</span>
                                    ]</span>
                            </div>
                            <div>
                                <span class="text-grey font-semibold text-xs whitespace-nowrap mr-4">TO:</span>
                                <span class="text-primary text-sm whitespace-nowrap">
                                    Howie [ 
                                    <span class="text-black">2000.00 HNS</span>
                                        ]
                                    </span>
                            </div>
                        </div>
                    </div>    
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>


</script>