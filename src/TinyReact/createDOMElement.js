import mountElement from './mountElement'
import updateNodeElement from './updateNodeElement'

export default function createDOMElement(virtualDOM) {
    let newElement  = null 

    if(virtualDOM.type === 'text'){
        // 文本节点
        newElement = document.createTextNode(virtualDOM.props.textContent)
    }else{
        // 元素节点
        newElement = document.createElement(virtualDOM.type)
        // 给节点添加属性
        updateNodeElement(newElement,virtualDOM)
    }

    // 递归创建子节点
    virtualDOM.children.forEach(child=>{
        mountElement(child,newElement)
    })


    return newElement
}