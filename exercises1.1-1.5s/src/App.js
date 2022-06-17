const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
} 

const Content = (props) => {
  return (<>
    <Part part = {props.partExercise[0].name} exercise = {props.partExercise[0].exercises} />
    <Part part = {props.partExercise[1].name} exercise = {props.partExercise[1].exercises} />
    <Part part = {props.partExercise[2].name} exercise = {props.partExercise[2].exercises} />
  </>)
}

const Part = ({part,exercise}) => {
  return (<p>{part} {exercise}</p>)
}

const Total = (props) => {
  const tot = props.num[0].exercises + props.num[1].exercises + props.num[2].exercises
  return (<p>Number of exercises {tot}</p>)
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content partExercise = {course.parts} />
      <Total num = {course.parts} />
    </>
  )
}

export default App