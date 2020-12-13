export interface RankTopResponse {
    index: number,
    id: number,
    url: string,
    name: string,
    actors: string,
    time: string,
    rank: number
}

export interface RankFollowResponse {
    index: number,
    id: number,
    url: string,
    name: string,
    actors: string,
    time: string,
    follow: number
}