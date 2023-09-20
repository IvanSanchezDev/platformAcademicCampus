import styled from "styled-components"

const Information=({})=>{

    
    return(
        <InformationWrapper>
            <div className="bg-white border" >
                <h1>Curso completo de Reactjs: De cero a avanzado.</h1>
                <p>Conviértete en profesional de la Ciberseguridad y aprende a proteger infraestructuras reales contra Hacking y mucho más!</p>
                <ul>
                <li>Components</li>
                <li>Props</li>
                </ul>
            </div>
        </InformationWrapper>
    )

}

const InformationWrapper=styled.div`
    position: fixed;
    padding: 10px;
    width: 340px;
    transform: translateX(65%);
`;


export default Information