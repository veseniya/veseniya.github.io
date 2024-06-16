<style scoped>
.navbar {
  overflow: hidden;
  position: fixed;
  top: 0;
  background-color: #2feabe;
  width: 100%;
  height: 56px;
  grid-area: nav;
}

.content {
  margin-top: 56px;
  grid-area: content;
}

.wrapper {
  display: grid;
  gap: 2px;
  grid-template-areas:
    "nav"
    "content";
}

@media (min-width: 500px) {

  .navbar {
    height: 96px;
  }

  .content {
    margin-top: 96px;
  }

}
</style>

<template>
  <div class="wrapper">
    <div class="navbar">Header</div>
    <div class="content">
      <slot />
    </div>
  </div>
</template>
