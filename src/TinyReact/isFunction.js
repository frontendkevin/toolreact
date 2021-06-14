export default function isFunction(virtualDOM) {
    // 组件的type是函数
    return virtualDOM.type && typeof virtualDOM.type === 'function'
}