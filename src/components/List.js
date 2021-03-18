import React from  'react'

const List = () => {

     const persons = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr']
     const personList = persons.map((person) =><h2>{person}</h2>)
    return(
        <div>
            {
                //Implicit return
                // persons.map((person) =><h2>{person}</h2>)

                // explicit return
                // persons.map((person) => {
                //     return(
                //         <h2>{person}</h2>
                //     )
                // })

                // variable return
                personList
            }
        </div>
    )
}
export default List
