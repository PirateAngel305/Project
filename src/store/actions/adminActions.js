export const adminRole = adminrole => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(adminrole.email, adminrole.password)
      .then(resp => {
        return firestore
          .collection("users")
          .doc(resp.user.uid)
          .set({
            firstName: adminrole.firstName,
            category: adminrole.category,
            initials: adminrole.firstName[0]
          });
      })
      .then(() => {
        dispatch({ type: "ADMIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "ADMIN_ERROR", err });
      });
  };
};
