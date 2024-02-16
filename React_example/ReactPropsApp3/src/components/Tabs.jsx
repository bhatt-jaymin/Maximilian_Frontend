import React from "react";

export default function Tabs({children,buttons,ButtonsContainer='menu'}){

    //const ButtonsContainer=buttonsContainer
    return(
        <>
        <ButtonsContainer className="flex justify-center mt-7">
                {buttons}
        </ButtonsContainer>
        {children}
        </>

    )
}