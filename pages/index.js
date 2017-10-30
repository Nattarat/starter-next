// #IMPORT
// Components from dependencies
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
// Components in project
import LayoutMain from '../components/layouts/LayoutMain'

// #SCOPE COMPONENTS
// const PostLink = (props) => (
//     <li>
//         <Link as={`/posts/${props.id}`} href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// )

// #EXPORT
// export default () => (
//     <LayoutMain>
//        <p>My Blog</p>
//        <ul>
//            <PostLink id="home-page" title="Blog 1: Home page" />
//            <PostLink id="about-page" title="Blog 2: About page" />
//            <PostLink id="contact-page" title="Blog 3: Contact page" />
//        </ul>
//     </LayoutMain>
// )

// #SCOPE COMPONENTS
const Index = (props) => (
    <LayoutMain>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(({ show }) => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </LayoutMain>
)

// #API
Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    return {
        shows: data
    }
}

// #EXPORT
export default Index
