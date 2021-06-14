import mountElement from './mountElement'
import updateTextNode from './updateTextNode'
export default function diff(virtualDOM,container,oldDOM) {
    const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
    // 旧节点不存在
    if(!oldDOM){
         mountElement(virtualDOM,container)
    }else if( oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type){
        if(virtualDOM.type==='text'){
            // 更新文本
            updateTextNode(virtualDOM,oldVirtualDOM,oldDOM)
        }else{
            // 更新属性
        }

        virtualDOM.children.forEach((child,i)=>{
            diff(child,oldDOM,oldDOM.childNodes[i])
        })
    }
    
}