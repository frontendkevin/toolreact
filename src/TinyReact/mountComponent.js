import isFunction from "./isFunction";
import isFunctionComponent from "./isFunctionComponent";
import mountNativeElement from "./mountNativeElement";


function buildFunctionComponent(virtualDOM) {
    // 函数式组件的type就是函数本身
    // props就是函数的参数
    // 所以 type(props) 没毛病
    return virtualDOM.type(virtualDOM.props || {})
}

function buildClassComponent(virtualDOM) {
    const component = new virtualDOM.type(virtualDOM.props)
    return component.render()
}

export default function mountComponent(virtualDOM,container) {
    let nextVirtualDOM = null 
    if(isFunctionComponent(virtualDOM)){
        // function component
        nextVirtualDOM = buildFunctionComponent(virtualDOM)
    }else{
        // class component
        nextVirtualDOM = buildClassComponent(virtualDOM)
    }
    if(isFunction(nextVirtualDOM)){
        mountComponent(nextVirtualDOM,container)
    }else{
        mountNativeElement(nextVirtualDOM,container)
    }
    
}


