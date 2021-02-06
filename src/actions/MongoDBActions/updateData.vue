<script>
import axios from "axios";
import { formFields } from "../datastore/globalData";

export default {
  methods: {
    updateData(document, obj, passedID, reload) {
      let targetID = null;
      if (passedID !== undefined) {
        targetID = passedID;
        console.log(targetID);
      } else {
        targetID = obj._id;
      }
      axios
        .patch(`${document}/${targetID}`, obj)
        .then(() => {
          formFields.$emit("closeEditingModal");
          reload !== undefined ? location.reload() : "";
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
