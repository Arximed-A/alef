<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
* {
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  font-size: 14px;
  font-weight: 400;
  box-sizing: border-box;
  font-family: "Open Sans", sans-serif;
  color: #333333;
  letter-spacing: 0.04em;
}
a {
  text-decoration: underline;
  color: #333333;
  &:hover {
    text-decoration: none;
  }
}
li {
  list-style-type: none;
}
</style>
