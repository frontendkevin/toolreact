import mountElement from "./mountElement"
import { updateComponent } from "./updateComponent"

function isSameComponent(virtualDOM, oldComponent) {
    // 判断是否是同一个组件
    return oldComponent && virtualDOM.type === oldComponent.contructor
}


export default function diffComponent(
    virtualDOM,
    oldComponent,
    oldDOM,
    container
) {

    if (isSameComponent(virtualDOM, oldComponent)) {
        // 同一组件
        updateComponent(
            virtualDOM,
            oldComponent,
            oldDOM,
            container
        )
    } else {
        // 不是同一个组件
        mountElement(virtualDOM, container, oldDOM)
    }

}