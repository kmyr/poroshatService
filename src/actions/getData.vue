<script>
import db from "../datastore/firebaseInit";
export default {
  methods: {
    getData(document, arr) {
      db.collection(document)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = doc.data();
            arr.push(data);
          });
        });
    }
  }
};
</script>