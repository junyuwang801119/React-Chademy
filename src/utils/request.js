// https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/request.js

import axios from 'axios'
// import { message } from 'antd'

// import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: '/api', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent

    const { user = {} } = JSON.parse(localStorage['reduxState'] || '{}')
    const { authToken } = user.users || {}

    if (authToken) {
      config.headers['Authorization'] = `Bearer ${authToken}`
    }
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
// 伺服器回傳後的攔截器
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    console.log(
      '%c INFO %cresponse.data',
      'color: #0092FA; font-weight: bold; ',
      'color: #fff; background: #0092FA; font-weight: bold; padding: 5px; border-radius: 3px',
      response.data
    )

    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code) {
      /**
       * example
       {
          code: 999
          success: false,
          msg: '時間過長，請重新登入',
          data: null,
        }
       */
      // message.error((res && res.message) || 'Error')

      if (res.code === 999) {
        // to re-login
        // message.error(res.msg)
        // MessageBox.confirm(
        //   'You have been logged out, you can cancel to stay on this page, or log in again',
        //   'Confirm logout',
        //   {
        //     confirmButtonText: 'Re-Login',
        //     cancelButtonText: 'Cancel',
        //     type: 'warning',
        //   }
        // ).then(() => {
        //   store.dispatch('user/resetToken').then(() => {
        //     location.reload()
        //   })
        // })
      }
      return Promise.reject(res.message || 'Error')
    } else {
      return res
    }
  },
  (error) => {
    console.log(
      '%c err: ',
      'background: red; color: white; font-weight: bolder;',
      error
    )

    // message.error(error.message)
    return Promise.reject(error)
  }
)

export default service
