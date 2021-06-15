
import createDOMElement from './createDOMElement'
import unmountNode from './unmountNode'

export default function mountNativeElement(virtualDOM, container, oldDOM) {
    if (oldDOM) {
        // 如果旧的dom存在 就删除
        unmountNode(oldDOM)
    }
    let newElement = createDOMElement(virtualDOM)
    // 将转化后的dom对象放进页面中去
    container.appendChild(newElement)

    let component = virtualDOM.component

    if (component) {
        component.setDOM(newElement)
    }
}