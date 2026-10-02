const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.units1}</p>
      <p>{props.part2} {props.units2}</p>
      <p>{props.part3} {props.units3}</p>
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
  const part1 = 'CSIT340 - Industry Elective'
  const units1 = 3
  const part2 = 'CSIT321 - Applications Development and Emerging Technology'
  const units2 = 3
  const part3 = 'CSIT327 – Information Management'
  const units3 = 3

  const studentInfo = {
    fullName: 'Mary Grace Maquiling',
    courseCode: 'CSIT340',
    section: 'G7'
  }  
  return (
    <div>
      <Header course={course} />
      <Content 
        part1={part1} units1={units1}
        part2={part2} units2={units2}
        part3={part3} units3={units3}
      />
      <Total total={units1 + units2 + units3} />
      <Footer 
        fullName={studentInfo.fullName} 
        courseCode={studentInfo.courseCode} 
        section={studentInfo.section} 
      />
    </div>
  )
}

export default App