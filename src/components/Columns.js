import React, {Fragment} from 'react'

const Columns = () => {

    let arr = ['item one', 'item two']

    return (
        arr.map((item, index) => {
          return <Fragment key={index}>
              <td>{item}</td>
          </Fragment>
        })
    )
}

export default Columns
