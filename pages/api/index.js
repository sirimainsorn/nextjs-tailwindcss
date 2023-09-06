import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const axiosService = axios.create({
  baseURL: '' /* baseAPI */,
})

export const headers = (enableToken) => {
  if (enableToken) {
    return {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: typeof window !== 'undefined' && cookies.get('token'),
    }
  } else {
    return {
      'Content-Type': 'application/json',
    }
  }
}

export const get = (url, options = {}, enableToken = true) => {
  return new Promise(async (resolve, reject) => {
    return await axiosService({
      method: 'GET',
      url: url,
      headers: headers(enableToken),
      ...options,
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

export const post = (url, options = {}, enableToken = true) => {
  return new Promise(async (resolve, reject) => {
    return await axiosService({
      method: 'POST',
      url: url,
      headers: headers(enableToken),
      ...options,
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

export const put = (url, options = {}, enableToken = true) => {
  return new Promise(async (resolve, reject) => {
    return await axiosService({
      method: 'PUT',
      url: url,
      headers: headers(enableToken),
      ...options,
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

export const patch = (url, options = {}, enableToken = true) => {
  return new Promise(async (resolve, reject) => {
    return await axiosService({
      method: 'PATCH',
      url: url,
      headers: headers(enableToken),
      ...options,
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}

export const deleteReq = (url, options = {}, enableToken = true) => {
  return new Promise(async (resolve, reject) => {
    return await axiosService({
      method: 'DELETE',
      url: url,
      headers: headers(enableToken),
      ...options,
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error))
  })
}
