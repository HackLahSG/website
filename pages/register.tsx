import Image from 'next/image'


export default function Register() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let fullName = (document.getElementById('fullName') as HTMLInputElement)?.value || '';
    let contactEmail = (document.getElementById('contactEmail')as HTMLInputElement)?.value || '';
    let birthday = (document.getElementById('birthday') as HTMLInputElement)?.value || '';
    let tshirtSize = (document.getElementById('tshirtSize') as HTMLInputElement)?.value || '';
    let techSkills = (document.getElementById('technical-skills') as HTMLInputElement)?.value || '';
    
    const today = new Date();
    const birthdate = new Date(birthday);
  
    // Validate full name
    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }
  
    // Validate contact email
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(contactEmail)) {
      alert("Please enter a valid contact email.");
      return;
    }
  
    // Validate age
    const ageDiffMs = today.getTime() - birthdate.getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);
    if (age < 11) {
      alert("You must be at least 11 years old to participate.");
      return;
    }
  
    // Validate T-shirt size
    if (!tshirtSize) {
      alert("Please select a T-shirt size.");
      return;
     }
  
  
    // If all validations pass, log the form data
    console.log({
      fullName,
      contactEmail,
      birthday,
      tshirtSize,
      techSkills
    });    

    const apiKey = 'pat4WEsvlUpI9ROZf.4dfd41cd6111ab2b96b6942ea9095eafa8f083571f44bba37bd497dd4e657bbe'; // Replace with your actual API key
    const baseId = 'appBj2vWvfpuoiZAj'; // Replace with your actual base ID
    const tableName = 'tbl5eM02rT51YG3cB'; // Replace with your actual table name

// Make a GET request to retrieve all records from a table
fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
})
  .then(response => response.json())
  .then(data => {
    console.log(data); // Do something with the retrieved data
  })
  .catch(error => {
    console.error(error);
  });

// Make a POST request to create a new record in a table
fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  },
  body: JSON.stringify({
    fields: {
      Name: fullName,
      Email: contactEmail,
      Size: tshirtSize,
      Proficiency: techSkills,
    },
  }),
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    window.location.href = '/';

  })
  .catch(error => {
    console.error(error);
  });

  const form = event.currentTarget;
  form.reset();

  

  };
  
  return (
    <div className='o' id='form'>
<a href="/">
<div>
<Image src={"/images/logo.png"} alt="logo" width={500} height={200} className="logo" />
</div>
</a>

<form className="form" onSubmit={handleSubmit}>
  
<div className='infoblockreg'>
<p style={{marginLeft:"2%"}}>Yo nerd,<br/><br/> You&apos;re Invited! It&apos;s hackathon season and for the first time ever HackLah! is here.<br/>
<br/>
📅 &nbsp;&nbsp;<b>Date & Time:</b> 5 p.m. on the 3rd of June to at 10 p.m. on 5th of June.
<br/>
<br/>

<b>📍&nbsp;&nbsp;Venue:</b> Online
<br/>
<br/>
<b>💻&nbsp;&nbsp;Eligibility:</b> all secondary, pre-university and JC students are welcome to join (no experience required!).
<br/>
<br/>
Do show up if you&apos;ve registered as you could be taking up someone else&apos;s chance to experience a Hackathon. Reach out to us at <a href="mailto:aarav@hacklah.com">aarav@hacklah.com</a> to cancel or for any enquries.

</p>



</div>

<div className="input_container">
<label htmlFor="fullName" className="input_label">Full Name</label>
<input type="text" id="fullName" className="input_field" placeholder="Your Name" required />
</div>

<div className="input_container">
    <label htmlFor="contactEmail" className="input_label">Contact Email</label>
    <input type="email" id="contactEmail" className="input_field" placeholder="example@example.com" required />
  </div>

  <div className="input_container">
    <label htmlFor="birthday" className="input_label">Birthday (Age must be more than 11)</label>
    <input type="date" id="birthday" className="input_field" placeholder="YYYY-MM-DD" required/>
  </div>

  <div className="input_container">
    <label htmlFor="tshirtSize" className="input_label">T-Shirt Size</label>
    <select id="tshirtSize" className="select_field" required>
      <option value="" disabled selected>Select a size</option>
      <option value="S">Small</option>
      <option value="M">Medium</option>
      <option value="L">Large</option>
    </select>
  </div>

  <div className="input_container">
    <label htmlFor="technical-skills" className="input_label">Proficiency Level</label>
    <select id="technical-skills" className="select_field" required>
      <option value="" disabled selected>Select a level</option>
      <option value="B">Beginner - I suck</option>
      <option value="I">Intermediate - It&apos;s all cool but I&apos;m no wizard</option>
      <option value="A">Advanced - Instead of dodging bullets, you dodge syntax errors.</option>
    </select>
  </div>

  <button type="submit" className="submit_button">Submit</button>
</form>
</div>

  );
}
