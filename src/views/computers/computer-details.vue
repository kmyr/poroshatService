<template>
  <div class="container" style="padding-top:10px">
    <button
      @click="goBack('/computers')"
      class="btn btn-outline-danger"
      style="margin-bottom:10px"
    >BACK</button>
    <ul class="list-group">
      <li class="list-group-item active">{{showingComputer.deviceName}}</li>
      <li class="list-group-item">Device Type: {{showingComputer.deviceType}}</li>
      <li class="list-group-item">Motherboard: {{showingComputer.motherboard}}</li>
      <li class="list-group-item">Ram: {{showingComputer.ram}}G</li>
      <li class="list-group-item">Storage: {{showingComputer.storage}}G</li>
      <li class="list-group-item">CPU: {{showingComputer.cpu}}</li>
      <li class="list-group-item">Graphic: {{showingComputer.graphic}}</li>
      <li class="list-group-item">Display: {{showingComputer.display}}</li>
    </ul>
  </div>
</template>
<script>
import getData from "../../actions/getData";
export default {
  data() {
    return {
      computersList: [],
      showingComputer: {}
    };
  },
  mixins: [getData],
  created() {
    this.getData("savedComputersInfo", this.computersList);
  },

  methods: {
    goBack(target) {
      this.$router.push(target);
    }
  },
  watch: {
    computersList: function() {
      const currentComputerId = this.$route.params.id;

      for (let i = 0; i < this.computersList.length; i++) {
        const currentComputer = this.computersList[i];

        if (currentComputer._ID == currentComputerId) {
          this.showingComputer = currentComputer;
        }
      }
    }
  }
};
</script>