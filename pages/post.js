// #IMPORT
// Components from dependencies
import fetch from 'isomorphic-unfetch'
// Components in project
import LayoutMain from '../components/layouts/LayoutMain'

// #SCOPE COMPONENTS
// const Content = (props) => (
//     <div>
//         <h1>{props.url.query.title}</h1>
//         <p>This is the blog post content.</p>
//     </div>
// )

// #EXPORT
// export default (props) => (
//     <LayoutMain>
//         <Content url={props.url} />
//     </LayoutMain>
// )

// #SCOPE COMPONENTS
const Post = (props) => (
    <LayoutMain>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium} />
    </LayoutMain>
)

// #API
Post.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)

    return { show }
}

// #EXPORT
export default Post
