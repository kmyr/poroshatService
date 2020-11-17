<script>
import axios from "axios";
export default {
  methods: {
    postData(document, obj, reloadPage) {
      axios
        .post(`${document}`, obj)
        .then(res => console.log(res))
        .catch(err => console.log(err));

      if (reloadPage || reloadPage !== undefined) {
        location.reload();
      }
    }
  }
};
</script>
