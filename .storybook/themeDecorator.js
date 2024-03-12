// themeDecorator.js
import React from "react"
import { Theme, theme } from "../src/styles/Theme"

const ThemeDecorator = storyFn => (
  <Theme theme={theme}>{storyFn()}</Theme>
)

export default ThemeDecorator