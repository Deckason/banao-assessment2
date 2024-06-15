import React from 'react'
import { create } from 'zustand'

export const userStore = create((set) => ({
  usersData:null,
  updateUsersData: (user) => set(() => ({user })),

  isLoading:false,
  updateisLoading: (user) => set(() => ({user })),
  
  err:null,
  updateerr: (user) => set(() => ({user })),
  
}))