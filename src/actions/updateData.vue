<script>
import db from "../datastore/firebaseInit";
export default {
  methods: {
    updateData(document, obj, reloadPage) {
      db.collection(document)
        .doc(obj._ID)
        .update(obj)
        .then(() => {
          reloadPage ? location.reload() : "";
        });
    },
  },
};
</script>
