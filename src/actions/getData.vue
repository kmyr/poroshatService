<script>
import db from "../datastore/firebaseInit";
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    getData(document, arr) {
      db.collection(document)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              name: doc.data().name,
              fatherName: doc.data().fatherName,
              birthdayDate: doc.data().birthdayDate,
              role: doc.data().role,
              employmentPlace: doc.data().employmentPlace,
              idCard: doc.data().idCard,
              education: doc.data().education,
              address: doc.data().address,
              salary: doc.data().salary
            };
            arr.push(data);
          });
        });
    }
  }
};
</script>