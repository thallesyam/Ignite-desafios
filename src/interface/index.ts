import React from 'react'

export interface FoodInterface {
  id: number
  price: number
  image: string
  name: string
  description: string
  available: boolean
}

export interface FoodProps {
  food: FoodInterface
  handleEditFood: (food: FoodInterface) => void
  handleDelete: (id: number) => void
}

export interface Headerinterface {
  openModal: () => void
}

export interface InputInterface {
  name?: any
  icon?: any
  placeholder?: string
}

export interface Modalinterface {
  children: React.ReactNode
  isOpen: boolean
  setIsOpen: () => void
}

export interface ModalAddFoodInterface {
  setIsOpen: () => void
  handleAddFood: (data: any) => void
  isOpen: boolean
}

export interface ModalEditInterface {
  isOpen: boolean
  setIsOpen: () => void
  editingFood: any
  handleUpdateFood: (data: FormData) => void
}
