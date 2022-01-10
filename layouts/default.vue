<template>
  <div>
    <!-- Todo: fix SSR hydration issue and remove client-only wrapper -->
    <client-only>
      <slot />
    </client-only>
  </div>
</template>