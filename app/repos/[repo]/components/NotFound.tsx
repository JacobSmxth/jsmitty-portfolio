import Link from 'next/link'
import { FaExclamationCircle, FaGithub } from 'react-icons/fa'

interface NotFoundProps {
  repoName: string
}

export function NotFound({ repoName }: NotFoundProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-32 px-6 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-red-400 to-pink-500 mb-6">
            <FaExclamationCircle className="text-white text-5xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Repository Not Found
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            The repository <span className="font-mono font-bold text-blue-600">{repoName}</span> could not be found.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/repos"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <FaGithub />
            View All Repositories
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 rounded-xl font-medium border-2 border-gray-200 hover:border-blue-300 transition-all duration-300"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

