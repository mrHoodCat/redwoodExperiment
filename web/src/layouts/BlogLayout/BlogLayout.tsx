import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <header className="relative flex items-center justify-between bg-blue-700 py-4 px-8 text-white">
        <div className="flex-between">
          <h1 className="text-5x1 font-semibold tracking-tight">
            <Link
              className="text-blue-400 transition duration-100 hover:text-blue-100"
              to={routes.home()}
            >
              Project Athena
            </Link>
          </h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.contact()}>Contact</Link>
            </li>
          </ul>
        </nav>
        {isAuthenticated ? (
          <div>
            <span className="absolute bottom-1 right-0 mr-12 text-xs text-blue-300">
              Logged in as {currentUser.email}
            </span>{' '}
            <button type="button" onClick={logOut}>
              Logout
            </button>
          </div>
        ) : (
          <Link to={routes.login()}>Login</Link>
        )}
      </header>
      <main className="max-w-4x1 mx-auto rounded-b bg-white p-12 shadow">
        {children}
      </main>
    </>
  )
}

export default BlogLayout
