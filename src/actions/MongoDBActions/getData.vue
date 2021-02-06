<script>
import axios from "axios";
export default {
  data() {
    return {
      obj: {}
    };
  },
  methods: {
    getData(document, arr) {
      axios
        .get(`${document}`)
        .then(res => res.data.map(item => arr.push(item)));
    },
    getDocument(document, docId) {
      axios.get(`${document}/${docId}`)
      .then(res => {
        this.obj = res.data
      });
    }
  }
};
</script>
