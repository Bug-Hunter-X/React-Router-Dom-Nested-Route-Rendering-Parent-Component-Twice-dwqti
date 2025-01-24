```javascript
import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactLayout/>}>
          <Route path=":id" element={<ContactDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }

function ContactLayout() {
  let location = useLocation();
  console.log(location);
  return (
    <div>
       <h1>Contact</h1>
      <Outlet/>
    </div>
  );
}

function ContactDetails() { return <h1>Contact Details</h1>; }
export default App;
```