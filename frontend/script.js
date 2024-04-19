class Form {
    constructor() {
      this.fields = [];
    }
  
    addField(field) {
      this.fields.push(field);
    }
  
    validate() {
      let isValid = true;
      this.fields.forEach(field => {
        if (!field.validate()) {
          isValid = false;
        }
      });
      return isValid;
    }
  }
  
  class InputField {
    constructor(id, regex) {
      this.element = document.getElementById(id);
      this.regex = regex;
    }
  
    validate() {
      return this.regex.test(this.element.value);
    }
  }
  
  const form = new Form();
  const usernameField = new InputField('username', /^[a-zA-Z0-9_-]{3,16}$/);
  const emailField = new InputField('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  
  form.addField(usernameField);
  form.addField(emailField);
  
  document.getElementById('submitBtn').addEventListener('click', () => {
    if (form.validate()) {
      alert('Form is valid! Submitting data...');
      // Here you can submit the form data to the server
    } else {
      alert('Form is invalid! Please check your inputs.');
    }
  });