export interface MenuDTO {
    id: any,
    username: string,
    name: string,
    isComplete: boolean,
    isMeat: boolean,
    isVeg: boolean,
    isFish: boolean,
    maxAttendees: number,
    attendees: string[]
}

export interface DishDTO {
    id: string,
    name: string,
    ingredients: IngredientDTO[]

}

export interface IngredientDTO {
    id: string,
    name: string,
    quantity: string,
    counter: string
}
