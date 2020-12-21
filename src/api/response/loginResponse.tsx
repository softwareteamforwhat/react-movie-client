export interface loginInfoResponse {
    status: number,
    data: {
        id: string,
        token: string,
        avatar: string
    }
}
