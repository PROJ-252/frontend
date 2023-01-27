import { selector } from "recoil";
import { fetchData } from "../api/data";
import { obj } from "../type/basic";



export const restData = selector<obj>({
  key: 'restData',
  get: async ({get}) : Promise<obj>  => {
    return fetchData()
  }
})