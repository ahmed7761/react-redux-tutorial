import React from  'react'
import Student from "./Student";

const StudentList = () => {

    const students = [
        {
            id:1,
            name: 'Sharif'
        },
        {
            id:2,
            name: 'Hasan'
        },
        {
            id:3,
            name: 'Ahmed'
        }
    ]
    //  const studentList = students.map((student) => <Student student={student}/>)
    return (
        <div>
            {
                students.map(student => {
                    return (
                        <div key={student.id}>
                            <Student  student={student}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default StudentList
