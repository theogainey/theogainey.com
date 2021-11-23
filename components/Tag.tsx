import Link from 'next/link'

const Tag = ({name, color}) => {
  return (
    <div className="pr-2 text-gray-400">
      <p >{name}</p>
    </div>
  )
}

export default Tag