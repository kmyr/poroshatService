<script>
import $ from "jquery";
export default {
  data() {
    return {};
  },
  methods: {
    inputValidation(command) {
      if (
        $("input[name='lastName']").val() == "" ||
        $("input[name='fullname']").val() == "" ||
        $("input[name='fatherName']").val() == "" ||
        $("input[name='gender']").val() == "" ||
        $("input[name='birthdayDate']").val() == "" ||
        $("input[name='role']").val() == "" ||
        $("select[name='employmentPlace']").val() == "" ||
        $("input[name='idCard']").val() == "" ||
        $("input[name='idNumber']").val() == "" ||
        $("select[name='education']").val() == "" ||
        $("select[name='department']").val() == "" ||
        $("input[name='address']").val() == ""
      ) {
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
        if (command == "newWorker") {
          this.postData("savedWorkers", this.prepareWorker, true);
        } else if (command == "updateWorker") {
          this.updateData("savedWorkers", this.prepareWorker);
        }
      }
    }
  }
};
</script>