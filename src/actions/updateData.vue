<script>
import axios from "axios";

export default {
  methods: {
    updateData(document, obj) {
      axios
        .patch(`${document}/${obj._id}`, obj)
        .then(res => {
          console.log(res);
          location.reload();
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
