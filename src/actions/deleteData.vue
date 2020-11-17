<script>
import axios from "axios";

export default {
  methods: {
    deleteData(document, obj) {
      axios
        .delete(`${document}/${obj._id}`, obj)
        .then(res => {
          console.log(res);
          location.reload();
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
