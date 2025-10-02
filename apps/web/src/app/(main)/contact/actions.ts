'use server';

import { submitContactForm } from '@repo/api/brand';

type ContactFormState = {
  ok: boolean;
  message: string | null;
};

export async function contactFormAction(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const email = formData.get('email') as string;
  const name = formData.get('name') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;
  const phone = formData.get('phone') as string;

  if (!(email && message)) {
    return { ok: false, message: 'Email and message are required.' };
  }

  try {
    const result = await submitContactForm({
      name,
      email,
      subject,
      message,
      phone,
    });

    return { ok: result.success, message: result.message };
  } catch (error) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : 'Unexpected error',
    };
  }
}
