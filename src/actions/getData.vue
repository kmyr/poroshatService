<script>
import db from "../datastore/firebaseInit";
export default {
  data() {
    return {
      showingWorker: {}
    };
  },
  methods: {
    getData(document, arr) {
      db.collection(document)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = { ...doc.data(), _ID: doc.id };
            arr.push(data);
          });
        });
    },
    getDocument(document, docId, object) {
      db.collection(document)
        .doc(docId)
        .get()
        .then(doc => {
          const data = { ...doc.data(), _ID: doc.id };
          object = [data];
          console.log(object);
        });
    }
  }
};
</script>