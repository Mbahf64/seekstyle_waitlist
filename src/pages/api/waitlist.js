import connectToDatabase from '../../../lib/mongodb';
import Waitlist from '../../../models/Waitlist';

export default async function handler(req, res) {
  const { method } = req;

  await connectToDatabase();

  switch (method) {
    case 'POST':
      try {
        const { email } = req.body;

        if (!email) {
          return res.status(400).json({ message: 'Email is required' });
        }

        const newEntry = new Waitlist({ email });
        await newEntry.save();
        res.status(201).json({ message: 'You have been added to the waitlist!' });
      } catch (error) {
        if (error.code === 11000) {
          res.status(400).json({ message: 'Email already exists in the waitlist' });
        } else {
          res.status(500).json({ message: 'Server error' });
        }
      }
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
