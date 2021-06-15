import isFunction from './isFunction'
import mountComponent from './mountComponent'
import mountNativeElement from './mountNativeElement'


export default function mountElement(virtualDOM, container,oldDOM) {
    if (isFunction(virtualDOM)) {
        // Component
        mountComponent(virtualDOM,container,oldDOM)  
    } else {
        // nativeElement
        mountNativeElement(virtualDOM, container,oldDOM)
    }
}


