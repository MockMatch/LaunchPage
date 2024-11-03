// src/pages/api/save-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pcpuinxamasbavifrxbb.supabase.co';
const supabaseServiceRoleKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBjcHVpbnhhbWFzYmF2aWZyeGJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2MjY1NDksImV4cCI6MjA0NjIwMjU0OX0.qVm_vHP_8SgMhGZAg9gZ_kU7QP1Xjbgn7W1LGaOufNU'; // Your actual service role key

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
