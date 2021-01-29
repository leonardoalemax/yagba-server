import React from 'react'

const DefaultLayout = ({ title, children }) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

export default DefaultLayout