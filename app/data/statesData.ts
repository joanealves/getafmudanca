export interface State {
  name: string;
  code: string;
  capital: string;
  featured?: boolean;
}

export const statesData: State[] = [
  { name: 'Minas Gerais', code: 'MG', capital: 'Belo Horizonte', featured: true },
  { name: 'São Paulo', code: 'SP', capital: 'São Paulo', featured: true },
  { name: 'Rio de Janeiro', code: 'RJ', capital: 'Rio de Janeiro', featured: true },
  { name: 'Espírito Santo', code: 'ES', capital: 'Vitória', featured: true },
  { name: 'Bahia', code: 'BA', capital: 'Salvador', featured: true },
  { name: 'Goiás', code: 'GO', capital: 'Goiânia', featured: true },
  { name: 'Distrito Federal', code: 'DF', capital: 'Brasília', featured: true },
  { name: 'Mato Grosso', code: 'MT', capital: 'Cuiabá', featured: true },
  { name: 'Mato Grosso do Sul', code: 'MS', capital: 'Campo Grande', featured: true },
  { name: 'Paraná', code: 'PR', capital: 'Curitiba' },
  { name: 'Santa Catarina', code: 'SC', capital: 'Florianópolis' },
  { name: 'Rio Grande do Sul', code: 'RS', capital: 'Porto Alegre' },
  { name: 'Pará', code: 'PA', capital: 'Belém' },
  { name: 'Amazonas', code: 'AM', capital: 'Manaus' },
  { name: 'Acre', code: 'AC', capital: 'Rio Branco' },
  { name: 'Rondônia', code: 'RO', capital: 'Porto Velho' },
  { name: 'Roraima', code: 'RR', capital: 'Boa Vista' },
  { name: 'Amapá', code: 'AP', capital: 'Macapá' },
  { name: 'Tocantins', code: 'TO', capital: 'Palmas' },
  { name: 'Maranhão', code: 'MA', capital: 'São Luís' },
  { name: 'Piauí', code: 'PI', capital: 'Teresina' },
  { name: 'Ceará', code: 'CE', capital: 'Fortaleza' },
  { name: 'Rio Grande do Norte', code: 'RN', capital: 'Natal' },
  { name: 'Paraíba', code: 'PB', capital: 'João Pessoa' },
  { name: 'Pernambuco', code: 'PE', capital: 'Recife' },
  { name: 'Alagoas', code: 'AL', capital: 'Maceió' },
  { name: 'Sergipe', code: 'SE', capital: 'Aracaju' },
];

// Estados com maior volume de viagens (onde fazem mais viagens)
export const servedStatesData: State[] = [
  { name: 'Minas Gerais', code: 'MG', capital: 'Belo Horizonte' },
  { name: 'São Paulo', code: 'SP', capital: 'São Paulo' },
  { name: 'Rio de Janeiro', code: 'RJ', capital: 'Rio de Janeiro' },
  { name: 'Espírito Santo', code: 'ES', capital: 'Vitória' },
  { name: 'Bahia', code: 'BA', capital: 'Salvador' },
  { name: 'Goiás', code: 'GO', capital: 'Goiânia' },
  { name: 'Distrito Federal', code: 'DF', capital: 'Brasília' },
  { name: 'Mato Grosso', code: 'MT', capital: 'Cuiabá' },
  { name: 'Mato Grosso do Sul', code: 'MS', capital: 'Campo Grande' },
];