import db from "../datastore/firebaseInit";
export default {
  name: "dashboard",
  data() {
    return {
      items: [],
    };
  },
  methods: {
    getData(document, arr) {
      db.collection(document)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              
            };
            arr.push(data);
          });
        });
    },
    getCr(document, arr) {
      db.collection(document)
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const data = {
              id: doc.id,
              name: doc.data().name,
              weight: doc.data().weight,
              type: doc.data().type
            };
            arr.push(data);
          });
        });
    }
  }
};