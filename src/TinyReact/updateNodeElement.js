export default function updateNodeElement(element,virtualDOM) {

    // 节点属性
    const newProps = virtualDOM.props

    Object.keys(newProps).forEach(propName=>{
        // 获取属性值
        const propValue = newProps[propName]

        if(propName.slice(0,2)==='on'){
            // 事件名
            const eventName = propName.toLowerCase().slice(2)
            element.addEventListener(eventName,propValue)
        }else if(propName === 'value' || propName === 'checked'){
            element[propName] = propValue
        }else if(propName !== 'children'){
            if(propName === 'className'){
                element.setAttribute('class',propValue)
            }else{
                element.setAttribute(propName,propValue)
            }
        }
    })
    
}