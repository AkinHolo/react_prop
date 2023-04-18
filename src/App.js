import Profile from './Profile/Profile'

function App() {
  // const alertMyInput = name => alert(name);
  const handleName = fullname => alert(fullname);
 

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', margin: '20px'}}>
        <Profile fullname='Akin Holo' profession='web developer' handleName={handleName} />
       
    </div>
  );
}

export default App;
