
import createDOMElement from './createDOMElement'

export default function mountNativeElement(virtualDOM,container) {

    let newElement = createDOMElement(virtualDOM)
    // 将转化后的dom对象放进页面中去
    container.appendChild(newElement)

    let component = virtualDOM.component

    if(component){
        component.setDOM(newElement)
    }
}