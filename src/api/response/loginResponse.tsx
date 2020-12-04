export interface loginInfoResponse {
    status: number,
    data: {
        _id: string,
        token: string,
        avatar: string
    }
}