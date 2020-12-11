//电影海报数据结构
export interface movieP {
    movieId: string,
    moviePhoto: string
}

//主页热映电影数据结构
export interface movieHot {
    movieId: string,
    picture: string,
    name: string,
    score: number
}