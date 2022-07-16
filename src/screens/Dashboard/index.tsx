import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';

import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}
export function Dashboard() {
  const data: DataListProps[] =[
    { type: 'positive',
      id: '1',
      title: 'Salário',
      amount: 'R$ 1.000,00',
      category: {
        name: 'Salário',
        icon: 'dollar-sign',
      },
      date: '13/07/22',
    },
    { type: 'negative',
      id: '2',
      title: 'Lazer',
      amount: 'R$ 1.000,00',
      category: {
        name: 'Lazer',
        icon: 'gift',
      },
      date: 'Hoje',
    },
    { type: 'negative',
      title: 'Alimentação',
      id: '3',
      amount: 'R$ 800,00',
      category: {
        name: 'Alimentação',
        icon: 'coffee',
      },
      date: 'Hoje',
    }
  ]
    return (
        <Container>
          <Header>
            <UserWrapper>
              <UserInfo>
                <Photo source={{uri: 'https://avatars.githubusercontent.com/u/45977515?v=4'}}/>
                <User>
                  <UserGreeting>Olá,</UserGreeting>
                  <UserName>Gabriel</UserName>
                </User>
              </UserInfo>
              <Icon name="power"/>
            </UserWrapper>
          </Header>

          <HighlightCards>
            <HighlightCard title="Entradas" amount="R$ 17.400,00" lastTransaction="Última entrada dia 13 de abril" type="up" />
            <HighlightCard title="Saídas" amount="R$ 1.259,00" lastTransaction="Última saída 03 de abril" type="down"/>
            <HighlightCard title="Total" amount="R$ 16.141,00" lastTransaction="01 à 16 de abril" type="total" />
          </HighlightCards>

          <Transactions>
            <Title>Listagem</Title>
            <TransactionsList
              data={data}
              keyExtractor={item => item.id}
              renderItem={({ item }) => <TransactionCard data={item} />}
            />
          </Transactions>
        </Container>
    )
}