<template>
  <div id="app">
    <notifications group="eb-notification" position="bottom right" />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name:"ROOT_APP",
};
</script>
