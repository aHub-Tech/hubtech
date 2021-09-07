import axios from 'axios'
import Cookies from 'js-cookie'
import Router from 'next/router'
import errorApi from 'utils/errorApi'

export const baseURL = process.env.NEXT_PUBLIC_API_URL

// export const api = axios.create({ baseURL: baseURL })

export const minutesToExpireCookie = new Date(
  new Date().getTime() + 60 * 60 * 1000
)

export type AsyncProps = {
  email: string
  password: string
}

export const signIn = async ({ email, password }: AsyncProps) => {
  try {
    const { data } = await axios.post(`${baseURL}/auth/signin`, {
      username: email,
      password: password
    })
    axios.defaults.headers.common.Authorization = data.accessToken
    Cookies.set('tokenHubtech', data.accessToken, {
      expires: minutesToExpireCookie
    })
    await Router.replace('/')
  } catch (e) {
    return errorApi(e)
  }
}

export const signOut = async () => {
  try {
    Cookies.remove('tokenHubtech')
    await Router.replace('/signin')
  } catch (e) {
    return 'Desculpe, correu um erro inesperado. Por favor, recarregue a página e tente novamente!'
  }
}

export const signUp = async ({ email, password }: AsyncProps) => {
  try {
    const { data } = await axios.post(`${baseURL}/auth/signup`, {
      username: email,
      password: password
    })
    axios.defaults.headers.common.Authorization = data.accessToken
    Cookies.set('tokenHubtech', data.accessToken, {
      expires: minutesToExpireCookie
    })
    await Router.replace('/')
  } catch (e) {
    return errorApi(e)
  }
}
