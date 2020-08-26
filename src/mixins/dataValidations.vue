<script>
import $ from "jquery";
export default {
  data() {
    return {};
  },
  methods: {
    detectEmptyData() {
      let emptyInputs = 0;
      let emptySelects = 0;
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
      $("select[name='required']").each(function() {
        emptySelects++;
        const thisElement = $(this).children(":selected");

        if (thisElement.val() == undefined) {
          $(this).addClass("is-invalid");
        } else if (thisElement.val() !== undefined) {
          emptySelects--;

          $(this).removeClass("is-invalid");
        }
      });
      if (emptyInputs == 0 && emptySelects == 0) {
        return true;
      }
    }
  }
};
</script>