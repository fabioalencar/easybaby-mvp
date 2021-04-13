import React from 'react';
import Container from './styles';
import Box from '../Box';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

const searchClient = algoliasearch(
  'RUUKE3CWKK',
  '7b40c60068df98b3e37cb8bc90275500'
);

export default function Search() {
  return (
    <Container>
      <InstantSearch indexName="EasyBaby" searchClient={searchClient}>
        <SearchBox
          translations={{
            resetTitle: 'Limpe sua busca.',
            placeholder: 'Insira sua busca...',
          }}
        />
        <Hits hitComponent={Box} />
      </InstantSearch>
    </Container>
  );
}
