import React from 'react'
import { Loader } from "@mantine/core"

const Button = ({ className, title, loading, ...rest }) => {
  return (
    <button className={`bg-primary font-bold px-3 md:px-6 rounded-r ${className}`} {...rest}>
      {loading ? (<Loader color="gray" size="sm" className="mx-auto" />) : title}
    </button>
  )
}

export default Button