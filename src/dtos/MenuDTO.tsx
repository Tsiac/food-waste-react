export interface MenuDTO {
    id: any,
    username: string,
    name: string,
    isComplete: boolean,
    isMeat: boolean,
    isVeg: boolean,
    isFish: boolean,
    maxAttendees: number,
    attendees: string[],
    dishes: DishDTO[],
    comments: Comment[],
    dateString: string
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

export interface Ingredient2DTO {
    id: string,
    name: string,
    quantity: number,
    counter: string,
    currentCounterIndex: number
}

export interface CommentDTO {
    id: number,
    name: string,
    comment: string,
    dateCreated: string
}