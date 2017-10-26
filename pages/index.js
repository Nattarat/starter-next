// #IMPORT
// Components from dependencies
// Components in project
import LayoutMain from '../components/layouts/LayoutMain'
import Link from 'next/link'

// #SCOPE COMPONENTS
const PostLink = (props) => (
    <li>
        <Link as={`/posts/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

// #EXPORT
export default () => (
    <LayoutMain>
       <p>My Blog</p>
       <ul>
           <PostLink id="home-page" title="Blog 1: Home page" />
           <PostLink id="about-page" title="Blog 2: About page" />
           <PostLink id="contact-page" title="Blog 3: Contact page" />
       </ul>
    </LayoutMain>
)
