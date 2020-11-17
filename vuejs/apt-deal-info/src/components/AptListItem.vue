<template>
  <div
    style="margin: 10px"
    @click="selectApt"
    @mouseover="bgColorChange(true)"
    @mouseout="bgColorChange(false)"
    :class="{ 'mouse-over-bgcolor': isColor }"
  >
    <img src="@/assets/apt.png" class="img-list" alt="" />[{{ apt.일련번호 }}]
    {{ apt.아파트 }}
  </div>
</template>

<script>
export default {
  name: "AptListItem",
  data() {
    return {
      isColor: false,
    };
  },
  props: {
    apt: Object,
  },
  methods: {
    selectApt: function () {
      this.$emit("select-apt", this.apt);
    },
    bgColorChange(flag) {
      this.isColor = flag;
    },
  },
};
</script>

<style>
.img-list {
  width: 50px;
}
.mouse-over-bgcolor {
  background-color: aqua;
  font-size: 13pt;
}
</style>
