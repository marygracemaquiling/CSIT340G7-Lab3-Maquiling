const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.units}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of units {props.parts[0].units + props.parts[1].units + props.parts[2].units}</p>
}

const Footer = (props) => {
  return (
    <footer>
      <hr />
      <p>{props.fullName} - {props.courseCode} - {props.section}</p>
    </footer>
  )
}

const App = () => {
  const course = 'Bachelor of Science in Information Technology'
  const parts = [
    {
      name: 'CSIT340 - Industry Elective',
      units: 3
    },
    {
      name: 'CSIT321 - Applications Development and Emerging Technology',
      units: 3
    },
    {
      name: 'CSIT327 – Information Management',
      units: 3
    }
  ]

  const studentInfo = {
    fullName: 'Mary Grace Maquiling',
    courseCode: 'CSIT340',
    section: 'G7'
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
      <Footer 
        fullName={studentInfo.fullName} 
        courseCode={studentInfo.courseCode} 
        section={studentInfo.section} 
      />
    </div>
  )
}

export default App