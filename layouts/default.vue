<template>
  <div class="bg-secondary min-h-screen h-full">
    <NavBar />
    <!-- Todo: fix SSR hydration issue and remove client-only wrapper -->
    <client-only>
      <slot />
    </client-only>
  </div>
</template>