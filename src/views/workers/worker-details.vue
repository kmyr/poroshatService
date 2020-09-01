<template>
  <div>
    <h3>{{showingWorker.firstName}} {{showingWorker.lastName}}</h3>
    <button @click="fetchWorker()"></button>
  </div>
</template>

<script>
import getData from "../../actions/getData";
export default {
  data() {
    return {
      workersList: [],
      showingWorker: {}
    };
  },

  mixins: [getData],

  created() {
    this.getData("savedWorkers", this.workersList);

    this.fetchWorker();
  },

  methods: {
    fetchWorker() {
      const currentWorkerId = this.$route.params.id;

      for (let i = 0; i < this.workersList.length; i++) {
        const currentWorker = this.workersList[i];

        if (currentWorker._ID == currentWorkerId) {
          this.showingWorker = currentWorker;
        }
      }
    }
  }
};
</script>

<style scoped>
@import url("../../assets/style/persons/user-details.css");
</style>