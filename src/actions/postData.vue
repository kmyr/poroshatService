<script>
import db from "../datastore/firebaseInit";
export default {
  methods: {
    postData(document, obj) {
      db.collection(document)
        .add(obj)
        .catch(error => console.log(error));
    }
  }
};
</script>