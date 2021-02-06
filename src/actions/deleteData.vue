<script>
import db from "../datastore/firebaseInit";
export default {
  methods: {
    async deleteData(doc, obj) {
      db.collection(doc).doc(obj._ID).delete();
    },
  },
};
</script>
