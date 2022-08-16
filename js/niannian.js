//拼接字符串的函数
function resolveData(data) {
    let arr = []
    for (let k in data) {
        let str = k + '=' + data[k]
        arr.push(str)
    }
    return arr.join('&')
}

//封装自己的ajax函数
function niuwa(options) {
    let xhr = new XMLHttpRequest()

    let qs = resolveData(options.data)

    if(options.method.toUpperCase()==='GET'){
        //发起get请求
        xhr.open(options.method,options.url+'?'+qs)
        xhr.send()
    }else if(options.method.toUpperCase()==='POST'){
        //发起post请求
        xhr.open(options.method,options.url)
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        xhr.send(qs)
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 & xhr.status === 200) {
            let result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}
