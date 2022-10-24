import { Box } from '@mui/material';
import type { NextPage } from 'next';
import { Professor } from '../src/@types/professor';
import Lista from '../src/components/Lista/Lista';

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "JVSM",
      descricao: "Descrição do professor 1",
      valor_hora: 100,
      foto: "https://yt3.ggpht.com/nLwDe1HqGnRoiAOQNDUnoEFi43USmicToiuBVAnq4Js0bV-JZC4zige-IRVmph2BqT38p14O=s88-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      id: 2,
      nome: "JVSM",
      descricao: "Descrição do professor 2",
      valor_hora: 100,
      foto: "https://yt3.ggpht.com/nLwDe1HqGnRoiAOQNDUnoEFi43USmicToiuBVAnq4Js0bV-JZC4zige-IRVmph2BqT38p14O=s88-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      id: 3,
      nome: "JVSM",
      descricao: "Descrição do professor 3",
      valor_hora: 100,
      foto: "https://yt3.ggpht.com/nLwDe1HqGnRoiAOQNDUnoEFi43USmicToiuBVAnq4Js0bV-JZC4zige-IRVmph2BqT38p14O=s88-c-k-c0x00ffffff-no-rj-mo",
    },
    {
      id: 4,
      nome: "JVSM",
      descricao: "Descrição do professor 4",
      valor_hora: 100,
      foto: "https://yt3.ggpht.com/nLwDe1HqGnRoiAOQNDUnoEFi43USmicToiuBVAnq4Js0bV-JZC4zige-IRVmph2BqT38p14O=s88-c-k-c0x00ffffff-no-rj-mo",
    },
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={professores}></Lista>
    </Box>
  )
}

export default Home
