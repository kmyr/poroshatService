<script>
import firebase from "firebase";
import db from "../datastore/firebaseInit";
export default {
  methods: {
    postData(document, obj, reloadPage) {
      db.collection(document)
        .add(obj)
        .catch(error => console.log(error))
        .then(() => {
          if (reloadPage) {
            location.reload();
          }
        });
    },
    previewImage(event) {
      this.uploadValue = 0;
      this.uploadedImg = null;
      this.imageData = event.target.files[0];
    },
    onUpload() {
      this.uploadedImg = null;
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
            this.uploadedImg = url;
          });
        }
      );
    }
  }
};
</script>