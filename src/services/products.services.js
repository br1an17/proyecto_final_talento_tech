import db from '../config/firebase.js';
import { collection, getDocs, doc, getDoc, addDoc, deleteDoc } from 'firebase/firestore';

const collectionName = 'products';

export const getAll = async () => {
    const snapshot = await getDocs(collection(db, collectionName));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getById = async (id) => {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
};

export const create = async (product) => {
    const docRef = await addDoc(collection(db, collectionName), product);
    return { id: docRef.id, ...product };
};

export const remove = async (id) => {
    await deleteDoc(doc(db, collectionName, id));
};
