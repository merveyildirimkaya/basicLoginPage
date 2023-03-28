export interface signinObj {
    email: string,
    password: string,
    verify_email: boolean,
    verify_phone: boolean
}

export interface HomeScreenRouteParams {
    email: string,
}