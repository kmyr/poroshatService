<script>
import axios from "axios";

export default {
  methods: {
    updateData(document, obj, passedID) {
      let targetID = null;
      if (passedID !== undefined) {
        targetID = passedID;
        console.log(targetID);
      } else {
        targetID = obj._id;
      }
      axios
        .patch(`${document}/${targetID}`, obj)
        .then((res) => {
          console.log(res);
          // location.reload();
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>
