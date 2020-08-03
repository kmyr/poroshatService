<script>
import db from "../components/firebaseInit";
export default {
  methods: {
    updateData(obj, document) {
      db.collection(document)
        .where("name", "==", obj.name)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            doc.ref.update(obj).then(() => {
              location.reload();
            });
          });
        });
    }
  }
};
</script>