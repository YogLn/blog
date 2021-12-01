export const throttle = (fn, delay) => {
  let flag = true
  return function (...args) {
    if (!flag) return
    flag = false
    setTimeout(() => {
      fn.call(this, ...args)
      flag = true
    }, delay)
  }
}

