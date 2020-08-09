<script>
import db from "../datastore/firebaseInit";
export default {
  methods: {
    updateData(document, obj, targetName) {
      if (targetName == undefined) {
        targetName = obj.name;
      }
      db.collection(document)
        .where("name", "==", targetName)
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