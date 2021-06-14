import createDOMElement from './createDOMElement'
import mountElement from './mountElement'
import unmountNode from './unmountNode'
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
        // 对比子节点
        virtualDOM.children.forEach((child,i)=>{
            diff(child,oldDOM,oldDOM.childNodes[i])
        })
        // 删除节点
        // 获取旧节点
        let oldChildNodes = oldDOM.childNodes
        // 对比新旧节点的数量
        if(oldChildNodes.length > virtualDOM.children.length){
            for(let i = oldChildNodes.length-1;i>virtualDOM.children.length-1;i--){
                unmountNode(oldChildNodes[i])
            }
        }
    }
    
}