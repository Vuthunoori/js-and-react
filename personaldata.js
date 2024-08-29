function processData({ personalInfo: { name, address: { city, state } }, contact: { email, phone }, skills }) {

  const [firstSkill, secondSkill] = skills;


  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone}`);
  console.log(`City: ${city}`);
  console.log(`State: ${state}`);
  console.log(`First Skill: ${firstSkill}`);
  console.log(`Second Skill: ${secondSkill}`);
}


const userData = {
  personalInfo: {
    name: 'LAHARI',
    address: {
      city: 'Hyderabad',
      state: 'Telangana'
    }
  },
  contact: {
    email: 'lahari.@example.com',
    phone: '9999999999'
  },
  skills: ['javaScript', 'html', 'css']
};


processData(userData);
