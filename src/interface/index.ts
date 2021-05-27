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
