
import logo from "../../assets/logo.png"
import topo from "../../assets/topo.png"

import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brócolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abóbora.png';


const cesta = {
    Topo:{
        titleCesta:"Detalhes da Cesta",
        topoImage:topo
    },
    details:{
        NameCesta:"Cesta de Verduras",
        NameFarm:"Fazendinha L.Ivis",
        DescriptionCesta:"uma cesta com produtos selecionados cuidadosamente da Fazendinha direto para sua cozinha.",
        PriceCesta:"R$ 50,00",
        logoFarm:logo,
        botao:"comprar"
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
          {
            nome: "Tomate",
            imagem: tomate,
          },
          {
            nome: "Brócolis",
            imagem: brocolis,
          },
          {
            nome: "Batata",
            imagem: batata,
          },
          {
            nome: "Pepino",
            imagem: pepino,
          },
          {
            nome: "Abóbora",
            imagem: abobora,
          }
        ]
      }
}

export default cesta