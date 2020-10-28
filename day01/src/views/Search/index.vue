<template>
  <div>
    Search <br>
    params参数：{{$route.params.keyword}}
    ----------
    query参数：{{$route.query.keyword1}}
    <br>
    <br>
    
  </div>
</template>

<script>
export default {
  name: "Search",
  
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped></style>
