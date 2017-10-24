// #IMPORT
// Components from dependencies
import Link from 'next/link'
// Components in project

const Header = () => (
    <div>
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/about">
            <a>About</a>
        </Link>
    </div>
)

// #EXPORT
export default Header
