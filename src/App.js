import './App.css'

import {
  Heading,
  Card,
  Container,
  CustomButton,
  LogoContainer,
} from './styledComponents'

const App = () => (
  <div className="container">
    <LogoContainer>
      <img
        src="https://img.freepik.com/free-vector/ice-cream-cone-cartoon-icon-illustration-sweet-food-icon-concept-isolated-flat-cartoon-style_138676-2924.jpg?w=740&t=st=1663056402~exp=1663057002~hmac=defde7928b873e4705dda7b6c14e190002a73f0c168a1d1edc00d27bf8fd3d71"
        alt="logo"
        className="logo-image"
      />
      <h1 className="heading">Frozen</h1>
    </LogoContainer>
    <Heading>summer Delight</Heading>
    <Container>
      <img
        src="https://img.freepik.com/free-vector/cute-panda-eating-ice-cream-cartoon-vector-icon-illustration-animal-food-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4131.jpg?w=740&t=st=1663053000~exp=1663053600~hmac=d6727a1990ff2ae8b8f2eaf57db738507ef0b562b85c52876b523d4cc3bfc23d"
        alt="panda"
        className="image"
      />
      <Card>
        <img
          src="https://img.freepik.com/free-photo/chocolate-ice-cream-dessert_144627-8363.jpg?w=1060&t=st=1663055845~exp=1663056445~hmac=b4996667de8c797f981f3bc248b6b6293ea6f5742acaa47515fe04e9d1f7d68a"
          alt="ice"
          className="mini-image"
        />
        <img
          src="https://img.freepik.com/free-photo/coold-sweet-ice-cream-with-chocolate_144627-7294.jpg?w=1060&t=st=1663055897~exp=1663056497~hmac=0126a82c7aa487a6a2730ba268ad2fb53e98eeeb7fa8aac213f48f336bcc4f29"
          alt="ice"
          className="mini-image"
        />
        <img
          src="https://img.freepik.com/free-photo/ice-cream_144627-19532.jpg?w=740&t=st=1663055925~exp=1663056525~hmac=81b8b8bc2df5ceadf1213097960334b6ce3eb17ea98f346be7c25be47fafaf70"
          alt="ice"
          className="mini-image"
        />
      </Card>
    </Container>
    <CustomButton type="button">Order Now</CustomButton>
  </div>
)

export default App
