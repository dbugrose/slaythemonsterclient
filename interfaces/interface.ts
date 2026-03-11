export interface BlogItem {
    id: number
    userId: number
    publisherName: string
    title: string
    image: string
    description: string
    date: string
    category: string
    isPublished: boolean
    isDeleted: boolean
}

export interface Token {
    token: string
}

export interface UserData {
    id: number
    username: string
}

export interface UserInfo {
    username: string
    password: string
}