import { atom } from "recoil";



export const isShowVidewState = atom<boolean>({
  key: 'isShowVidewState',
  default: false
})

export const isClickState = atom<boolean>({
  key: 'isClickState',
  default: false,
})