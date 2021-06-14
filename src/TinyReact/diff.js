import mountElement from './mountElement'

export default function diff(virtualDOM,container,oldDOM) {
    // 旧节点不存在
    if(!oldDOM){
         mountElement(virtualDOM,container)
    }
    
}