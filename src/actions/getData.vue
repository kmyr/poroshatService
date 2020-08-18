<script>
import db from "../datastore/firebaseInit";
export default {
  methods: {
    getData(document, arr) {
      db.collection(document)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            console.log();
            const data = { ...doc.data(), _ID: doc.id };
            arr.push(data);
          });
        });
    }
  }
};
</script>