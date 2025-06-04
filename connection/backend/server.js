import express from 'express';

const app = express()

app.get('/', (req, res) => {
  res.send('server is ready');
});

app.get('/api/jokes', (req, res)=>{
    const jokes = [
  {
    id: 1,
    title: 'A joke',
    content: 'This is a joke',
  },
  {
    id: 2,
    title: 'Another joke',
    content: 'This is another joke',
  },
  {
    id: 3,
    title: 'Dad joke',
    content: 'I only know 25 letters of the alphabet. I don’t know y.',
  },
  {
    id: 4,
    title: 'Time traveler',
    content: 'I asked my future self if I ever become a time traveler. He said "not yet".',
  },
  {
    id: 5,
    title: 'Math joke',
    content: 'Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else.',
  },
  {
    id: 6,
    title: 'Programmer joke',
    content: 'Why do programmers prefer dark mode? Because light attracts bugs.',
  },
  {
    id: 7,
    title: 'Knock knock',
    content: 'Knock knock. Who’s there? Control freak. Con... Okay, now you say "Control freak who?"',
  },
  {
    id: 8,
    title: 'Coffee joke',
    content: 'How does Moses make his coffee? Hebrews it.',
  },
  {
    id: 9,
    title: 'Elevator joke',
    content: 'I took my new dog to the elevator. He’s a step dog now.',
  },
  {
    id: 10,
    title: 'Chicken joke',
    content: 'Why did the chicken go to the séance? To talk to the other side.',
  }
];


res.send(jokes)
})


const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`the server is running on http://localhost:${port}`)
})