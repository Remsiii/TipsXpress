"use client"
import cn from "classnames"
import React, { forwardRef, useRef } from "react"

import LoadingDots from "@/components/ui/LoadingDots"

import styles from "./Button.module.css"

const Button = forwardRef((props, buttonRef) => {
  const {
    className,
    variant = "flat",
    children,
    active,
    width,
    loading = false,
    disabled = false,
    style = {},
    Component = "button",
    ...rest
  } = props
  const ref = useRef(null)
  const rootClassName = cn(
    styles.root,
    {
      [styles.slim]: variant === "slim",
      [styles.loading]: loading,
      [styles.disabled]: disabled
    },
    className
  )
  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style
      }}
      {...rest}
    >
      {children}
      {loading && (
        <i className="flex pl-2 m-0">
          <LoadingDots />
        </i>
      )}
    </Component>
  )
})

export default Button
