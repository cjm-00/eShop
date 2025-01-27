import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

export const getProducts = async () => {
  const productData = collection(db, "products");
  const snapshot = await getDocs(productData);
  const cleanData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return cleanData;
};
