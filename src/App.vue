<template>
  <div>
    <CxHeader />
    <CxTab />
    <router-view></router-view>
  </div>
</template>

<script>
import CxHeader from '@/components/cx-header/index.vue'
import CxTab from '@/components/cx-tab/index.vue'
export default {
  components: {
    CxHeader,
    CxTab
  }
}
</script>

<style lang="scss" scoped></style>
