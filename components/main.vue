<template>
  <div>
    <div class="h-24 bg-gray-100 border border-gray-300 shadow p-1">MAIN</div>
    <div class="grid grid-cols-3 gap-4">
      <div class="h-24 bg-gray-100 border border-gray-300 shadow p-1">
        <ChildOfSiblingOne />
      </div>
      <div class="h-24 bg-gray-100 border border-gray-300 shadow p-1">
        Sibling 2
      </div>
      <div class="h-24 bg-gray-100 border border-gray-300 shadow p-1">
        Sibling 3
      </div>
    </div>
  </div>
</template>
<script>
import ChildOfSiblingOne from './MainSibling/ChildOfSiblingOne'
export default {
  components: {
    ChildOfSiblingOne,
  },
}
</script>
