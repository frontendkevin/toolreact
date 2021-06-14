import createDOMElement from './createDOMElement'
import mountElement from './mountElement'
import updateNodeElement from './updateNodeElement'
import updateTextNode from './updateTextNode'
export default function diff(virtualDOM,container,oldDOM) {
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
    // 旧节点不存在
    if(!oldDOM){
        mountElement(virtualDOM,container)
    }else if(oldVirtualDOM.type !== virtualDOM.type && typeof virtualDOM.type !== 'function'){
        // 节点type不同 并且不是组件
        const newElement = createDOMElement(virtualDOM)
        oldDOM.parentNode.replaceChild(newElement,oldDOM)
    }else if( oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type){
        if(virtualDOM.type==='text'){
            // 更新文本
            updateTextNode(virtualDOM,oldVirtualDOM,oldDOM)
        }else{
            // 更新元素属性
            updateNodeElement(oldDOM,virtualDOM,oldVirtualDOM)
        }

        virtualDOM.children.forEach((child,i)=>{
            diff(child,oldDOM,oldDOM.childNodes[i])
        })
    }
    
}