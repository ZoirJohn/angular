export interface ICar {
	name: string
	model: string
	year: number
	id: string
	preview: string
}

export interface ICarState {
	cars: ICar[]
	loading: boolean,
	error: any
}