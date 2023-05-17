import {
  addDoc,
  collection,
  doc,
  getDocs,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/clientApp";

const getHouses = async () => {
  const colRef = collection(db, "houses");
  const ref = await getDocs(colRef);
  let houses: any = [];
  ref.docs.forEach(doc => houses.push({ ...doc.data(), id: doc.id }));
  return houses;
};
const verifyVehicleFromDB = async (gaddi: string) => {
  const colRef = collection(db, "houses");
  const ref = await getDocs(colRef);
  let houses: any = [];
  ref.docs.forEach(doc => houses.push({ ...doc.data(), id: doc.id }));
  let foundHouse;
  houses.forEach((house: any) => {
    house.vehicles.forEach((vehicle: any) => {
      if (vehicle.numberplate.toLowerCase() === gaddi.toLowerCase()) {
        foundHouse = house;
      }
    });
  });
  return foundHouse;
};
export { getHouses, verifyVehicleFromDB };
