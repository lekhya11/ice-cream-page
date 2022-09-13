import './App.css'

import {Heading, CustomButton} from './styledComponents'

const App = () => (
  <>
    <Heading>Hello World</Heading>
    <CustomButton type="button" outLine={false}>
      add
    </CustomButton>
    <CustomButton type="button" outLine={true}>
      click
    </CustomButton>
  </>
)

export default App
