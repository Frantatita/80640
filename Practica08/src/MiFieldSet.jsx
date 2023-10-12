


function MiFieldSet(props){
    const {titulo,txt1,txt2} = props
        return(
            <>
                <fieldset>
                    <legend>{Titulo}</legend>
                    <label htmlFor={txt1}>{txt1}</label>
                    <input type={Text} id="txt1">
                    <label htmlFor={txt2}>{txt2}</label>
                    <input type={Text} id="txt2">

                </fieldset>
            </>  
        )
}

export default MiFieldSet
