
export const Dojo = () => {
    const listaTareas = ["Learn React","Climb Mt. Everest","Run a marathon","Feed the dogs"];

    return(
        <>
            <ul>
                {
                    listaTareas.map( tareas => {
                        return (
                            <li className="tarea">{tareas}</li>
                        );
                    })
                }
            </ul>
        </>
    )
}

export default Dojo;