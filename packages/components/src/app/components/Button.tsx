import { ChildrenReactNode } from '../interface/ChildrenReactNode'

export function Button({ children }: ChildrenReactNode) {
  return (
    <div className="">
      <button className="rounded-lg bg-purple-500 px-8 py-3 text-xl font-bold text-gray-50">
        {children}
      </button>
    </div>
  )
}
