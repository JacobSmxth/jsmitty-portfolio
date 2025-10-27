export function Skeleton() {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 animate-pulse">
      {/* Header skeleton */}
      <div className="flex items-start gap-3 mb-6">
        <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
        <div className="flex-1">
          <div className="h-7 bg-gray-200 rounded-lg mb-2 w-3/4"></div>
          <div className="w-12 h-1 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      {/* Description skeleton */}
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>

      {/* Language skeleton */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-5 h-5 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-20"></div>
      </div>

      {/* Stats skeleton */}
      <div className="flex items-center gap-4 mb-4">
        <div className="h-4 bg-gray-200 rounded w-16"></div>
        <div className="h-4 bg-gray-200 rounded w-16"></div>
      </div>

      {/* Bottom skeleton */}
      <div className="pt-4 border-t border-gray-100 mt-auto">
        <div className="h-3 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  )
}

