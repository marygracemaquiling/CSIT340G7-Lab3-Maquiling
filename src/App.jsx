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
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </div>
  )
}

const Total = (props) => {
  return <p>Number of units {props.total}</p>
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
  const part1 = {
    name: 'CSIT340 - Industry Elective',
    units: 3
  }
  const part2 = {
    name: 'CSIT321 - Applications Development and Emerging Technology',
    units: 3
  }
  const part3 = {
    name: 'CSIT327 – Information Management',
    units: 3
  }

  const studentInfo = {
    fullName: 'Mary Grace Maquiling',
    courseCode: 'CSIT340',
    section: 'G7'
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total total={part1.units + part2.units + part3.units} />
      <Footer 
        fullName={studentInfo.fullName} 
        courseCode={studentInfo.courseCode} 
        section={studentInfo.section} 
      />
    </div>
  )
}

export default App