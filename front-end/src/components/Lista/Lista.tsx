import { Button } from "@mui/material"
import { Professor } from "../../@types/professor"
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, ListaVazia, Nome, Valor } from "./Lista.style"

interface ListProps {
    professores: Professor[],
}

const Lista = (props: ListProps) => {
    return (
        <div>
            {props.professores.length > 0 ? (
                <ListaStyled>
                    {props.professores.map(professor => (
                        <ItemLista key={professor.id}>
                            <Foto src={professor.foto}></Foto>
                            <Informacoes>
                                <Nome>{professor.nome}</Nome>
                                <Valor>{professor.valor_hora.toLocaleString('pt-BR',{minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})}</Valor>
                                <Descricao>{professor.descricao}</Descricao>
                                <Button sx={{ width: '70%', borderRadius: '8px' }}>Marcar aula com JVSM</Button>
                            </Informacoes>
                        </ItemLista>
                    ))}
                </ListaStyled>
            ) : (
                <ListaVazia>Nenhum item encontrado!</ListaVazia>
            )}
        </div>
    )
}

export default Lista