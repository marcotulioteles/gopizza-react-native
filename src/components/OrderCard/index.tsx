import React from 'react';
import { TouchableOpacityProps } from 'react-native';


import {
  Container,
  Description,
  Image,
  Name,
  StatusContainer,
  StatusLabel
} from './styles';

type Props = TouchableOpacityProps & {
  index: number;
}

export function OrderCard({ index, ...rest }: Props) {
  return (
    <Container index={index} {...rest}>
      <Image source={{ uri: 'https://st4.depositphotos.com/16122460/21136/i/1600/depositphotos_211366350-stock-photo-flat-lay-composition-tasty-homemade.jpg' }} />

      <Name>4 Queijos</Name>

      <Description>Mesa 4 ⚬ Qnt: 1</Description>

      <StatusContainer status='preparando'>
        <StatusLabel status='preparando'>Preparando</StatusLabel>
      </StatusContainer>
    </Container>
  )
}