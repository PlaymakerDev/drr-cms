import React from 'react'

const UploadImage = (props) => {
  const { width = 30, height = 30, fill = 'none' } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill={fill}
      {...props}
    >
      <path d="M23.75 8.75V12.4875C23.75 12.4875 21.2625 12.5 21.25 12.4875V8.75H17.5C17.5 8.75 17.5125 6.2625 17.5 6.25H21.25V2.5H23.75V6.25H27.5V8.75H23.75ZM20 13.75V10H16.25V6.25H6.25C4.875 6.25 3.75 7.375 3.75 8.75V23.75C3.75 25.125 4.875 26.25 6.25 26.25H21.25C22.625 26.25 23.75 25.125 23.75 23.75V13.75H20ZM6.25 23.75L10 18.75L12.5 22.5L16.25 17.5L21.25 23.75H6.25Z" fill="#445292"/>
    </svg>
  )
}

export default React.memo(UploadImage)