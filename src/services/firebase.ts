import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "configs/firebase";
import { collection, getDocs, getFirestore, limit, query } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export const getTradeJourneyByUser = async (username: string) => {
  const collectionRef = collection(firestore, `journey/${username}/trade`);
  const q = query(collectionRef, limit(20));

  const querySnapshot = await getDocs(q);

  let resp = {};

  querySnapshot.forEach((doc) => {
    resp = {
      ...resp,
      [doc.id]: doc.data(),
    };
  });

  return resp;
};
