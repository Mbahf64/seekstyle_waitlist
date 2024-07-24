// pages/api/subscribe.js

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: 'Email is required' });
    return;
  }

  const mailchimpUrl = 'https://gmail.us17.list-manage.com/subscribe/post?u=8e715bcf314525a8ae38cfeb3&id=a2423c6411&f_id=00e7e9e3f0';

  const params = new URLSearchParams();
  params.append('EMAIL', email);
  params.append('b_8e715bcf314525a8ae38cfeb3_a2423c6411', '');

  try {
    const response = await fetch(mailchimpUrl, {
      method: 'POST',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.ok || response.status === 302) {
      res.status(200).json({ message: 'You have been added to the waitlist!' });
    } else {
      res.status(400).json({ message: 'Something went wrong.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error: Unable to submit your request.' });
  }
}
