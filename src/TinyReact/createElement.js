export default function createElement(type, props, ...children) {

  const childElements = [].concat([...children]).reduce((prev, cur) => {
    if (cur !== true && cur !== false && cur !== null && cur !== undefined) {
      if (cur instanceof Object) {
        prev.push(cur)
      } else {
        prev.push(createElement('text', { textContent: cur }))
      }
    }
    return prev
  }, [])


  return {
    type,
    props: Object.assign({ children: childElements }, props),
    children: childElements
  }
}
