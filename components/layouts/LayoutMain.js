// #IMPORT
// Components from dependencies
// Components in project
import Header from '../../components/Header'

const LayoutMain = (props) => (
    <div>
        <Header />
        <p className="notice">Main layout wrapper is actived 555+</p>
        {props.children}
    </div>
)

// #EXPORT
export default LayoutMain
