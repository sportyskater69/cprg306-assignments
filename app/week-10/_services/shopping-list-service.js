import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const items = [];

    const itemsRef = collection(db, "users", userId, "items");

    const itemsSnap = await getDocs(itemsRef);

    itemsSnap.forEach((doc) => {
        const item = {
            id: doc.id,
            ...doc.data()
        }
        items.push(item);
    });

    return items;
}

export async function addItem(userId, item) {
    const itemsRef = collection(db, "users", userId, "items");

    const docRef = await addDoc(itemsRef, item);

    return docRef.id;
}