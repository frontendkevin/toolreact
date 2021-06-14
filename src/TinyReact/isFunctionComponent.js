import isFunction from "./isFunction";

export default  function isFunctionComponent(virtualDOM){
    const type = virtualDOM.type
    // 是组件 并且 没有render方法就是函数组件
    return virtualDOM && isFunction(virtualDOM) &&  !(type && type.prototype.render)
}
