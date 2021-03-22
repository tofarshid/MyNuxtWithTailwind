<template>
  <div class="container mx-auto pt-6">
    <h1>Components</h1>
    <!-- GRID -->
    <div class="grid grid-cols-3 gap-4">
      <div class="h-24 bg-gray-100 border border-gray-300 shadow p-1">
        <ipsum />
      </div>
      <div class="h-24 bg-gray-100 border border-gray-300 shadow p-1"></div>
      <div class="h-24 bg-gray-100 border border-gray-300 shadow p-1"></div>
      <div class="h-24 bg-gray-100 border border-gray-300 shadow p-1"></div>
      <div class="h-24 bg-gray-100 border border-gray-300 shadow p-1"></div>
    </div>

    <ul>
      <li><p>B. Ipsum with skeleton loading</p></li>
      <li><p>C. Parent->Child</p></li>
      <li><p>D. Parent->Child->nth Child</p></li>
      <li><p>E. Fetch API..</p></li>
    </ul>
  </div>
</template>

<script>
import Ipsum from '../components/ipsum.vue'
export default {
  components: {
    Ipsum,
  },
}
</script>
