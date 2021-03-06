import React from "react"
import { render } from "react-dom"
import { matchMedia, MediaProvider } from "../../src"
import viewportListener from "../../src/viewportListener"
import viewportGetter from "../../src/viewportGetter"

import "./index.html"

const Big = () => (
  <div style={{ fontSize: "5rem", color: "blue" }}>
    {"I'm the big component"}
  </div>
)

const Small = () => (
  <div style={{ fontSize: "2rem", color: "red" }}>
    {"I'm the small component"}
  </div>
)

const App = ({ Component }) => (
  <div>
    {Component ? <Component /> : "loading …"}
  </div>
)

const resolveComponents = ({ viewport }, cb) => {
  return {
    Component: viewport.width > 400 ? Big : Small,
  }
}

const WrappedApp = matchMedia(resolveComponents)(App)

render(
  <MediaProvider
    getMedia={viewportGetter}
    listener={viewportListener}>
    <WrappedApp />
  </MediaProvider>,
  document.body.appendChild(document.createElement("div"))
)
