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

// Sample const object
const sampleConstObject = [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'}
]

// Sample function object (eg. API)
function sampleFunctionObject () {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js'},
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'}
    ]
}

// #SCOPE COMPONENTS
const TemplateLink = ({ show }) => (
    <li key={show.id}>
        <Link as={`/posts/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
        </Link>

        {/* Style in scope can working */}
        <style jsx>{`
            a {
                color: red;
            }
        `}</style>
    </li>
)

const TemplateList = ({ info }) => (
    <li key={info.id}>
        <span>ID: {info.id}, Title: {info.title}</span>

        {/* Style in scope can working */}
        <style jsx>{`
            span {
                color: green;
            }
        `}</style>
    </li>
)

// #COMPLEX COMPONENTS (*Main)
const Index = (props) => (
    <LayoutMain>
        <h1>Batman TV Shows > data from API and using "isomorphic-unfetch"</h1>
        <ul>
            {props.shows.map(({ show }) => (
                <TemplateLink key={show.id} show={show} />
            ))}
        </ul>

        <h1>Sample map data from const</h1>
        <ul>
            {sampleConstObject.map((info) => (
                <TemplateList key={info.id} info={info} />
            ))}
        </ul>

        <h1>Sample map data from function</h1>
        <ul>
            {sampleFunctionObject().map((info) => (
                <TemplateList key={info.id} info={info} />
            ))}
        </ul>

        {/*
            Style out scope can't working
        */}
        <style jsx>{`
            a {
                color: blue;
            }

            span {
                color: purple;
            }
        `}</style>

        {/*
            Global style is effect all components
        */}
        <style jsx global>{`
            li {
                background-color: #eee;
                margin-bottom: 1px;
            }

            .notice {
                color: orange;
            }
        `}</style>
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
