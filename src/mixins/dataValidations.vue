<script>
import $ from "jquery";
export default {
  data() {
    return {
      selectedDepartment: []
    };
  },
  methods: {
    inputValidation(command) {
      if (command == "newWorker") {
        this.postData("savedWorkers", this.prepareWorker, true);
      } else if (command == "updateWorker") {
        this.updateData("savedWorkers", this.prepareWorker);
      }
    },
    detectEmptyData() {
      let mountOfInputs = 0;
      $("input[name='required']").each(() => {
        mountOfInputs++;
      });
      $("input[name='required']").each(() => {
        if ($(this).val() == "") {
          $("input,select")
            .filter(function() {
              return this.value == "";
            })
            .addClass("is-invalid");
          $("input,select")
            .filter(function() {
              return this.value !== "";
            })
            .removeClass("is-invalid");
        } else {
          mountOfInputs--;
          console.log();
        }
      });
    }
  }
};
</script>