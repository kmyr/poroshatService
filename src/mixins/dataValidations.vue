<script>
import $ from "jquery";
export default {
  data() {
    return {};
  },
  methods: {
    inputValidation(command) {
      this.detectEmptyData();
      if (this.detectEmptyData() == true) {
        if (command == "newWorker") {
          this.postData("savedWorkers", this.prepareWorker, true);
        } else if (command == "updateWorker") {
          this.updateData("savedWorkers", this.prepareWorker);
        }
      }
    },
    detectEmptyData() {
      let emptyInputs = 0;
      $("input[name='required']").each(function() {
        emptyInputs++;
        if ($(this).val() == "") {
          $(this)
            .filter(function() {
              return this.value == "";
            })
            .addClass("is-invalid");
          $(this)
            .filter(function() {
              return this.value !== "";
            })
            .removeClass("is-invalid");
        } else if ($(this).val() !== "") {
          emptyInputs--;

          $(this)
            .filter(function() {
              return this.value !== "";
            })
            .removeClass("is-invalid");
        }
      });
      if (emptyInputs == 0) {
        return true;
      }
    }
  }
};
</script>