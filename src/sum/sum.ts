export const sum = (a: number, b: number) => {
    if (a === 0) {
        return b
    }

    if (b === 0) {
        return a
    }

    return a + b
}

type optional<Type> = {
    [Property in keyof Type]+?: Type[Property]
}

type Movie = {
    name: string
    lengthInMinutes: number
    description: string
}

type mutableMovie = optional<Movie>

const movie: Movie = {
    name: 'Inception',
    lengthInMinutes: 120,
    description: 'A movie about dreams'
}

console.log(movie.director) // 120

// will equal to
// type mutableMovie = {
//     name?: string
//     lengthInMinutes?: string
//}