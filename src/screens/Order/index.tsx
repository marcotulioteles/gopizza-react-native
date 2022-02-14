import React, { useState } from "react";
import { Platform } from "react-native";

import { PIZZA_TYPES } from '@utils/pizzaTypes';

import { ButtonBack } from '@components/ButtonBack'
import { RadioButton } from "@components/RadioButton";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

import {
  Container,
  Form,
  Header,
  Photo,
  Sizes,
  FormRow,
  InputGroup,
  Label,
  Price,
  Title,
  ContentScroll
} from './styles';

export function Order() {
  const [size, setSize] = useState('g');

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ContentScroll>
        <Header>
          <ButtonBack
            onPress={() => {}}
            style={{ marginBottom: 108 }}
          />
        </Header>

        <Photo source={{ uri: 'https://st4.depositphotos.com/16122460/21136/i/1600/depositphotos_211366350-stock-photo-flat-lay-composition-tasty-homemade.jpg' }} />

        <Form>
          <Title>Nome da pizza</Title>
          <Label>Selecione um tamanho</Label>

          <Sizes>
            {PIZZA_TYPES.map(item => (
              <RadioButton
                key={`pizza${item.id}`}
                title={item.name}
                onPress={() => setSize(item.id)}
                selected={size === item.id}
              />
            ))}
          </Sizes>

          <FormRow>
            <InputGroup>
              <Label>Número da Mesa</Label>
              <Input keyboardType='numeric' />
            </InputGroup>

            <InputGroup>
              <Label>Quantidade</Label>
              <Input keyboardType='numeric' />
            </InputGroup>
          </FormRow>

          <Price>Valor de R$ 0,00</Price>

          <Button
            title='Confirmar pedido'
            type='secondary' />
        </Form>
      </ContentScroll>
    </Container>
  )
}