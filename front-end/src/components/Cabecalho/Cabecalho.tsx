import { CabecalhoContainer, Logo } from "./Cabecalho.styles"

export const Cabecalho = () => {
    return (
        <CabecalhoContainer>
            <div>
                <Logo src="/images/myteacher.png"/>
            </div>
            
            <p>Encontre o professor perfeito!</p>
        </CabecalhoContainer>
    )
}