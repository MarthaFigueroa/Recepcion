import React from 'react'
// import image from '../public/img/exercise.png'
import ExerciseList from '../components/ExerciseList'
import Welcome from '../components/Welcome'
import AddButton from '../components/AddButton'

class Exercises extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                    <Welcome username="Martha xd"/>
                    <ExerciseList exercises={this.state.data} />
                    <AddButton />

            </div>
        )
    }
}

export default Exercises;