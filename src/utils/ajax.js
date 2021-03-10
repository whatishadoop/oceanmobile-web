function interceptor(Axios) {
  Axios.interceptors.request.use(function(request) {
    // 对每个ajax请求添加随机数参数，防止请求只读缓存，后期从后台读取数据时开启，现在mock关闭
      /* let qurl = request.url
      if (qurl.indexOf('?') === -1) {
        qurl += '?'
      } else {
        qurl += '&'
      }
      qurl += ('r=' + (new Date().getTime()))
      request.url = encodeURI(qurl)
      if (process.env.NODE_ENV === 'development') {
        console.log('development')
      } else if (process.env.NODE_ENV === 'production') {
        console.log('production')
      } */
      return request
    }, function(error) {
      // 对响应错误做处理
      return Promise.reject(error)
    }
  )

  Axios.interceptors.response.use(function(response) {
    if (response.status === 401) {
      // sessionStorage.clear();
      // window.location.href = '/'
    }
    // 对响应数据做处理
    return response
  }, function(error) {
    // 对响应错误做处理
    if (error.response && error.response.status === 401) {
      // sessionStorage.clear();
      //  window.location.href = '/'
    }
    return Promise.reject(error)
  })
}

export { interceptor }
