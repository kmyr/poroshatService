<template>
  <div>
    <div class="d-flex justify-content-between" style="padding: 10px">
      <ul class="list-group">
        <li
          class="d-flex list-group-item"
          v-for="(contract, i) in convertedSavedData"
          :key="i"
        >
          <h5 @click="openSavedContract(contract)">
            {{ contract.info.firstName }}
            {{ contract.info.lastName }}
          </h5>

          <button
            class="btn btn-danger"
            style="float: right; margin-left: 15px"
            @click="removeSavedContract(i)"
          >
            X
          </button>
        </li>
      </ul>
      <div class="card" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://img.freepik.com/free-vector/two-business-partners-handshaking_74855-6685.jpg?size=626&ext=jpg&ga=GA1.2.477405023.1609372800"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">
            <router-link to="form">قرارداد رسمی</router-link>
          </p>
        </div>
      </div>
      <div class="card" style="width: 18rem">
        <img
          class="card-img-top"
          src="https://img.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg?size=626&ext=jpg"
          alt="Card image cap"
        />
        <div class="card-body">
          <p class="card-text">
            <router-link to="form-temp">قرارداد موقت</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      savedContracts: [],
      convertedSavedData: [],
    };
  },
  created() {
    this.fetchSavedContracts();
  },
  methods: {
    fetchSavedContracts() {
      if (localStorage.savedContracts) {
        this.convertedSavedData = [];
        let stringData = null;
        stringData = localStorage.savedContracts;
        this.savedContracts = JSON.parse(stringData);
        this.savedContracts.map((contract) => {
          let convertingData = JSON.parse(contract);
          contract = convertingData;
          let convertingContract = JSON.parse(contract.info);
          contract.info = convertingContract;
          console.log(contract);
          this.convertedSavedData.push(contract);
        });
      }
    },
    removeSavedContract(index) {
      this.convertedSavedData.splice(index, 1);
      let dataAfterChange = [];
      this.convertedSavedData.map((contract) => {
        let changingContract = contract;
        let changedContractInfo = JSON.stringify(changingContract.info);
        changingContract.info = changedContractInfo;
        dataAfterChange.push(JSON.stringify(changingContract));
      });

      localStorage.setItem("savedContracts", JSON.stringify(dataAfterChange));
      this.fetchSavedContracts();
    },
    openSavedContract(data) {
      if (data.type === "temp") {
        localStorage.setItem(
          "preparingTempContractUserInfo",
          JSON.stringify(data.info)
        );
        this.$router.push("/preview-temp");
      } else {
        localStorage.setItem(
          "preparingContractUserInfo",
          JSON.stringify(data.info)
        );
        this.$router.push("/preview");
      }
    },
  },
};
</script>
