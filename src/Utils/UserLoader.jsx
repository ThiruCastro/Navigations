export const userLoader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!res.ok) {
        throw Error('Could not fetch the data')
    }
    const data = await res.json()
    console.log(data)
    return data
}

export const userSingleLoader = async ({params}) => {
    const {id} = params
    const res = await fetch('https://jsonplaceholder.typicode.com/users'+id)
    if (!res.ok) {
        throw Error('Could not fetch the data')
    }
    const data = await res.json()
    console.log(data)
    return data
}