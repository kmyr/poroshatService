<template>
  <div class="d-flex justify-content-around" style="padding: 10px">
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
</template>
