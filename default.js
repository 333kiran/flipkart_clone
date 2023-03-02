
import { products } from "./constants/data.js"
import Product from "./model/products.js";

//import { electronics} from './constants/data2.js';
//import Electronics from "./model/electronics-modal.js";

const DefaultData = async () => {
  try{

    // await  Electronics.insertMany(electronics);
        
   //    console.log("data imported sucessfully");

  } catch (error) {
  //  console.log("error while inserting default data",error.message);
  }
}

export default DefaultData;