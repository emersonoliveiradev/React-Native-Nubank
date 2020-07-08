import React from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'
import QRCode from 'react-native-qrcode-svg'
import { RectButton } from 'react-native-gesture-handler'
import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './styles'

export default function Menu() {
  return (
    <Container>
      <Code>
        <QRCode
          value="https://www.youtube.com/watch?v=DDm0M_rZLJo&t=3030s"
          size={80}
          backgroundColor="#fff"
          color="#8b10ae"
        />
      </Code>
      <Nav>
        <RectButton onPress={() => {}}>
          <NavItem>
            <Icon name="help-outline" size={20} color="#fff" />
            <NavText>Me ajuda</NavText>
          </NavItem>
        </RectButton>
        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText>Meu perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" size={20} color="#fff" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#fff" />
          <NavText>Configurações do app</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Sair do App</SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}
