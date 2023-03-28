import axios from "axios"
import { signinObj } from "../types/types"

const baseUrl = "https://test.glamic.com"

export const login = async (loginCredentials: signinObj) => {

    const response = await axios.post(`${baseUrl}/api/signin`, loginCredentials)

    return response
}