import { FormData } from '@/components/ContactForm';

async function sendEmail(data: FormData): Promise<{ success: boolean; message: string }> {
  const apiEndpoint = '/api/email';

  try {
    const res = await fetch(apiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Failed to send email');
    }

    const response = await res.json();
    return { success: true, message: response.message || 'Email sent successfully' };
  } catch (error: any) {
    return { success: false, message: error.message || 'Something went wrong' };
  }
}

export default sendEmail;
