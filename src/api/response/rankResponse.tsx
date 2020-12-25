export interface RankTopResponse {
    index: number,
    movieId: number,
    picture: string,
    name: string,
    actors: string,
    time: string,
    rank: number
}

export interface RankFollowResponse {
    index: number,
    movieId: number,
    picture: string,
    name: string,
    actors: string,
    time: string,
    follow: number
}