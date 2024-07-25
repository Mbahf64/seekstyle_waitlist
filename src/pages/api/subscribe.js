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

  const mailchimpApiKey = process.env.MAILCHIMP_API_KEY;
  const mailchimpServerPrefix = process.env.MAILCHIMP_SERVER_PREFIX; 
  const listId = process.env.MAILCHIMP_LIST_ID;

  const mailchimpUrl = `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`;

  try {
    const response = await fetch(mailchimpUrl, {
      method: 'POST',
      headers: {
        'Authorization': `apikey ${mailchimpApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    });

    if (response.ok) {
      res.status(200).json({ message: 'You have been added to the waitlist!' });
    } else {
      const errorData = await response.json();
      res.status(400).json({ message: 'Something went wrong.', error: errorData });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error: Unable to submit your request.' });
  }
}
