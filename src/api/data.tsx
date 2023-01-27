import { obj } from "../type/basic";
import restapi from "../restapi"



export const fetchData = () : Promise<obj>  => {
  return restapi.get("/data");
}