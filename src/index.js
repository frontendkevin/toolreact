import TinyReact from "./TinyReact"



const virtualDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段内容</span>
    <button onClick={() => alert("你好")}>点击我</button>
    <h4>普通节点类型不同</h4>
    <h3>这个将会被删除</h3>
    2, 3
    <input type="text" value="13" />
  </div>
)

const modifyDOM = (
  <div className="container">
    <h1>你好 Tiny React</h1>
    <h2 data-test="test123">(编码必杀技)</h2>
    <div>
      嵌套1 <div>嵌套 1.1</div>
    </div>
    <h3>(观察: 这个将会被改变)</h3>
    {2 == 1 && <div>如果2和1相等渲染当前内容</div>}
    {2 == 2 && <div>2</div>}
    <span>这是一段修改过的内容</span>
    <button onClick={() => alert("你好!!!")}>点击我</button>
    <h5>普通节点类型不同</h5>
  2, 3
    <input type="text" value="13" />
  </div>
)

function Demo(props) {
  return <span> {props.title} demo</span>
}

function Heart() {
  return <Demo title="hello" />
}

class Alert extends TinyReact.Component {
  constructor(props) {
    super(props)
    this.state= {
      title:'title'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({title:'changed title'})
  }
  render() {
    return (
      <div>
        <span>{this.state.title}</span>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}

function NewComponent() {
  return <span>new compoent</span>
}

const root = document.getElementById('root')

TinyReact.render(<Alert/>, root)

setTimeout(()=>{
  TinyReact.render(<NewComponent/>,root)
},2000)




