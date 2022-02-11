import React from "react";
import { Platform } from "react-native";

import { ButtonBack } from '@components/ButtonBack'
import { RadioButton } from "@components/RadioButton";

import {
  Container,
  Header,
  Photo,
  Sizes
} from './styles';

export function Order() {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header>
        <ButtonBack
          onPress={() => {}}
          style={{ marginBottom: 108 }}
        />
      </Header>

      <Photo source={{ uri: 'https://st4.depositphotos.com/16122460/21136/i/1600/depositphotos_211366350-stock-photo-flat-lay-composition-tasty-homemade.jpg' }} />

      <Sizes>
        <RadioButton
          title='Pequena'
          selected={false}
        />
      </Sizes>
    </Container>
  )
}