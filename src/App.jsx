const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return (
    <p>{props.part.name} {props.part.units}</p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of units {props.course.parts[0].units + props.course.parts[1].units + props.course.parts[2].units}
    </p>
  )
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
  const course = {
    name: 'Bachelor of Science in Information Technology',
    parts: [
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
  }

  const studentInfo = {
    fullName: 'Mary Grace Maquiling',
    courseCode: 'CSIT340',
    section: 'G7'
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      <Footer 
        fullName={studentInfo.fullName} 
        courseCode={studentInfo.courseCode} 
        section={studentInfo.section} 
      />
    </div>
  )
}

export default App