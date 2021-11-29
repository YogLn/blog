export const getColor = () => {
  //颜色对象
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return 'rgba(' + r + ',' + g + ',' + b + ',0.8)'
}
