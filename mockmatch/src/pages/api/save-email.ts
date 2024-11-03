// src/pages/api/save-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      res.status(400).json({ message: 'Email is required' });
      return;
    }

    try {
      const { error } = await supabase.from('emails').insert([{ email }]);

      if (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving email' });
      } else {
        res.status(200).json({ message: 'Email saved successfully' });
      }
    } catch (error) {
      console.error('Unexpected error:', error);
      res.status(500).json({ message: 'Unexpected error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
