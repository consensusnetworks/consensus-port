<template>
    <nav 
    class="w-full bg-white p-1 drop-shadow-sm fixed z-10 py-3 px-3"
    >
        <div class="mx-auto h-10 flex justify-between items-center px-2">
            <div class="flex items-center text-primary space-x-6">
                <button 
                class="hover:text-grey btn btn-primary drawer-button"
                @click="toggleDrawer"
                >
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-8 w-8" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor">
                        <path 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="2" 
                        d="M4 6h16M4 12h16M4 18h16" 
                        />
                    </svg>
                </button>
                <a href="/" class="hover:text-grey text-xl font-medium flex items-center">
                    <img src="../assets/images/consensus-logo.png" alt="" class="h-4 mr-2">
                    Consensus Port
                </a>
            </div>
            <div class="hidden sm:block sm:ml-6 w-1/2">
                <div class="flex space-x-1">
                    <input 
                    type="text" 
                    name="block-search" 
                    placeholder="Search by Address / Hash / Block / TLD / Block’s Content Name" 
                    class="w-full border-b-2 border-primary outline-none focus:border-grey, text-primary "
                    >
                    <button class="text-primary hover:text-grey">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor">
                            <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <aside
        class=" h-screen top-0 left-0 w-screen text-center fixed overflow-auto ease-in-out z-30 flex transform transition-all duration-150 "
        :class="drawer ? 'translate-x-0' : '-translate-x-full'" 
        >
            <div 
            class="w-80 bg-white drop-shadow-lg "
            >
                <div class="text-primary text-xl font-medium flex justify-center items-center h-10 py-8" @click="toggleDrawer">
                    <img src="../assets/images/consensus-logo.png" alt="" class="h-4 mr-2">
                    Consensus Port
                </div>
                <hr class="text-secondary">
                <div class="text-primary text-xl font-medium flex justify-center items-center py-6">
                    Sidebar items...
                </div>
            </div>
            <div 
            class="w-screen bg-grey opacity-0"
            v-if="drawer"
            @click="toggleDrawer"
            ></div>
        </aside>
    </nav>
</template>
<script setup>

const drawer = useState('drawer', () => false)
const toggleDrawer = () => {
    drawer.value = !drawer.value
}   

</script>