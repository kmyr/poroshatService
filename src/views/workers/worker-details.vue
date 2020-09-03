<template>
  <div>
    <h3 class="center-text" id="worker-name">{{showingWorker.firstName}} {{showingWorker.lastName}}</h3>
    <hr />
    <div>
      <div>
        <p>Upload an image to Firebase:</p>
        <input type="file" @change="previewImage" accept="image/*" />
      </div>
      <div>
        <p>
          Progress: {{uploadValue.toFixed()+"%"}}
          <progress
            id="progress"
            :value="uploadValue"
            max="100"
          ></progress>
        </p>
      </div>
      <div v-if="imageData!=null">
        <img class="preview" :src="picture" />
        <br />
        <button @click="onUpload">Upload</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import getData from "../../actions/getData";
export default {
  data() {
    return {
      workersList: [],
      showingWorker: {},
      imageData: null,
      picture: null,
      uploadValue: 0
    };
  },

  mixins: [getData],

  created() {
    this.getDocument("savedWorkers", this.$route.params.id, this.showingWorker);
  },

  methods: {
    previewImage(event) {
      this.uploadValue = 0;
      this.picture = null;
      this.imageData = event.target.files[0];
    },
    onUpload() {
      this.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        snapshot => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        error => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then(url => {
            this.picture = url;
          });
        }
      );
    }
  },
  watch: {
    workersList: function() {
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