import './App.css';
import StudentList from './components/StudentList';
import ClassInfo from './components/ClassInfo';

function App() {
  const studentData = [
    {
        nameData: 'Persephone',
        emailData: 'meow@dev.org'
    },
    {
        nameData: 'Amel',
        emailData: 'amel@dev.org'
    },
    {
        nameData: 'Chidi',
        emailData: 'chidithecat@dev.org'
    }
];
  const studentCount = studentData.length;
  return (
    <main>
      <h1>Attendance</h1>
      <ClassInfo classSize={studentCount}></ClassInfo>
      <StudentList students={studentData}></StudentList>
    </main>
  );
}

export default App;
