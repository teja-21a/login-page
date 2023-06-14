import './App.css';
import Input,{Header,} from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div class="fullName">
      <Input name = "First Name" namePlaceholder =  "Enter your first name" />
      <Input name = "Last Name" namePlaceholder = "Enter your last name"/>
      </div>
      <div class="contactDetails">
        <Input name = "Email" type="Email" namePlaceholder="Enter your mail address"/>
        <Input name = "Phone" type="tel" namePlaceholder="+91"/>
      </div>
      <div class="optionSubmission">
      <Input  type="Cancel" value="Cancel"/>
      <Input  type="Submit" value="Submit"/>
      </div>
    </div>
  );
}

export default App;
