const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


const getType = o => {
    let _t
    return ((_t = typeof (o)) == "object" ? o == null && "null" || Object.prototype.toString.call(o).slice(8, -1) : _t).toLowerCase()
  }
const deepCopy = (source) => {
  let destination = getType(source) == "array" ? [] : {}
  for (var p in source) {
    if (!source || !source.hasOwnProperty(p)) continue
    if (getType(source[p]) == "array" || getType(source[p]) == "object") {
      destination[p] = getType(source[p]) == "array" ? [] : {};
      destination[p] = deepCopy(source[p]);        //递归调用在这里
    } else {
      destination[p] = source[p];
    }
  }
  return destination
}
module.exports = {
  formatTime: formatTime,
  deepCopy
}
