import React, {useEffect} from 'react';
import { peopleList } from '../services/actions/peopleAction'
import { connect } from "react-redux";

const People = ({peopleList, loading, people, error}) => {

    useEffect(() => {
        peopleList()
    },[])

    return (
        <div>
            {
                loading ? <h3>Loading....</h3> : error ? <h3>{error}</h3> : <div>
                    {
                        people.map(person => {
                            return <p> {person.title }</p>
                        })
                    }
                </div>
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
  loading: state.peopleReducer.loading,
  people: state.peopleReducer.people,
  error: state.peopleReducer.error,
})


export default connect(mapStateToProps, {peopleList})(People);
