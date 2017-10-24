// #IMPORT
// Components from dependencies
// Components in project
import LayoutMain from '../components/layouts/LayoutMain'

// #SCOPE COMPONENTS
const Content = (props) => (
    <div>
        <h1>{props.url.query.title}</h1>
        <p>This is the blog post content.</p>
    </div>
)

// #EXPORT
export default (props) => (
    <LayoutMain>
        <Content url={props.url} />
    </LayoutMain>
)
