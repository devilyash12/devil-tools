const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yashraj190402:yashking12@cluster0.alw9k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

const formSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String
});

const Form = mongoose.model('Form', formSchema);

app.post('/api/form', async (req, res) => {
  const { name, email, phone } = req.body;
  const form = new Form({ name, email, phone });
  try {
    await form.save();
    res.status(201).send(`Form submitted successfully!`);
  } catch (error) {
    res.status(500).send(`Error submitting form: ${error}`);
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});