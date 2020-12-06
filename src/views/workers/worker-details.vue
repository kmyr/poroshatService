<template>
  <div>
    <h3 class="center-text" id="worker-name">
      {{ showingWorker.firstName }} {{ showingWorker.lastName }}
    </h3>
    <hr />
    <div>
      <div class="container">
        <div class="input-group">
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              @change="previewImage"
              accept="image/*"
              id="profilePicture"
            />
            <label class="custom-file-label" for="profilePicture"
              >عکس پرسنلی</label
            >
          </div>
          <div v-if="imageData != null" class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="onUpload"
            >
              بارگذاری
            </button>
          </div>
        </div>
        <br />
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            :style="'width:' + uploadValue.toFixed() + '%'"
          ></div>
        </div>
      </div>

      <div></div>
      <div>
        <br />
        <button>Upload</button>
      </div>
    </div>
  </div>
</template>

<script>
import getData from "../../actions/getData";
import postData from "../../actions/postData";
export default {
  data() {
    return {
      workersList: [],
      showingWorker: {},
      imageData: null,
      uploadedImg: null,
      uploadValue: 0
    };
  },

  mixins: [getData, postData],

  created() {
    this.getDocument("computers", this.$route.params.id, this.computersList);
  },

  methods: {},
  watch: {

  }
};
</script>

<style scoped>
@import url("../../assets/style/items/user-details.css");
</style>
