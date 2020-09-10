  <template>
  <div>
    {{ msg }}
    <div v-if="env === 'production'" id="fetched-img">
      <img :src="`${imgUrl}/100/100`" alt="kitten" />
    </div>
    <div v-else id="square">
      <span>Dev mode</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gif",
  data() {
    return {
      env: null,
      imgUrl: null,
    };
  },
  created() {
    this.env = process.env.NODE_ENV;
    fetch("https://placekitten.com/").then((res) => (this.imgUrl = res.url));
  },
};
</script>

<style lang="scss" scoped>
#square {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
}
</style>