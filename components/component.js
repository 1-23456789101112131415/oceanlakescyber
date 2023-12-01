import React from 'react'

const AppComponent = (props) => {
  return (
    <>
      <div className="app-component-container"></div>
      <style jsx>
        {`
          .app-component-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default AppComponent
