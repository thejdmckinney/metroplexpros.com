-- Create newsletter_subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  source TEXT NOT NULL,
  confirm_token TEXT UNIQUE NOT NULL,
  confirmed BOOLEAN DEFAULT FALSE,
  confirmed_at TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers(email);

-- Create index on confirm_token for faster confirmation lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_token ON newsletter_subscribers(confirm_token);

-- Create index on confirmed status
CREATE INDEX IF NOT EXISTS idx_newsletter_confirmed ON newsletter_subscribers(confirmed);

-- Add RLS (Row Level Security) policies
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policy: Allow service role to do everything
CREATE POLICY "Service role can do everything" 
  ON newsletter_subscribers 
  FOR ALL 
  USING (auth.role() = 'service_role');

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger to automatically update updated_at
CREATE TRIGGER update_newsletter_subscribers_updated_at 
  BEFORE UPDATE ON newsletter_subscribers 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
