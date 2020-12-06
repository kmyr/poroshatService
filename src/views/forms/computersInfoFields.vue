<template>
  <div>
    <form id="workerActionsForm">
      <label>نام دستگاه</label>
      <input
        name="required"
        v-model="prepareInfo.deviceName"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
      />

      <label>نوع دستگاه</label>
      <input
        name="required"
        v-model="prepareInfo.deviceType"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
      />

      <label>Motherboard</label>
      <input
        name="required"
        v-model="prepareInfo.motherboard"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
      />

      <label>Ram</label>
      <select name="required" class="form-control" v-model="prepareInfo.ram">
        <option>1</option>
        <option>2</option>
        <option>4</option>
        <option>6</option>
        <option>8</option>
        <option>10</option>
        <option>12</option>
        <option>14</option>
        <option>16</option>
        <option>18</option>
        <option>20</option>
      </select>

      <label>Storage</label>
      <input
        name="required"
        v-model="prepareInfo.storage"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
      />

      <label>CPU</label>
      <input
        name="required"
        v-model="prepareInfo.cpu"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
      />

      <label>Graphic</label>
      <input
        name="required"
        v-model="prepareInfo.graphic"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
      />

      <label>Display</label>
      <input
        name="required"
        v-model="prepareInfo.display"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
      />

      <label>Device Owner</label>
      <select
        name="required"
        class="form-control"
        v-model="prepareInfo.deviceOwner"
      >
        <option>none</option>
        <option v-for="(worker, i) in workers" :key="i" :value="worker._id">
          {{ `${worker.firstName} ${worker.lastName}` }}
        </option>
      </select>
      <br />

      <label>Username</label>
      <input
        v-model="prepareInfo.deviceUsername"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
      />
      <label>Password</label>
      <input
        v-model="prepareInfo.devicePassword"
        type="text"
        class="form-control"
        style="margin-bottom: 15px"
      />
    </form>
  </div>
</template>
<script>
// import $ from "jquery";
import { formFields } from "../../datastore/globalData";
import postData from "../../actions/postData";
import getData from "../../actions/getData";
import updateData from "../../actions/updateData";
import dataValidate from "../../mixins/dataValidations";
export default {
  data() {
    return {
      prepareInfo: {},
      isEditing: false,
      workers: [],
      deviceOwnerInfo: {},
      lastDeviceOwner: "",
    };
  },
  props: {
    editingComputerInfo: Object,
  },

  mixins: [postData, updateData, getData, dataValidate],

  created() {
    this.getData("employees", this.workers);
    if (this.prepareInfo.deviceOwner !== "none") {
      this.lastDeviceOwner = this.prepareInfo.deviceOwner;
      this.getDocument("/employees", this.prepareInfo.deviceOwner);
    }
  },

  mounted() {
    formFields.$on("newComputerEmit", () => {
      this.inputValidation("newComputer");
    });

    formFields.$on("updateComputerEmit", () => {
      this.inputValidation("updateComputer");
    });
  },

  methods: {
    inputValidation(command) {
      this.detectEmptyData();
      if (this.prepareInfo.deviceOwner !== "none") {
        this.deviceOwnerInfo.workerComputer = this.prepareInfo._id;
        this.updateData("/employees", this.deviceOwnerInfo);
      } else {
        this.deviceOwnerInfo.workerComputer = "";
      }
      if (this.detectEmptyData() == true) {
        if (command == "newComputer") {
          this.postData("computers", this.prepareInfo, true);
        } else if (command == "updateComputer") {
          this.updateData("computers", this.prepareInfo);
        }
      }
    },
  },

  watch: {
    editingComputerInfo: {
      handler(computer) {
        if (computer == null || computer == undefined) {
          this.prepareInfo = {};
          this.isEditing = false;
        } else {
          this.prepareInfo = computer;
          this.isEditing = true;
        }
      },
      immediate: true,
    },
    "prepareInfo.deviceOwner": function () {
      if (this.prepareInfo.deviceOwner !== "none") {
        this.getDocument("/employees", this.prepareInfo.deviceOwner);
      }
      if (this.prepareInfo.deviceOwner == "none") {
        if (this.deviceOwnerInfo.workerComputer == this.prepareInfo._id) {
          this.deviceOwnerInfo.workerComputer = "";
          this.updateData("/employees", this.deviceOwnerInfo);
        }
      }
    },
    obj: function () {
      this.deviceOwnerInfo = this.obj;
    },
    workers: function () {
      this.workers.map((worker, i) => {
        if (
          worker.workerComputer !== "" &&
          this.prepareInfo.deviceOwner !== worker._id
        ) {
          this.workers.splice(i, 1);
        }
      });
    },
  },
};
</script>
